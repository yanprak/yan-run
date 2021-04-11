import { UserTheme } from '../../store/theme/types';
import { Theme } from './type';
import dark from './themes/dark';

export default function changeTheme(theme:UserTheme = dark) {
  const root = document.documentElement;
  const data = JSON.parse(theme.style) as Theme;
  Object.keys(data).forEach(key => {
    root.style.setProperty(key, data[key]);
  });
}
