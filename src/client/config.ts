export const localUrl = 'https://local.ya-praktikum.tech:5000/';
// eslint-disable-next-line max-len
export const urlOauth = (service_id:string, redirectUrl = localUrl) => `https://oauth.yandex.ru/authorize?response_type=code&client_id=${service_id}&redirect_uri=${redirectUrl}`;
