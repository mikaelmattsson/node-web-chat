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

import Actions from '../Actions'

/**
 * This is the List component class.
 */
@Radium
export default class List extends Component {

  /**
   * Initiate and set state for the component.
   *
   * @param {object} props
   *
   * @return void
   */
  constructor (props) {
    super(props)
  }

  /**
   * Event handler to mark all items as complete.
   *
   * @return void
   */
  onToggleCompleteAll () {
    Actions.toggleCompleteAll()
  }

  /**
   * Render react component.
   *
   * @return {object}
   */
  render () {
    const { allItems, areAllComplete } = this.props

    if (Object.keys(this.props.allItems).length < 1) return null

    const rows = []

    for (const key in allItems) {
      if (allItems.hasOwnProperty(key)) {
        rows.push(<li key={key}>{allItems[key].text}</li>)
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

    '@media (max-width: 32em)': { padding: '2em 0 0' }
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
