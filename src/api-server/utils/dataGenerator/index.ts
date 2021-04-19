import { Users, UserAttributes } from '../../api/models/postgres/Users';
import { Topics, TopicAttributes } from '../../api/models/postgres/Topics';
import { Messages, MessageAttributes } from '../../api/models/postgres/Messages';
import { Themes, ThemeAttributes } from '../../api/models/postgres/Themes';
import dark from '../../../client/utils/theme/themes/dark';
import light from '../../../client/utils/theme/themes/light';

const usersList: UserAttributes[] = [
  {
    id: 1,
    first_name: 'John',
    second_name: 'Doe',
    display_name: null,
    login: 'john.doe',
    email: 'john.doe@ya.ru',
    phone: '1234567',
    avatar: null,
    themeId: 1,
  },
  {
    id: 13072,
    first_name: 'Ilya',
    second_name: 'Belyavskiy',
    display_name: null,
    login: 'ilya.belyavskiy3',
    email: 'ilya.belyavskiy3@ya.ru',
    phone: '1234567',
    avatar: '/bc887ee2-d7e6-4055-ac83-99cb9203b589/dc3b77fa-ad12-4dc6-b7cb-5d7f3112e697_photo_2020-10-30_18-12-48.jpg',
    themeId: 1,
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

const themeList: ThemeAttributes[] = [
  dark,
  light,
];

export default function dataGenerator() {
  console.log('=========== G E N E R A T E ============');

  Themes.bulkCreate(themeList)
    .then(() => console.log('The "-= Themes =-" data was successfully generated'))
    .catch(e => console.log(e));

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
