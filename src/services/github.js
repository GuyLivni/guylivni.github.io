import { github } from '../constants';

function mapApiToDomainUrl(url) {
  return url.replace(`${github.API_BASE_URL}/repos`, github.GITHUB_URL);
}

function mapCommitUrl(commit) {
  const url = mapApiToDomainUrl(commit.url).replace('commits', 'commit');

  return {
    ...commit,
    url,
  };
}

function mapRepoUrl(repo) {
  const url = mapApiToDomainUrl(repo.url);

  return {
    ...repo,
    url,
  };
}

export function getLatestCommit(pushEvents) {
  const latestEvent = pushEvents[0];
  const latestCommits = latestEvent.payload.commits;
  const latestCommit = latestCommits[latestCommits.length - 1];
  const commit = mapCommitUrl(latestCommit);
  const repo = mapRepoUrl(latestEvent.repo);

  return {
    commit,
    repo,
  };
}
