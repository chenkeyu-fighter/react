import React from 'react';
import ReactDOM from 'react-dom';
import Todolist from './Todolist';
// 借助网页写app应用
// https协议的服务器上，在没网的情况下第二次访问仍可使用PWA
import * as serviceWorker from './serviceWorker';
// jsx语法
ReactDOM.render(<Todolist />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
