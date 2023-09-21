// // import React from 'react';
// // import ReactDOM from 'react-dom/client';
// // import './index.css';
// // import App from './App';
// // import reportWebVitals from './reportWebVitals';

// // const root = ReactDOM.createRoot(document.getElementById('root'));
// // root.render(
// //   <React.StrictMode>
// //     <App />
// //   </React.StrictMode>
// // );

// // // If you want to start measuring performance in your app, pass a function
// // // to log results (for example: reportWebVitals(console.log))
// // // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// // reportWebVitals();

// // import React from 'react';
// // import ReactDOM from 'react-dom';
// // import { BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter

// // import App from './App'; 

// // ReactDOM.render(
// //   <Router> 
// //     <App />
// //   </Router>,
// //   document.getElementById('root')
// // );


// import React from 'react';
// //import ReactDOM from 'react-dom';
// import { BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter

// import App from './App'; 
// //import { createRoot } from 'react-dom';
// import { createRoot } from 'react-dom/client';
// const root = document.getElementById('root');

// const reactRoot = createRoot(root);

// reactRoot.render(
//   <Router>
//     <App />
//   </Router>
// );

// import React from 'react';
// import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import { createStore, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
// import rootReducer from './reducers/authReducer';
// import App from './App';

// const store = createStore(rootReducer, applyMiddleware(thunk));

// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById('root')
// );
// import { createRoot } from 'react-dom';
// import { Provider } from 'react-redux';
// import { createStore, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
// import rootReducer from './reducers/authReducer';
// import App from './App';

// const store = createStore(rootReducer, applyMiddleware(thunk));

// const root = createRoot(document.getElementById('root'));
// root.render(
//   <Provider store={store}>
//     <App />
//   </Provider>
// );
import { createRoot } from 'react-dom/client'; // Import from react-dom/client
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/authReducer';
import App from './App';

const store = createStore(rootReducer, applyMiddleware(thunk));

const root = createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

