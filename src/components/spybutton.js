import React from 'react'
import Scroll from 'react-scroll'
let ScrollLink = Scroll.ScrollLink;

const spyButton = props => {
  return (
    <button {...props}>
    {props.children}
    </button>
  )
}
export default ScrollLink(spyButton)
