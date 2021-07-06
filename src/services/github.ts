import { github } from '../constants';
import { Commit, Repo, PushEvents } from '../types/Github';

function mapApiToDomainUrl(url: string) {
  return url.replace(`${github.API_BASE_URL}/repos`, github.GITHUB_URL);
}

function mapCommitUrl(commit: Commit) {
  const url = mapApiToDomainUrl(commit.url).replace('commits', 'commit');

  return {
    ...commit,
    url,
  };
}

function mapRepoUrl(repo: Repo) {
  const url = mapApiToDomainUrl(repo.url);

  return {
    ...repo,
    url,
  };
}

export function getLatestCommit(pushEvents: PushEvents) {
  const latestEvent = pushEvents[0];
  const latestCommits = latestEvent?.payload?.commits;
  const latestCommit = latestCommits[latestCommits.length - 1];
  const commit = mapCommitUrl(latestCommit);
  const repo = mapRepoUrl(latestEvent?.repo);

  return {
    commit,
    repo,
  };
}
