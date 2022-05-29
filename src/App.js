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

  console.log(data);

  return (
    <div className="App">
      DevTrak v{appVersion}
    </div>
  );
};

export default App;