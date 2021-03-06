import * as config from './../config/app'

import ChatController from './Controller/ChatController'
import UserController from './Controller/UserController'

import Connection from './Network/Connection'

export default class App {

    /**
     * Start the app.
     */
    main() {
        this.connection = new Connection();
        this.chatController = new ChatController();
        this.userController = new UserController();
    }

}

export default new App();
