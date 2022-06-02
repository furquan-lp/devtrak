import * as React from 'react';
import { useState, useEffect } from 'react';

import Header from './components/header';
import Issues from './components/issues';
import WaitingPlaceholder from './components/waiting';
import services from './utils/services';

import './App.css';

const App = () => {
  const appVersion = require('../package.json').version;
  const [data, setData] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      services.getProjects().then(data => setData(data));
    }, 2000);
  }, [data]);

  return (
    <div className="App-wrapper">
      <Header version={appVersion} />
      <div className="App">
        {data === undefined || data.length === 0 ?
          <WaitingPlaceholder /> : <Issues data={data} showClosed={true} />}
      </div>
    </div>
  );
}
export default App;