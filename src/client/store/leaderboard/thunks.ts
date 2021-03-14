import { Dispatch } from 'redux';

import {
  fetchLeaderboardData,
  updateLeaderboardData,
  LeaderboardEntryRequest,
  LeaderboardFetchRequest,
  LeaderboardResponseData,
  RATING_FIELD_NAME,
} from '../../API/leaderboard';

import { leaderboardError, leaderboardLoaded, leaderboardRequested } from './actions';
import { FetchLeaderboard } from './types';
import { Nullable } from '../../types';
import { getUserInfo } from '../../API/user';
import { HOST_URL } from '../../API';

type IdsAndScores = {
  ids: number[],
  scores: number[],
};

type UserWithScore = {
  id: number,
  avatar: Nullable<string>,
  login: string,
  score: number,
};

function usersWithScores(responseData: LeaderboardResponseData[]): Promise<UserWithScore[]> {
  // response data is an array of user id and user score object
  // we reduce it to object with 2 separate arrays
  // it is necessary to first fetch user infos by id as array of promises, and after that
  // concat it properly with scores since array order will not change.
  const idsAndScores: IdsAndScores = responseData.reduce<IdsAndScores>(({ ids, scores }, item) => {
    ids.push(item.data.yanrunUserId);
    scores.push(item.data[RATING_FIELD_NAME]);
    return { ids, scores };
  }, { ids: [], scores: [] });

  const userInfoPromises = idsAndScores.ids.map(id => getUserInfo(id));
  return Promise.all(userInfoPromises)
    .then(userInfos => userInfos.map((userInfo, index) => {
      const { id, login, avatar } = userInfo.data;
      return {
        id,
        login,
        avatar: avatar ? `${HOST_URL}${avatar}` : null,
        score: idsAndScores.scores[index],
      };
    }));
}

export const thunkFetchLeaderboard = (data: LeaderboardFetchRequest): FetchLeaderboard => (dispatch: Dispatch) => {
  dispatch(leaderboardRequested());
  fetchLeaderboardData(data)
    .then(response => usersWithScores(response.data))
    .then(userWithScores => dispatch(leaderboardLoaded(userWithScores)))
    .catch(() => dispatch(leaderboardError()));
};

// TODO(anton.kagakin): Probably we can place it more globally
// type MyThunkDispatch = ThunkDispatch<LeaderboardState, unknown, Action<string>>;

export const thunkUpdateLeaderboard = (data: LeaderboardEntryRequest) => (/* dispatch: MyThunkDispatch */) => {
  updateLeaderboardData(data)
    .then(() => {
      // TODO(anton.kagakin): Should we dispatch leaderboard fetching here?
      // dispatch(thunkFetchLeaderboard(data));
    })
    .catch(() => {
    });
};
