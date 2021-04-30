import { useDispatch } from 'react-redux';
import { useCallback } from 'react';
import {
  thunkFetchMessages,
  thunkCreateMessage,
  thunkUpdateMessage,
  thunkDeleteMessage,
  thunkToggleReaction,
} from '../../store/messages/thunks';
import {
  CreateMessageRequestData,
  UpdateMessageRequestData,
  ToggleReactionRequestData,
} from '../../API/messages';

export default function useApiMessages() {
  const dispatch = useDispatch();

  const fetchMessages = useCallback((topicId: number, page?: number) => {
    dispatch(thunkFetchMessages(topicId, page));
  }, [dispatch]);

  const createMessage = useCallback((topicId: number, data: CreateMessageRequestData, page?: number) => {
    dispatch(thunkCreateMessage(topicId, data, page));
  }, [dispatch]);

  const updateMessage = useCallback((
    topicId: number,
    messageId: number,
    data: UpdateMessageRequestData,
    page?: number,
  ) => {
    dispatch(thunkUpdateMessage(topicId, messageId, data, page));
  }, [dispatch]);

  const deleteMessage = useCallback((topicId: number, messageId: number, page: number) => {
    dispatch(thunkDeleteMessage(topicId, messageId, page));
  }, [dispatch]);

  const toggleReaction = useCallback((
    topicId: number,
    messageId: number,
    data: ToggleReactionRequestData,
    page?: number,
  ) => {
    dispatch(thunkToggleReaction(topicId, messageId, data, page));
  }, [dispatch]);

  return { fetchMessages, createMessage, updateMessage, deleteMessage, toggleReaction };
}
