/*
 * This file is part of a sample chat application.
 *
 * (c) Mikael Mattsson
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import React, { PropTypes, Component } from 'react'
import Radium from 'radium'

import * as colors from '../utils/colors'

/**
 * This is the List component class.
 */
@Radium
export default class MessageList extends Component {

    /**
     * Render react component.
     * @return {object}
     */
    render() {
        const { messages } = this.props;
        const rows = [];

        if (Object.keys(this.props.messages).length < 1) {
            return null;
        }

        for (const key in messages) {
            if (messages.hasOwnProperty(key)) {
                rows.push(<li key={key}>{messages[key]}</li>)
            }
        }

        return (
            <section style={styles.base}>
                <ul style={styles.items}>{rows}</ul>
            </section>
        )
    }

}

const styles = {
    base: {
        padding: '2em 2em 0',

        '@media (max-width: 32em)': {padding: '2em 0 0'}
    },

    items: {
        //height: '284px',
        listStyle: 'none',
        margin: '1em 0',
        padding: '1em 0',
        borderTop: '1px solid ' + colors.base,
        borderBottom: '1px solid ' + colors.base
    }
}
