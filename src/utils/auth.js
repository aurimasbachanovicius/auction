// const auth = (email, password) => {
//   var xhr = new XMLHttpRequest();
//   xhr.addEventListener('load', () => {
//     console.log(xhr.responseText);
//   });
//   xhr.open('POST', 'http://server.mybid.lt/v1/account/register');
//   xhr.send(JSON.stringify({ email: email, password: password }));
// };

const auth = (email, password) => {
  // return dispatch => {
  return fetch('http://server.mybid.lt/v1/account/register', {
    method: 'POST',
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    body: JSON.stringify({ email: email, password: password })
  })
    .then(resp => resp.text())
    .then(data => {
      //   resolve(data ? JSON.parse(data) : {});
      if (data.message) {
      } else {
        localStorage.setItem('token', data.jwt);
        // dispatch(loginUser(data.user));
      }
    });
};

export default auth;
