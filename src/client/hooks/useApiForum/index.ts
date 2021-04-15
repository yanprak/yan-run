import { useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { thunkFetchTopics, thunkCreateTopic } from '../../store/forum/thunks';
import { thunkFetchTopic, thunkUpdateTopic, thunkDeleteTopic } from '../../store/topic/thunks';
import { CreateTopicRequestData, UpdateTopicRequestData } from '../../API/forum';

export default function useApiForum() {
  const dispatch = useDispatch();

  const fetchTopics = useCallback((page?: number) => {
    dispatch(thunkFetchTopics(page));
  }, [dispatch]);

  const createTopic = useCallback((data: CreateTopicRequestData) => {
    dispatch(thunkCreateTopic(data));
  }, [dispatch]);

  const fetchTopic = useCallback((id: number) => {
    dispatch(thunkFetchTopic(id));
  }, [dispatch]);

  const updateTopic = useCallback((id: number, data: UpdateTopicRequestData) => {
    dispatch(thunkUpdateTopic(id, data));
  }, [dispatch]);

  const deleteTopic = useCallback((id: number) => {
    dispatch(thunkDeleteTopic(id));
  }, [dispatch]);

  return { fetchTopics, createTopic, fetchTopic, updateTopic, deleteTopic };
}
