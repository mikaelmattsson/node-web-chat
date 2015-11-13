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

import Store from '../stores'

import Form from './Form'
import List from './List'
import Footer from './Footer'




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
     *
     * @return void
     */
    constructor(props) {
        super(props)

        this.state = this.loadState();

        this.onChange = this.onChange.bind(this)
    }

    /**
     * Retrieve the current item data from the Store.
     *
     * @return {object}
     */
    loadState() {
        return {
            allItems: Store.getAll(),
            areAllComplete: Store.areAllComplete()
        }
    }

    /**
     * Add event listener when component is mounted.
     *
     * @return void
     */
    componentDidMount() {
        Store.addChangeListener(this.onChange)
    }

    /**
     * Remove event listener when component will unmount.
     *
     * @return void
     */
    componentWillUnmount() {
        Store.removeChangeListener(this.onChange)
    }

    /**
     * Event handler that updates the state when the 'change' event is
     * triggered from the store.
     *
     * @return void
     */
    onChange() {
        this.setState(this.loadState())
    }

    /**
     * Render react component.
     *
     * @return {object}
     */
    render() {
        const { allItems, areAllComplete } = this.state

        return (
            <main style={styles.base}>
                <List allItems={allItems}/>
                <Form />
                <Footer />
            </main>
        )
    }

}

const fadeIn = Radium.keyframes({
    from: {opacity: 0},
    to: {opacity: 1}
})

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
}
