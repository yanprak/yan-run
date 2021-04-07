import { BACKEND_API } from './index';

interface FetchTopicsResponse {
  result: TopicEntry[],
  message: string
}

export interface CreateTopicRequestData {
  name: string,
  id: number,
  login: string
}

const fetchTopics = () => BACKEND_API.get<FetchTopicsResponse>('/forum/topics');
const createTopic = (data: CreateTopicRequestData) => BACKEND_API.post('/forum/topics', JSON.stringify(data));

type UserEntry = {
  id: number,
  login: string
};

export type TopicEntry = {
  id: number,
  name: string,
  messagesCount: number,
  user: UserEntry,
  createdAt: string
};

// eslint-disable-next-line import/prefer-default-export
export { fetchTopics, createTopic };
