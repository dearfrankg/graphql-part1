import React from "react";
import { graphql } from "react-apollo";
import { gql } from "apollo-boost";
import styled from "styled-components";

const TOP_REPOS = gql`
  {
    search(query: "stars:>50000", type: REPOSITORY, first: 10) {
      repositoryCount
      edges {
        node {
          ... on Repository {
            name
            owner {
              login
            }
            stargazers {
              totalCount
            }
          }
        }
      }
    }
  }
`;

const RepoTable = styled.div`
  margin: 50px 20px;
  display: flex;
  flex-direction: column;
  border: 1px solid #efefef;
`;

const RepoRow = styled.div`
  display: flex;
  border-bottom: 1px solid #efefef;

  &:nth-last-child(1) {
    border-bottom: none;
  }
`;

const RepoHead = styled.div`
  flex: 6;
  padding: 10px 20px;
  font-weight: 600;
  text-align: left;

  &:nth-last-child(1) {
    flex: 4;
    text-align: right;
  }
`;

const RepoCell = styled.div`
  flex: 6;
  padding: 10px 20px;
  text-align: left;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  &:nth-child(2) {
    font-weight: 600;
  }

  &:nth-last-child(1) {
    flex: 4;
    text-align: right;
  }
`;

const Loading = () => <RepoTable>Loading...</RepoTable>;

const Table = props => (
  <RepoTable>
    <RepoRow>
      <RepoHead>Organization</RepoHead>
      <RepoHead>Repo</RepoHead>
      <RepoHead>Stars</RepoHead>
    </RepoRow>

    {props.data.search.edges.map((row, i) => (
      <RepoRow key={i}>
        <RepoCell>{row.node.owner.login}</RepoCell>
        <RepoCell>{row.node.name}</RepoCell>
        <RepoCell>{row.node.stargazers.totalCount}</RepoCell>
      </RepoRow>
    ))}
  </RepoTable>
);

const TopRepos = graphql(TOP_REPOS)(props =>
  props.data.loading ? <Loading /> : <Table {...props} />
);

export default TopRepos;
