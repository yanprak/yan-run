import { BACKEND_API } from './index';

interface FetchTopicsResponse {
  result: TopicEntry[],
  message: string
}

export interface CreateTopicRequestData {
  name: string,
  userId: number,
}

interface FetchTopicResponse {
  result: TopicEntry,
  message: string
}

const fetchTopics = (page = 0) => BACKEND_API.get<FetchTopicsResponse>(`/forum/topics?page=${page}`);
const createTopic = (data: CreateTopicRequestData) => BACKEND_API.post('/forum/topics', JSON.stringify(data));
const fetchTopic = (
  topicId: number,
  page = 0,
) => BACKEND_API.get<FetchTopicResponse>(`/forum/topics/${topicId}?page=${page}`);

export type TopicEntry = {
  id: number,
  name: string,
  messagesCount: number,
  userId: number,
  createdAt: string
};

// eslint-disable-next-line import/prefer-default-export
export { fetchTopics, createTopic, fetchTopic };
