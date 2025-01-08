import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { datadogRum } from '@datadog/browser-rum'

// datadogRum.init({
//     applicationId: '18fc775d-1ac4-41e9-b4a7-6700a796605d',
//     clientToken: 'pubbaedc3724790f274a493ab96780dce7e',
//     // `site` refers to the Datadog site parameter of your organization
//     // see https://docs.datadoghq.com/getting_started/site/
//     site: 'datadoghq.com',
//     service: 'dogfoodfe',
//     env: 'dev',
//     // Specify a version number to identify the deployed version of your application in Datadog
//     // version: '1.0.0',
//     sessionSampleRate: 100,
//     sessionReplaySampleRate: 20,
//     trackUserInteractions: true,
//     trackResources: true,
//     trackLongTasks: true,
//     defaultPrivacyLevel: 'mask-user-input',
// });

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
