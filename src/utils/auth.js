// const auth = (email, password) => {
//   const xhr = new XMLHttpRequest();
//   xhr.addEventListener('load', () => {
//     console.log(xhr.responseText);
//   });
//   xhr.open('POST', 'https://api.mybid.lt/v1/account/register');
//   xhr.send(JSON.stringify({ email: email, password: password }));
// };

const auth = (email, password) => {
  // return (
  //   fetch('https://api.mybid.lt/v1/account/register', {
  //     method: 'POST',
  //     headers: {
  //       'Access-Control-Allow-Origin': '*',
  //       'Access-Control-Allow-Methods': 'POST, OPTIONS',
  //       'Content-Type': 'application/json',
  //       Accept: 'application/json'
  //     },
  //     mode: 'no-cors',
  //     body: JSON.stringify({ email: email, password: password })
  //   })
  //     // .then(resp => resp.text())
  //     // .then(data => {
  //     //   resolve(data ? JSON.parse(data) : {});
  //     //   console.log(data.message);
  //     //   if (data.message) {
  //     //   } else {
  //     //     localStorage.setItem('token', data.jwt);
  //     //     dispatch(loginUser(data.user));
  //     //   }
  //     // });

  //     // .then(response => {
  //     //   response.json().then(data =>{
  //     //     console.log("Successful" + data);
  //     //   })
  //     // })

  //     .then(response => {
  //       return response.json();
  //     })
  //     .then(data => {
  //       // Work with JSON data here
  //       console.log(data);
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     })
  // );

  try {
    const data = (async () => {
      await postData('https://api.mybid.lt/v1/account/register', {
        email: email,
        password: password
      });
    })();
    console.log(JSON.stringify(data)); // JSON-string from `response.json()` call
  } catch (error) {
    console.error(error);
  }

  async function postData(url = '', data = {}) {
    const response = await fetch(url, {
      method: 'POST',
      mode: 'no-cors', // no-cors, cors, same-origin
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    // return await response.json(); // parses JSON response into native JavaScript objects
    return await (response.length ? JSON.parse(response) : {});
  }
};

export default auth;
