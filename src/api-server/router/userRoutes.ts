import { Router } from 'express';
import { Users } from '../api/models/postgres/Users';

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
    Users.findByPk(userId)
      .then(result => {
        console.log('resulr =>', userId, result);
        res.json({
          message: 'OK',
          result,
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
