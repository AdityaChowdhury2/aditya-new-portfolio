import React from 'react';
import ReactDOM from 'react-dom/client';
import AOS from 'aos';
import './index.css';
import 'aos/dist/aos.css';

AOS.init();
import Home from './Home/Home';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Home />
	</React.StrictMode>
);
