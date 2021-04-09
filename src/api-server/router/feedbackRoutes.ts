import { Router } from 'express';
import Feedback from '../api/models/mongo/Feedback';

export default function forumRoutes(router: Router): void {
  const FEEDBACK_URL = '/feedback';

  // eslint-disable-next-line @typescript-eslint/no-misused-promises
  router.post(FEEDBACK_URL, async (req, res) => {
    if (!req.body) {
      res
        .status(400)
        .json({ error: 'Missing request body' });
      return;
    }

    const { data } = req.body;
    const result = await Feedback.create(data);
    res.json({
      message: 'Feedback has been submitted',
      result,
    });
  });
}
