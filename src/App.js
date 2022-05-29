import { useState, useEffect } from 'react';
import axios from 'axios';

import './App.css';

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

  return (
    <div className="App">
      DevTrak v{appVersion}
      <table>
        <caption>Issues</caption>
        <thead>
          <tr>
            <th>#</th>
            <th>Type</th>
            <th>Project</th>
            <th>Title</th>
          </tr>
        </thead>
        <tbody>
          {data.map(d =>
            d.issues.map((i, index) =>
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{i.type}</td>
                <td>{d.project}</td>
                <td>{i.title}</td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
};

export default App;