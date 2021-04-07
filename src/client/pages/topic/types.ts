export type TopicPageProps = {
  id: number;
  name: string;
  messagesCount: number;
  user: {
    id: number;
    login: string;
  },
  createdAt: string;
};
