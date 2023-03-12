import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import './components/UI/reset.scss';
import './components/UI/utils.scss';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<App />);