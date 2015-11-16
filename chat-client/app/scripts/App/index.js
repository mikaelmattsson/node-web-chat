import Client from '../Network/Connection'
import React from 'react'
import { render } from 'react-dom'
import { Router, Route } from 'react-router'

import history from '../history'
import ChatApp from '../Components/ChatApp'

class App {

    /**
     * Initiate the app.
     */
    main() {
        App.renderRoot()
    }

    /**
     * Render the app with react-router.
     */
    static renderRoot() {
        const root = document.getElementById('root');
        render((
            <Router history={history}>
                <Route path='/' component={ChatApp}/>
            </Router>
        ), root)
    }

}

export default new App();
