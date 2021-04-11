import { BACKEND_API } from './index';

const getAllThemes = () => BACKEND_API.get('/themes');

const getThemeById = (id:number) => BACKEND_API.get(`themes/${id}`);

export {
  getAllThemes,
  getThemeById,
};
