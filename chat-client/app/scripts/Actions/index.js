/*
 * This file is part of a sample chat application.
 *
 * (c) Mikael Mattsson
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import dispatcher from '../dispatcher'
import * as constants from '../constants'
import App from '../App'

/**
 * This is the Actions class.
 *
 * @author Magnus Bergman <hello@magnus.sexy>
 */
class Actions {

    /**
     * Create new item.
     *
     * @param {string} text
     * @return void
     */
    create(text) {
        //dispatcher.dispatch({
        //    actionType: constants.CREATE,
        //    text: text
        //})
        App.client.emitMessage(text)
    }

}

export default new Actions()
