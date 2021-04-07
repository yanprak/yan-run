import { useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { thunkFetchTopics, thunkCreateTopic } from '../../store/forum/thunks';
import { CreateTopicRequestData } from '../../API/forum';

export default function useApiForum() {
  const dispatch = useDispatch();

  const fetchTopics = useCallback(() => {
    dispatch(thunkFetchTopics());
  }, [dispatch]);

  const createTopic = useCallback((data: CreateTopicRequestData) => {
    dispatch(thunkCreateTopic(data));
  }, [dispatch]);

  return { fetchTopics, createTopic };
}
