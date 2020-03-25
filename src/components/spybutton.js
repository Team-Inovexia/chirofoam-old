import React from 'react'
import Scroll from 'react-scroll'
let ScrollLink = Scroll.ScrollLink;

const Spybutton  = props => {
  return (
    <button {...props}>
    {props.children}
    </button>
  )
}
export default ScrollLink(Spybutton)
