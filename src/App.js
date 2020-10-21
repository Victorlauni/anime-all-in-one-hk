import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { getViuUpdate } from './lib/viuFetch';

function App() {
  const [viuItem, setViuItem] = useState(false);
  useEffect(() => getViuUpdate().then(res => {
    console.log(res);
    setViuItem(JSON.stringify(res));
  }), []);
  return (
    <div>
      {viuItem}
    </div>
  );
}

export default App;
