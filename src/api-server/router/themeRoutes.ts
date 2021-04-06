import { Router } from 'express';

export default function themeRoutes(router: Router) {
  const THEMES_URL = '/themes';
  const THEME_ID_URL = `${THEMES_URL}/:themeId`;

  router.get(THEMES_URL, (req, res) => {
    // const themes = await Themes.findAll();
    res.json({
      message: 'OK',
      result: [], // Themes
    });
  });

  router.get(THEME_ID_URL, (req, res) => {
    // const { themeId } = req.params;
    // const theme = await Themes.findById(themeId);
    res.json({
      message: 'OK',
      result: [], // theme
    });
  });
}
