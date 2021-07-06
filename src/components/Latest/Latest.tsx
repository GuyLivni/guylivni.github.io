import React from 'react';
import styled from 'styled-components';
import { FaCoffee } from 'react-icons/fa';
import { GoOctoface } from 'react-icons/go';

import Fetcher from '../Fetcher';
import LatestPlaceholder from './components/LatestPlaceholder';
import LatestItem from './components/LatestItem';

import * as GithubService from '../../services/github';
import * as githubApi from '../../api/github';

const Container = styled('div')`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Latest = () => (
  <Container>
    <Fetcher action={githubApi.getUserEvents()} loader={<LatestPlaceholder />}>
      {(events) => {
        const pushEvents = events.filter(({ type }) => type === 'PushEvent');

        if (!pushEvents.length) {
          return (
            <LatestItem
              header="Latest Commit"
              title="Nothing new"
              description="None"
              icon={<GoOctoface />}
            />
          );
        }

        const { commit, repo } = GithubService.getLatestCommit(pushEvents);
        return (
          <LatestItem
            header="Latest Commit"
            title={commit.message}
            titleUrl={commit.url}
            description={`in ${repo.name}`}
            descriptionUrl={repo.url}
            icon={<GoOctoface />}
          />
        );
      }}
    </Fetcher>
    <LatestItem
      header="Latest Writing"
      title="Latest Post Title"
      description="Latest description"
      icon={<FaCoffee />}
    />
  </Container>
);

export default Latest;
