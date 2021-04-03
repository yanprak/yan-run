import light from './themes/light';
import { UserTheme } from '../../store/theme/types';
import { Theme } from './type';

export default function changeTheme(theme:UserTheme = light) {
  const root = document.documentElement;
  const data = JSON.parse(theme.style) as Theme;
  Object.keys(data).forEach(key => {
    root.style.setProperty(key, data[key]);
  });
}
