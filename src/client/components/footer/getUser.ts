function getUser(username:string) {
  return fetch(`https://api.github.com/users/${username}`)
    .then(response => response.json())
    .then(response => {
      console.log(response);
    });
}

export default getUser;
