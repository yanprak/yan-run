import { Router } from 'express';
import { Users } from '../api/models/postgres/Users';
import { Themes } from '../api/models/postgres/Themes';

export default function userRoutes(router: Router) {
  const USER_URL = '/users';
  const USER_ID_URL = `${USER_URL}/:userId`;

  router.get(USER_URL, (req, res) => {
    Users.findAll()
      .then(result => {
        res.json({
          message: 'OK',
          result,
        });
      })
      .catch(e => console.log(e));
  });

  router.get(USER_ID_URL, (req, res) => {
    const { userId } = req.params;
    Users.findOne({
      where: {
        id: userId,
      },
      include: [Themes],
    })
      .then(result => {
        console.log('result =>', userId, result);
        console.log('Theme =>', result?.theme);
        res.json({
          message: 'OK',
          result,
          theme: result?.theme,
        });
      })
      .catch(e => console.log(e));
  });

  router.post(USER_URL, (req, res) => {
    const { ...data } = req.body;
    console.log('data ===>', data);
    Users.create(data)
      .then(result => {
        res.json({
          message: 'User has been created',
          result,
        });
      })
      .catch(e => console.log(e));
  });

  router.put(USER_ID_URL, (req, res) => {
    const { userId } = req.params;
    const { ...data } = req.body;
    Users.update(data, {
      where: {
        id: userId,
      },
    })
      .then(() => {
        res.json({
          message: 'User has been successfully updated',
          result: data,
        });
      })
      .catch(e => console.log(e));
  });
}
