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
      services.getProjects({
        'X-Master-Key': '$2b$10$pWNGBg9x/gcFna2bGzV2DO.97lv6XCoK35tPfs4e.HlgJAdpZ8aC.'
      }).then(data => setData(data.record.projects));
    }, 3000);
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