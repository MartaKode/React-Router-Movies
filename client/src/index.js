import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';

// Importing Router to wrap the App in it
import { BrowserRouter as Router  } from 'react-router-dom'

ReactDOM.render(
<Router>
<App />
</Router>
, document.getElementById('root'));
