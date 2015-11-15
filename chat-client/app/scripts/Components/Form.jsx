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

import Actions from '../Actions/'

import TextInput from './TextInput.jsx'

/**
 * This is the TodoForm component class.
 */
@Radium
export default class TodoForm extends Component {

    /**
     * Event handler that creates a new todo item.
     *
     * @param {string} text
     * @return void
     */
    onSave(text) {
        if (text.trim()) {
            Actions.create(text)
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
                <TextInput placeholder='What would you like to say?' onSave={this.onSave}/>
            </header>
        )
    }
}
