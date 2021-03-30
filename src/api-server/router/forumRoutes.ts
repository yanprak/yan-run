import { Router } from 'express';

export default function forumRoutes(router: Router) {
  const TOPICS_URL = '/forum/topics';
  const TOPICS_ID_URL = `${TOPICS_URL}/:topicId`;
  const MESSAGES_URL = `${TOPICS_ID_URL}/messages`;
  const MESSAGES_ID_URL = `${MESSAGES_URL}/:messageId`;
  const MESSAGES_LIKE_URL = `${MESSAGES_ID_URL}/like`;

  router.get(TOPICS_URL, (req, res) => {
    // const topics = await Topics.findAll(); pagination?
    res.json({
      message: 'OK',
      result: [], // topics
    });
  });

  router.post(TOPICS_URL, (req, res) => {
    // const { data } = req.body;
    // const result = await Topics.create(data);
    res.json({
      message: 'Topic has been created',
      result: {}, // result
    });
  });

  router.get(TOPICS_ID_URL, (req, res) => {
    // const { topicId } = req.body;
    // const result = await Topics.findById(topicId);
    res.json({
      message: 'OK',
      result: {}, // result
    });
  });

  router.put(TOPICS_ID_URL, (req, res) => {
    // const { topicId } = req.params;
    // const { data } = req.body;
    // const topic = await Topics.findById(topicId);
    // await topic.save(data);
    res.json({
      message: 'Topic has been successfully updated',
    });
  });

  router.delete(TOPICS_ID_URL, (req, res) => {
    // const { topicId } = req.params;
    // try-catch topic = await Topics.findById(topicId);
    // try-catch topic.destroy()
    res.json({
      message: 'Topic has been successfully deleted',
    });
  });

  router.get(MESSAGES_URL, (req, res) => {
    // const result = await Messages.findAll();
    res.json({
      message: 'OK',
      result: [], // result
    });
  });

  router.post(MESSAGES_URL, (req, res) => {
    // const { data } = req.body;
    // const result = await Messages.create(data);
    res.json({
      message: 'Message has been createdd',
      result: {}, // result
    });
  });

  router.get(MESSAGES_ID_URL, (req, res) => {
    // const { topicId, messageId } = req.params;
    // const result = await Messages.findById(messageId).where(topicId);
    res.json({
      message: 'OK',
      result: {}, // result
    });
  });

  router.put(MESSAGES_ID_URL, (req, res) => {
    // const { topicId, messageId } = req.params;
    // const { data } req.body;
    // const message = await Messages.findById(messageId).where(topicId);
    // message.save(data);
    res.json({
      message: 'Message has been successfully updated',
    });
  });

  router.delete(MESSAGES_ID_URL, (req, res) => {
    // const { topicId, messageId } = req.params;
    // try-catch message = await Messages.findById(messageId).where(topicId);
    // try-catch message.destroy();
    res.json({
      message: 'Message has been successfully deleted',
    });
  });

  router.post(MESSAGES_LIKE_URL, (req, res) => {
    // const { topicId, messageId } = req.params;
    // try-catch message = await Messages.findById(messageId).where(topicId);
    res.json({
      message: 'Message has been successfully updated with like',
    });
  });
}
