import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// html에서 id가 potato를 찾아서 app/를 나타내는 app.js를 html형태로 보여줘라
// 이것이 jsx형태이다.
ReactDOM.render(<App />, document.getElementById('potato'));
 