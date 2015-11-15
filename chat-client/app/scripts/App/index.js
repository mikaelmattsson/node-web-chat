import Client from '../Network/Client'
import React from 'react'
import { render } from 'react-dom'
import { Router, Route } from 'react-router'

import history from '../history'

import ChatApp from '../Components/ChatApp'

export default class App {

    /**
     * Initiate the app.
     */
    static main() {
        App.client = new Client();
        App.renderRoot()
    }

    /**
     * Render the app with react-router.
     */
    static renderRoot(){
        const root = document.getElementById('root');
        render((
            <Router history={history}>
                <Route path='/' component={ChatApp}/>
            </Router>
        ), root)
    }

}
