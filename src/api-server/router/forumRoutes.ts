import { Router } from 'express';
import { Topics } from '../api/models/postgres/Topics';
import { MessageAttributes, Messages, ReactionsEntry, ReactionEnum } from '../api/models/postgres/Messages';
import { Users } from '../api/models/postgres/Users';

export default function forumRoutes(router: Router) {
  const TOPICS_URL = '/forum/topics';
  const TOPICS_ID_URL = `${TOPICS_URL}/:topicId`;
  const MESSAGES_URL = `${TOPICS_ID_URL}/messages`;
  const MESSAGES_ID_URL = `${MESSAGES_URL}/:messageId`;
  const MESSAGES_REACT_URL = `${MESSAGES_ID_URL}/reactions`;

  const PAGE_LIMIT = 10;

  router.get(TOPICS_URL, (req, res) => {
    const { page } = req.query;
    Topics.findAll({
      offset: (Number(page) || 0) * PAGE_LIMIT,
      limit: PAGE_LIMIT,
    })
      .then(topics => {
        res.json({
          message: 'OK',
          result: topics,
        });
      })
      .catch(e => console.log(e));
  });

  router.post(TOPICS_URL, (req, res) => {
    const { name, userId } = req.body;
    Topics.create({
      name,
      userId,
    })
      .then(result => {
        res.json({
          message: 'Topic has been created',
          result,
        });
      })
      .catch(e => console.log(e));
  });

  router.get(TOPICS_ID_URL, (req, res) => {
    const { topicId } = req.params;
    Topics.findByPk(topicId)
      .then(result => {
        res.json({
          message: 'OK',
          result,
        });
      })
      .catch(e => console.log(e));
  });

  router.put(TOPICS_ID_URL, (req, res) => {
    const { topicId } = req.params;
    const data = req.body;
    Topics.update({ ...data }, {
      where: {
        id: topicId,
      },
    })
      .then(result => {
        res.json({
          message: 'Topic has been successfully updated',
          result,
        });
      })
      .catch(e => console.log(e));
  });

  router.delete(TOPICS_ID_URL, (req, res) => {
    const { topicId } = req.params;
    Topics.destroy({
      where: {
        id: topicId,
      },
    })
      .then(() => {
        res.json({
          message: 'Topic has been successfully deleted',
        });
      })
      .catch(e => console.log(e));
  });

  router.get(MESSAGES_URL, (req, res) => {
    const { page } = req.query;
    const { topicId } = req.params;
    Messages.findAll({
      where: {
        topicId,
      },
      include: [Users],
      offset: (Number(page) || 0) * PAGE_LIMIT,
      limit: PAGE_LIMIT,
      order: [
        ['id', 'ASC'],
      ],
    })
      .then(result => {
        res.json({
          message: 'OK',
          result,
        });
      })
      .catch(e => console.log(e));
  });

  router.post(MESSAGES_URL, (req, res) => {
    const { topicId } = req.params;
    const { text, userId } = req.body;
    const data: MessageAttributes = {
      text,
      userId,
      topicId: Number(topicId),
      parentId: null,
      reactions: {
        like: [],
        dislike: [],
        laugh: [],
        hooray: [],
        confused: [],
        heart: [],
        rocket: [],
        eyes: [],
      },
    };

    Messages.create(data)
      .then(result => {
        res.json({
          message: 'Message has been created',
          result,
        });
      })
      .catch(e => console.log(e));
  });

  router.get(MESSAGES_ID_URL, (req, res) => {
    const { topicId, messageId } = req.params;
    Messages.findOne({
      where: {
        id: messageId,
        topicId,
      },
    })
      .then(result => {
        res.json({
          message: 'OK',
          result,
        });
      })
      .catch(e => console.log(e));
  });

  router.put(MESSAGES_ID_URL, (req, res) => {
    const { topicId, messageId } = req.params;
    const { text } = req.body;
    Messages.update({ text }, {
      where: {
        id: messageId,
        topicId,
      },
    })
      .then(() => {
        res.json({
          message: 'Message has been successfully updated',
        });
      })
      .catch(e => console.log(e));
  });

  router.delete(MESSAGES_ID_URL, (req, res) => {
    const { topicId, messageId } = req.params;
    Messages.destroy({
      where: {
        id: messageId,
        topicId,
      },
    })
      .then(result => {
        res.json({
          message: 'Message has been successfully deleted',
        });
      })
      .catch(e => console.log(e));
  });

  router.post(MESSAGES_REACT_URL, (req, res) => {
    const { topicId, messageId } = req.params;
    const { userId, reaction } = req.body;
    const reactionName = reaction as ReactionEnum;
    Messages.findOne({
      where: {
        id: messageId,
        topicId,
      },
    })
      .then(message => {
        if (!message) {
          throw new Error('Message not found');
        }
        const reactionsObject: ReactionsEntry = { ...message.reactions };
        const reactionValues: number[] = reactionsObject[reactionName];

        reactionsObject[reactionName] = reactionValues.indexOf(userId) > -1
          ? reactionValues.filter(uid => uid !== userId)
          : [...reactionValues, userId];

        message.reactions = reactionsObject;
        return message.save();
      })
      .then(() => {
        res.json({
          message: 'Message has been successfully updated with reaction',
        });
      })
      .catch(e => console.log(e));
  });

  router.get(MESSAGES_REACT_URL, (req, res) => {
    const { topicId, messageId } = req.params;
    Messages.findOne({
      where: {
        id: messageId,
        topicId,
      },
    })
      .then(message => {
        res.json({
          message: 'OK',
          result: message?.reactions,
        });
      })
      .catch(e => console.log(e));
  });
}
