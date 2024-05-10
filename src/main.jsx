// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
// import { Provider } from "react-redux";
// import  store  from "./store.jsx";
// import Counter from "./Counter.jsx";

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <Provider store={store}>
//     <Counter />
//   </Provider>
// );

import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import Store from './counter/Store.js'
import store from './Todo-redux/store.jsx'
import Todo from './Todo-redux/App.jsx'
import './index.css'
// import { Counter } from './counter/Counter.jsx'
import { Provider } from 'react-redux'
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <Todo />
  </Provider>

)