import axios from 'axios';

function callApi(endpoint, method, params, onSuccess, onFail) {
  const header = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };
  const api = axios.create({
    baseURL: (endpoint),
    timeout: 60000,
  });
  if (method === 'POST') {
    return api.post('',
      params,
      {
        headers: header,
      }).then((res) => {
      onSuccess(res);
    }).catch(onFail);
  }
  return api.get('', {
    headers: header,
  }).then((res) => {
    onSuccess(res);
  }).catch(onFail);
}

export default callApi;
