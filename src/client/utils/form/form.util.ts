import {
  ResultCheckField,
  Field,
} from './types';

export function checkField(field: Field): ResultCheckField {
  let test = false;
  let message = '';
  switch (field.type) {
    case 'email':
      const emailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      if (field.value.length === 0 || !emailRegExp.test(field.value)) {
        test = true;
        message = 'Не верный формат почты';
      }
      break;
    case 'tel':
      const phoneRegExp = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;
      if (field.value.length === 0 || !phoneRegExp.test(field.value)) {
        test = true;
        message = 'Не верный формат телефона или пустое поле';
      }
      break;
    case 'password':
      if (field.value.length < 6) {
        test = true;
        message = 'Пароль должен содержать более 6 символов';
      }
      break;
    case 'avatar':
      test = false;
      break;
    case 'submit':
      test = false;
      break;
    case 'text':
      if (field.value.length === 0) {
        test = true;
        message = 'Поле не должно быть пустым';
      }
      break;
    default:
      test = false;
      break;
  }
  return { test, message };
}
