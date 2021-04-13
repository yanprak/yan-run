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

function multiplyMessages(fakePhrases: string[], amountPerPhrase = 1): MessageAttributes[] {
  const commonArray: MessageAttributes[] = [];
  const defaultTemplate: MessageAttributes = {
    text: 'Message',
    userId: 1,
    topicId: 1,
    parentId: null,
    reactions: {
      like: [1],
      dislike: [],
      laugh: [],
      hooray: [],
      confused: [],
      heart: [],
      rocket: [],
      eyes: [],
    },
  };
  for (let i = 0; i < amountPerPhrase; i++) {
    fakePhrases.forEach((text: string) => commonArray.push({
      ...defaultTemplate,
      text: `${text} ${commonArray.length}`,
    }));
  }
  return commonArray;
}

function prepareSingleRealTopic(messagesCount = 0): TopicAttributes[] {
  return [
    {
      name: 'Book',
      messagesCount,
      userId: 0,
    },
    {
      name: 'Game',
      messagesCount: 0,
      userId: 1,
    },
    {
      name: 'Jedi',
      messagesCount: 0,
      userId: 1,
    },
  ];
}

export default function dataGenerator() {
  console.log('=========== G E N E R A T E ============');

  Users.bulkCreate(usersList)
    .then(() => console.log('The "Users" data was successfully generated'))
    .catch(e => console.log(e));

  const manySampleMessages = multiplyMessages(['hi', 'hey', 'hello'], 7);
  Messages.bulkCreate(manySampleMessages)
    .then(() => console.log('The "Messages" data was successfully generated'))
    .catch(e => console.log(e));

  const topicList = prepareSingleRealTopic(manySampleMessages.length);
  Topics.bulkCreate(topicList)
    .then(() => console.log('The "Topics" data was successfully generated'))
    .catch(e => console.log(e));
}
