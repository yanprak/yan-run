import { RouteComponentProps } from 'react-router-dom';

type OwnProps = {
  id: string
};

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

export type ComposedProps = RouteComponentProps<OwnProps>;
