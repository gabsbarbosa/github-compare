const MyRepositoryAndIssueComponent = () => {
    const { loading, error, data } = useQuery(REPOSITORY_WITH_ISSUES, {
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
      const issues = data.repository.issues.nodes;
      return (
        <div>
          <h1>repository.nameWithOwner</h1>
        <h1>repository.stargazerCount</h1>
    <h1>repository.forkCount</h1>
    <h1>repository.issues{totalCount}
    </h1>
    <h1>repository.createdAt
   </h1>
   <h1> repository.updatedAt
    </h1>
    <h1>repository.licenseInfo{name}</h1>
  
          <h2>Total issues: {issues.totalCount}</h2>
          {issues.map((issue) => {
            return (
              <a key={issue.id} href={issue.url}>
                <strong>{issue.title}</strong>
              </a>
            );
          })}
        </div>
      );
    }
  };