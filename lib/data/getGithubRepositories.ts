const getGithubRepositories = async () => {
  const repositoriesResponse = await fetch(
    "https://api.github.com/users/box-bm/repos"
  );
  var repositories: GithubRepository[] = await repositoriesResponse.json();
  repositories = repositories.filter(
    (repository) => repository.private === false
  );
  return repositories;
};

export default getGithubRepositories;