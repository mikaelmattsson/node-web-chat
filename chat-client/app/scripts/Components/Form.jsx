/*
 * This file is part of a sample chat application.
 *
 * (c) Mikael Mattsson
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import React, { Component } from 'react'
import Radium from 'radium'

import TextInput from './TextInput'
import client from '../Network/Client'

/**
 * This is the TodoForm component class.
 */
@Radium
export default class Form extends Component {

    /**
     * Event handler that creates a new todo item.
     *
     * @param {string} text
     * @return void
     */
    onSubmit(text) {
        if (text.trim()) {
            client.emitMessage(text.trim());
        }
    }

    /**
     * Render react component.
     *
     * @return {object}
     */
    render() {
        return (
            <header>
                <h2>Chat</h2>
                <TextInput placeholder='What would you like to say?' onSubmit={this.onSubmit}/>
            </header>
        )
    }
}
