import React from 'react'
import './WaifuButtons.css'

export default function WaifuButtons({currentWaifu, user}:any) {
  
  const addToUserCollection = () => {
    if(user === undefined) return
    if(currentWaifu === null) return
    user.collection.push(currentWaifu)
  }

  return (
    <div className='waifu-buttons'>
      <button>Upvote</button>
      <button>Downvote</button>
      <button onClick={addToUserCollection}>Save to Collection</button>
   </div>
  )
}
