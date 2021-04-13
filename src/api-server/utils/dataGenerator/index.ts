import { Users, UserAttributes } from '../../api/models/postgres/Users';
import { Topics, TopicAttributes } from '../../api/models/postgres/Topics';
import { Messages, MessageAttributes } from '../../api/models/postgres/Messages';

const usersList: UserAttributes[] = [
  {
    id: 1,
    firstName: 'John',
    secondName: 'Doe',
    displayName: null,
    login: 'john.doe',
    email: 'john.doe@ya.ru',
    phone: '1234567',
    avatar: null,
    theme: 1,
  },
];

const topicList: TopicAttributes[] = [
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
    reactions: {
      like: [0],
      dislike: [0],
      laugh: [0],
      hooray: [0],
      confused: [0],
      heart: [0],
      rocket: [0],
      eyes: [0],
    },
  },
];

export default function dataGenerator() {
  console.log('=========== G E N E R A T E ============');

  Users.bulkCreate(usersList)
    .then(() => console.log('The "Users" data was successfully generated'))
    .catch(e => console.log(e));

  Topics.bulkCreate(topicList)
    .then(() => console.log('The "Topics" data was successfully generated'))
    .catch(e => console.log(e));

  Messages.bulkCreate(messageList)
    .then(() => console.log('The "Messages" data was successfully generated'))
    .catch(e => console.log(e));
}
