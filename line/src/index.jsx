import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory  } from 'react-router'
import Line from './components/line'
import './css/line.scss';

render((
    <Router history={hashHistory}>
        <Route path="/" component={Line} />
    </Router>
), document.getElementById('main'));

