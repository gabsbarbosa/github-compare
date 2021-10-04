const REPOSITORY_WITH_ISSUES = gql`
  query REPOSITORY_WITH_ISSUES($owner: String!, $name: String!) {
    repository(owner: $owner, name: $name) {
      nameWithOwner
      stargazerCount
      forkCount
      issues(last: 5) {
        totalCount
        nodes {
          id
          title
          url
        }
        createdAt
        updatedAt
        licenseInfo{name}
      }
    }
  }
`;