import { BACKEND_API } from './index';

interface FetchTopicsResponse {
  result: TopicEntry[],
  message: string
}

export interface CreateTopicRequestData {
  name: string,
  userId: number,
}

export interface UpdateTopicRequestData {
  name?: string;
  messagesCount?: number;
}

interface FetchTopicResponse {
  result: TopicEntry,
  message: string
}

interface UpdateTopicResponse {
  result: TopicEntry,
  message: string
}

interface DeleteTopicResponse {
  message: string
}

const fetchTopics = (page = 0) => BACKEND_API.get<FetchTopicsResponse>(`/forum/topics?page=${page}`);
const createTopic = (data: CreateTopicRequestData) => BACKEND_API.post('/forum/topics', JSON.stringify(data));
const fetchTopic = (
  topicId: number,
  page = 0,
) => BACKEND_API.get<FetchTopicResponse>(`/forum/topics/${topicId}?page=${page}`);
const updateTopic = (
  topicId: number,
  data: UpdateTopicRequestData,
) => BACKEND_API.put<UpdateTopicResponse>(`/forum/topics/${topicId}`, JSON.stringify(data));
const deleteTopic = (topicId: number) => BACKEND_API.delete<DeleteTopicResponse>(`/forum/topics/${topicId}`);

export type TopicEntry = {
  id: number,
  name: string,
  messagesCount: number,
  userId: number,
  createdAt: string
};

// eslint-disable-next-line import/prefer-default-export
export { fetchTopics, createTopic, fetchTopic, updateTopic, deleteTopic };
