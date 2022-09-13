import React from 'react'
import './UIButtons.css'
import {Link} from 'react-router-dom'

export default function UIButtons() {
  return (
    <div className='buttons'>

      <Link to="/" className='btn'>Start</Link>
      <Link to="/Collection" className='btn'>Collection</Link>
      <Link to="/Settings" className='btn'>Settings</Link>
    </div>
  )
}