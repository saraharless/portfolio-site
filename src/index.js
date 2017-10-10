import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './components/Home.js'
import About from './components/About.js'
import BaseLayout from './components/BaseLayout.js'
import Portfolio from './components/Portfolio.js'
import Resume from './components/Resume.js'

ReactDOM.render(
<BrowserRouter>
<BaseLayout>
  <Switch>
    <Route exact path='/' component={Home} />
    <Route path='/about' component={About} />
    <Route path='/portfolio' component={Portfolio} />
    <Route path='/Resume' component={Resume} />
  </Switch>
</BaseLayout>
</BrowserRouter>

,document.getElementById('root')
);
registerServiceWorker();
