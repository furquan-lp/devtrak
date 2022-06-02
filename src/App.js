import * as React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

import Header from './components/header';
import Issues from './components/issues';

import './App.css';

const createData = (closed, number, type, project, priority, title) => {
  return { closed, number, type, project, priority, title };
}

const createRows = (data) => {
  if (data === undefined)
    return undefined;
  let rows = [];
  data.forEach(d =>
    d.issues.forEach((i, index) => rows.push(
      createData(i.open, index + 1, i.type, d.project, i.priority, i.title)
    ))
  );
  if (rows.length > 0)
    return rows;
}

const App = () => {
  const appVersion = require('../package.json').version;
  const URL = 'http://localhost:3001/issues';
  const [data, setData] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      axios
        .get(URL)
        .then(response => setData(response.data));
    }, 2000);
  }, [data]);

  const rows = createRows(data);

  return (
    <div className="App-wrapper">
      <Header version={appVersion} />
      <div className="App">
        <Issues rows={rows} showClosed={true} />
      </div>
    </div>
  );
}
export default App;