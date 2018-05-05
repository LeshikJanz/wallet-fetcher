const fetch = require('node-fetch');

const JSONResponse = response => {
  if (response.ok) {
    return response.json();
  }

  const json = response.json();
  return json.then(err => {
    throw err;
  });
};


export const fetchWallet = url =>
  fetch(url).then(JSONResponse)