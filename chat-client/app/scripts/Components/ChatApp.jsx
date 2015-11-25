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

//import Store from '../stores'
import Form from './Form'
import MessageList from './MessageList'
import Footer from './Footer'
import Receiver from '../Network/Receiver'

/**
 * This is the TodoApp component class, it operates as a "Controller-View".
 * It listens for changes in the Store and passes the new data to its children.
 *
 * @author Magnus Bergman <hello@magnus.sexy>
 */
@Radium
export default class ChatApp extends Component {

    /**
     * Initiate and set state for the component.
     *
     * @param {object} props
     */
    constructor(props) {
        super(props);

        this.state = {
            messages: []
        };

        this.onMessage = this.onMessage.bind(this);
        this.onJoinedRoom = this.onJoinedRoom.bind(this);
    }

    /**
     * Add event listener when component is mounted.
     */
    componentDidMount() {
        Receiver.onMessage(this.onMessage);
        Receiver.onJoinedRoom(this.onJoinedRoom);
    }

    /**
     * Remove event listener when component will unmount.
     */
    componentWillUnmount() {
        Receiver.removeMessageListener(this.onMessage);
        Receiver.removeJoinedRoomListener(this.onJoinedRoom);
    }

    /**
     * Event handler that updates the state when the 'change' event is
     * triggered from the store.
     *
     * @param data
     */
    onMessage(data) {
        console.log('onMessage');
        const messages = this.state.messages;
        messages.push(data);
        this.setState({
            messages: messages
        });
    }

    /**
     *
     * @param data
     */
    onJoinedRoom(data){
        this.setState({
            messages: data.messages
        });
    }

    /**
     * Render react component.
     *
     * @return {object}
     */
    render() {
        const { messages } = this.state;

        return (
            <main style={styles.base}>
                <MessageList messages={messages}/>
                <Form />
                <Footer />
            </main>
        )
    }

}

const fadeIn = Radium.keyframes({
    from: {opacity: 0},
    to: {opacity: 1}
});

const styles = {
    base: {
        opacity: 0,
        animation: `${fadeIn} 200ms linear forwards`,

        padding: '0 20%',

        '@media (max-width: 56em)': {padding: '0 15%'},
        '@media (max-width: 48em)': {padding: '0 10%'},
        '@media (max-width: 40em)': {padding: '0 5%'},
        '@media (max-width: 32em)': {padding: '0 1em'}
    }
};
