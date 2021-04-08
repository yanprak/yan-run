import Topics from '../../api/models/postgres/Topics';
import Messages from '../../api/models/postgres/Messages';
import { Nullable } from '../../../client/types';

type Attributes = {
  name: string;
  messagesCount: number;
  userId: number;
  createdAt?: string;
};

type MessageAttributes = {
  text: string;
  userId: number;
  topicId: number;
  parentId: Nullable<number>;
};

const topicList: Attributes[] = [
  {
    name: 'Book',
    messagesCount: 12,
    userId: 0,
  },
  {
    name: 'Game',
    messagesCount: 0,
    userId: 1,
  },
  {
    name: 'Jedi',
    messagesCount: 1000,
    userId: 1,
  },
];

const messageList: MessageAttributes[] = [
  {
    text: 'hi',
    userId: 1,
    topicId: 1,
    parentId: null,
  },
];
export default function dataGenerator() {
  console.log('=========== G E N E R A T E ============');

  Topics.bulkCreate(topicList)
    .then(() => console.log('The "Topics" data was successfully generated'))
    .catch(e => console.log(e));

  Messages.bulkCreate(messageList)
    .then(() => console.log('The "Messages" data was successfully generated'))
    .catch(e => console.log(e));
}
