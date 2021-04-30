function getIsOnline() {
  if (!window?.navigator?.onLine) return Promise.resolve(false);

  const url = 'https://ya-praktikum.tech/api/v2/swagger/';

  return fetch(url, { method: 'GET' })
    .then(response => {
      console.log('[ISONLINE] Response', response);
      return response.ok;
    })
    .catch(error => {
      console.log('[IS ONLINE] Error', error);
      return false;
    });
}

export default getIsOnline;
