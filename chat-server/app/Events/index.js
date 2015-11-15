/*
 * This file is part of a sample chat application.
 *
 * (c) Mikael Mattsson
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

export default class Events {

    static handleMessage(message, socket, server) {
        server.emit('message', message) // Send to everyone
    }

}