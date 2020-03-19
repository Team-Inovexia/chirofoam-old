import React from 'react'
import Scroll from 'react-scroll'
let ScrollLink = Scroll.ScrollLink;

const spyButton = props => {
  return (
    <button {...this.props}>
    {this.props.children}
    </button>
  )
}

module.exports = ScrollLink(spyButton);
