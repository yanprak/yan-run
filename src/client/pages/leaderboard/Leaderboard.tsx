import React, {
  memo, useCallback, useEffect, useState,
} from 'react';

import './leaderboard.scss';
import LeaderboardRow from './LeaderboardRow';
import { LeaderboardRowProps } from './types';

/*
    todo(anton.kagakin)
    мусор в виде getRandomInt, getRandomName, fakeData, setTimeout умрет при подключении API для leaderboard
 */

function getRandomInt(min = 1, max: number): number {
  return Math.floor(Math.random() * max + min);
}

function getRandomName(): string {
  const newArray = new Array(getRandomInt(1, 25)) as [];
  return [...newArray].map(() => Math.random().toString(36)[2]).join('');
}

const fakeData: LeaderboardRowProps[] = new Array(5).fill(0).map((_, index) => ({
  rank: index + 1,
  user: {
    avatar: 'https://yastatic.net/q/praktikum/v0.169.7/static/favicon.png',
    login: getRandomName(),
  },
  score: Math.floor(Math.random() * 99999),
}));

function Leaderboard() {
  const [data, setData] = useState<LeaderboardRowProps[]>([]);

  // componentDidMount
  useEffect(() => {
    setTimeout(setData, 700, fakeData);
  }, []);

  const createRows = useCallback(() => data.map(item => (
    <LeaderboardRow key={item.rank} {...item} />
  )), [data]);

  return (
    <div className="container container_center container_center-items">
      <div className="leaderboard">
        {data.length ? createRows() : 'Loading'}
      </div>
    </div>
  );
}

export default memo(Leaderboard);
