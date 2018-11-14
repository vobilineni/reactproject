import axios from 'axios';

axios.defaults.baseURL = process.env.API_URL;
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
axios.defaults.headers.put['Content-Type'] = 'application/json;charset=utf-8';

export const redirectToLoginIfUnauthenticated = () => {
  window.location.assign('/login');
};

export const redirectToLoginIfLogout = () => {
  window.location.assign(
      'http://localhost:3306' // server port
  );
};

export const postData = (urlPath, data) => {
  if (urlPath === '/logout') {
    return axios.post(urlPath, data).catch(redirectToLoginIfLogout);
  }

    return axios
        .post(urlPath, data)
        .then(response => response)
        .catch(err => err);
};

export const getData = urlPath => axios.get(urlPath).then(res => res);
export const putData = (urlPath, data) => axios.put(urlPath, data).catch(redirectToLoginIfUnauthenticated);
export const deleteData = urlPath => axios.delete(urlPath).catch(redirectToLoginIfUnauthenticated);
