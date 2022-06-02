import axios from 'axios';

const dataURL = 'http://localhost:3001/projects';

const getProjects = (requestHeader) => {
  if (requestHeader === undefined)
    return axios.get(dataURL).then(response => response.data);
  else
    return axios
      .get(dataURL, { headers: requestHeader })
      .then(response => response.data);
}

const changeProject = (project, id) =>
  axios.put(`http://localhost:3001/projects/${id}`, project);

export default { getProjects, changeProject };