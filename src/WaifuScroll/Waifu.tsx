import React from 'react'
import { useEffect , useState} from 'react'
import './Waifu.css'

export default function Waifu() {
  const [waifu, setWaifu] = useState<any>();

  const getWaifu = () => {
    fetch('https://api.waifu.im/random')
      .then(response => response.json())
      .then(data => setWaifu(data));
  }

  useEffect(() => getWaifu(), [])
  
   return (
    <div className='waifu-container'>
      {waifu ? <img src={waifu.images[0].url}className='waifu'/> : 'Loading...'}
    </div>
  )
}
