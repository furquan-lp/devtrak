import axios from 'axios';

const getURL = 'https://api.jsonbin.io/v3/b/6298bb7f449a1f3821fb3659/latest';
const postURL = 'https://api.jsonbin.io/v3/b/6298bb7f449a1f3821fb3659';

const getProjects = (requestHeader) => {
  if (requestHeader === undefined)
    return axios.get(getURL).then(response => response.data);
  else
    return axios
      .get(getURL, { headers: requestHeader })
      .then(response => response.data);
}

const changeData = (data, requestHeader) =>
  axios.put(postURL, data, { headers: requestHeader });

export default { getProjects, changeData };