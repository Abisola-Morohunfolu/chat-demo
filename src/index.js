import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Import Parse minified version
// import Parse from 'parse/dist/parse.min.js';

// // Your Parse initialization configuration goes here
// const PARSE_APPLICATION_ID = 'mobi';
// const PARSE_HOST_URL = 'http://pulsecheck.9ijakids.com/';
// const PARSE_JAVASCRIPT_KEY = 'mobi-JSKEY';
// Parse.initialize(PARSE_APPLICATION_ID, PARSE_JAVASCRIPT_KEY);
// Parse.enableLocalDatastore();
// Parse.serverURL = PARSE_HOST_URL;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
