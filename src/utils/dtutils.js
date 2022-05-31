import { createTheme } from '@mui/material/styles';

const repoURL = 'https://github.com/furquan-lp/';

const createData = (closed, number, type, project, title) => {
  return { closed, number, type, project, title };
}

const getPriorityColor = (priority) => {
  switch (priority) {
    case 0: return '#ADD8E6'; // lightblue
    case 1: return '#FF0000'; // red
    case 2: return '#FFA500'; // orange
    case 3: return '#FFFF00'; // yellow
    case 4: return '#32CD32'; // limegreen
    default: return '#6495ED'; // gray
  }
}

const getIssueTypeColor = (type) => {
  switch (type) {
    case 'bug': return 'crimson';
    case 'refactor': return 'blueviolet';
    case 'TODO': return 'darkcyan';
    default: return 'gray';
  }
}

const getRepositoryLink = (project) => {
  return repoURL + project + '.git';
}

export default { createData, getPriorityColor, getIssueTypeColor, getRepositoryLink };