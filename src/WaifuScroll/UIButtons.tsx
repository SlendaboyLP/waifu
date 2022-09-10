import React from 'react'
import './UIButtons.css'

export default function UIButtons({user}:any) {
  return (
    <div className='buttons'>
      <button>Start</button>
      <button onClick={() => console.table(user.collection)}>Collection</button>
      <button>Settings</button>
    </div>
  )
}
