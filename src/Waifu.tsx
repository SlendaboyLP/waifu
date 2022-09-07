import React from 'react'
import { useEffect , useState} from 'react'
import axios from 'axios'


export default function Waifu() {

  const [waifu, setWaifu] = useState();

  const getWaifu = () => {
    fetch('https://api.waifu.im/random')
      .then(response => response.json())
      .then(data => setWaifu(data));
  }

  useEffect(() => getWaifu(), [])
  
   return (
    <div className='waifu'>
      {waifu.images[0].url}
    </div>
  )
}
