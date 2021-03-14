import { useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { LeaderboardFetchRequest, LeaderboardEntryRequest } from '../../API/leaderboard';
import { thunkFetchLeaderboard, thunkUpdateLeaderboard } from '../../store/leaderboard/thunks';

export default function useApiLeaderboard() {
  const dispatch = useDispatch();

  const fetchLeaderboardData = useCallback((data: LeaderboardFetchRequest) => {
    dispatch(thunkFetchLeaderboard(data));
  }, [dispatch]);

  const updateLeaderboardData = useCallback((data: LeaderboardEntryRequest) => {
    dispatch(thunkUpdateLeaderboard(data));
  }, [dispatch]);

  return { fetchLeaderboardData, updateLeaderboardData };
}
