
import React from 'react'
import { render } from 'react-dom'
import { Router, Route } from 'react-router'

import history from './history'

import ChatApp from './Components/ChatApp'

import Client from './Network/Client'


const client = new Client();


/**
 * This is the application index file.
 *
 * @author Magnus Bergman <hello@magnus.sexy>
 */

/**
 * @const container
 */
const root = document.getElementById('root')

/**
 * Render the app with react-router.
 */
render((
  <Router history={history}>
    <Route path='/' component={ChatApp} />
  </Router>
), root)
