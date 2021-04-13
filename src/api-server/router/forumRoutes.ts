import { Router } from 'express';
import { Topics } from '../api/models/postgres/Topics';
import { Messages } from '../api/models/postgres/Messages';
import { Users } from '../api/models/postgres/Users';

export default function forumRoutes(router: Router) {
  const TOPICS_URL = '/forum/topics';
  const TOPICS_ID_URL = `${TOPICS_URL}/:topicId`;
  const MESSAGES_URL = `${TOPICS_ID_URL}/messages`;
  const MESSAGES_ID_URL = `${MESSAGES_URL}/:messageId`;
  const MESSAGES_REACT_URL = `${MESSAGES_ID_URL}/reactions`;

  const TOPICS_PAGE_LIMIT = 10;

  router.get(TOPICS_URL, (req, res) => {
    const { page } = req.query;
    Topics.findAll({
      offset: (Number(page) || 0) * TOPICS_PAGE_LIMIT,
      limit: TOPICS_PAGE_LIMIT,
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
    const { data } = req.body;
    Topics.update(data, {
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
    Messages.findAll({ include: [Users] })
      .then(result => {
        res.json({
          message: 'OK',
          result,
        });
      })
      .catch(e => console.log(e));
  });

  router.post(MESSAGES_URL, (req, res) => {
    const { data } = req.body;
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
    const { data } = req.body;
    Messages.update(data, {
      where: {
        id: messageId,
        topicId,
      },
    })
      .then(result => {
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
    const { type } = req.body;
    Messages.update(type, {
      where: {
        id: messageId,
        topicId,
      },
    })
      .then(result => {
        res.json({
          message: 'Message has been successfully updated with like',
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
