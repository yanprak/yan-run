import { Router } from 'express';
import Themes from '../../api/models/postgres/Themes';

export default function themeRoutes(router: Router) {
  const THEMES_URL = '/themes';
  const THEME_ID_URL = `${THEMES_URL}/:themeId`;

  router.get(THEMES_URL, (req, res) => {
    Themes.findAll()
      .then(result => {
        res.json({
          message: 'OK',
          result,
        });
      })
      .catch(e => console.log(e));
  });

  router.get(THEME_ID_URL, (req, res) => {
    const { themeId } = req.params;
    Themes.findByPk(themeId)
      .then(result => {
        res.json({
          message: 'OK',
          result,
        });
      })
      .catch(e => console.log(e));
  });
}
