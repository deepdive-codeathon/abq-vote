
const LOGIN_ENDPOINT = 'https://test.devv.io/login';

export default (async function loginUserAsync() {

  const TEST_USER = "Rick"
  const TEST_SALTED_PW = "252589fcbe16c3f47f82bf03d1f816b4645a78482e99511a0a2d7d3d3bdb1dc8"

  // POST the token to the blockchain with user credentials
  return fetch(LOGIN_ENDPOINT, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      user: TEST_USER,
      pass: TEST_SALTED_PW,
    }),
  });
});