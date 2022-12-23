import React from 'react';
import ReactDOM from 'react-dom/client';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap';
import './index.scss';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { UrlProvider } from './context/UrlContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<Router>
		<UrlProvider>
			<App />
		</UrlProvider>
	</Router>,
);
