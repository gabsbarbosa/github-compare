import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';

const REPOSITORY = gql`
  query REPOSITORY($owner: String!, $name: String!) {
    repository(owner: $owner, name: $name) {
      nameWithOwner
      stargazerCount
      forkCount
      issues{totalCount}
      createdAt
      updatedAt
      licenseInfo{name}
      description
    }
  }
`;

const MyRepositoryComponent = () => {
  const { loading, error, data } = useQuery(REPOSITORY, {
    variables: {
      owner: 'facebook',
      name: 'react',
    },
  });

  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error! {error.message}</p>;
  }

  if (data) {
    const { repository } = data;
    return (
      <div><h1>repository.nameWithOwner
    repository.stargazerCount
    repository.forkCount
    repository.issues{totalCount}
    repository.createdAt
    repository.updatedAt
    repository.licenseInfo{name}</h1>
        <p>repository.description</p>
      </div>
    );
  }
};