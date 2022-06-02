import axios from 'axios';

const dataURL = 'http://localhost:3001/projects';

const getProjects = () =>
  axios.get(dataURL).then(response => response.data);

const changeProject = (project, id) =>
  axios.put(`http://localhost:3001/projects/${id}`, project);

export default { getProjects, changeProject };