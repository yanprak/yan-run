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

export default function useApiForum() {
  const dispatch = useDispatch();

  const fetchMessages = useCallback((topicId: number) => {
    dispatch(thunkFetchMessages(topicId));
  }, [dispatch]);

  const createMessage = useCallback((topicId: number, data: CreateMessageRequestData) => {
    dispatch(thunkCreateMessage(topicId, data));
  }, [dispatch]);

  const updateMessage = useCallback((topicId: number, messageId: number, data: UpdateMessageRequestData) => {
    dispatch(thunkUpdateMessage(topicId, messageId, data));
  }, [dispatch]);

  const deleteMessage = useCallback((topicId: number, messageId: number) => {
    dispatch(thunkDeleteMessage(topicId, messageId));
  }, [dispatch]);

  const toggleReaction = useCallback((topicId: number, messageId: number, data: ToggleReactionRequestData) => {
    dispatch(thunkToggleReaction(topicId, messageId, data));
  }, [dispatch]);

  return { fetchMessages, createMessage, updateMessage, deleteMessage, toggleReaction };
}
