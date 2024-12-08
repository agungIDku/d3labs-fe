import useRepos from "./useRepos";

function Repos() {
  const {
    isLoading,
    isNotFound,
    repos,
    setRepoSelected,
    data,
    isError,
    repoSelected,
  } = useRepos();
  return (
    <div id="repos">
      {isLoading ? (
        <p className="text-center">loading...</p>
      ) : (
        isNotFound &&
        !repos.length && <p className="text-center">User not found</p>
      )}

      <div className="repos-list">
        {repos.map((el) => (
          <div
            className="repo-item"
            key={el.name}
            onClick={() => setRepoSelected(el.name)}
          >
            <div className="header">
              <div>
                <h3>{el.name}</h3>
                <p>{el.language}</p>
              </div>
              <div>
                <p>{el.created_at}</p>
              </div>
            </div>
            {repoSelected === el.name && (
              <div className="readme">
                {isError ? <p>There is no readme.md</p> : <pre>{data}</pre>}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Repos;
