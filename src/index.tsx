import React from 'react'
import { createRoot } from 'react-dom/client';
import ReactDOM  from 'react-dom'


const App = () => {
    return (
    <div>
        <h1>Hi there!</h1>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'))