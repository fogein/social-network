import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './App';
import reportWebVitals from './reportWebVitals';
let posts = [
  { id: 1, message: "hi its post", likesCount: 12 },
  { id: 2, message: "hi", likesCount: 32 },
  { id: 3, message: "hi it third post", likesCount: 31 },
];
let dialogs = [
  { id: "1", name: "Dima" },
  { id: "2", name: "Oleg" },
  { id: "3", name: "Sasha" },
  { id: "4", name: "Vlad" },
];
let messages = [
  { id: 1, message: "yo" },
  { id: 2, message: "Hi" },
  { id: 3, message: "How a y" },
  { id: 4, message: "yo" },
];
ReactDOM.render(
  <React.StrictMode>
    <App
      posts={posts}
      dialogs={dialogs}
      messages={messages}
    />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
