import React from 'react';
import MF1 from './components/MF1';
import ReactDOM from 'react-dom';

const App = () => (
  <div>
    <h1>Container</h1>
    <hr />
    <MF1 />
  </div>
);

ReactDOM.render(<App />, document.querySelector('#root'));
