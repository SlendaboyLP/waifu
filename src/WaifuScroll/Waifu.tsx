import React from 'react'
import { useEffect , useState} from 'react'
import './Waifu.css'
import {allTags} from './Types'

export default function Waifu({setCurrentWaifu}:any) {


  const [waifu, setWaifu] = useState<any>(null);
  const [keys, setKeys] = useState<any>({});
  const [lastWaifu, setLastWaifu] = useState<any>(null);
  const [nextWaifu, setNextWaifu] = useState<any>(null);

  const getWaifu = () => { 
    fetch('https://api.waifu.im/random')
      .then(response => response.json())
      .then(data => setWaifu(data));
  }

  const getNextWaifu = () => { 
    fetch('https://api.waifu.im/random')
      .then(response => response.json())
      .then(data => setNextWaifu(data));
  }

  useEffect(getWaifu, [])

  useEffect(() => {
    const keyUpdate = (key: string, isPressed: boolean) => setKeys({...keys, [key]: isPressed})
    let l1 = document.addEventListener("keydown", e => keyUpdate(e.key, true));
    return () => document.removeEventListener("keydown",l1 as any);
  }, [])

  useEffect(() => setCurrentWaifu(waifu), [waifu])

  useEffect(() => {
      if(keys["ArrowDown"]) {

        if(nextWaifu != null){
          setLastWaifu(waifu)
          setWaifu(nextWaifu)
          getNextWaifu()
        }
        else{
          setLastWaifu(waifu)
          setWaifu(null)
          getWaifu()
        }

        keys["ArrowDown"] = false
      }

      if(keys["ArrowUp"]) {
        if(lastWaifu === null) return
        setNextWaifu(waifu)
        setWaifu(lastWaifu)
        setLastWaifu(null)


        keys["ArrowUp"] = false
      }
  }, [keys])

   return (
    <div className='waifu-container'>
      {waifu ? <img src={waifu.images[0].url} className='waifu'alt=''/> : 'Loading...'}
    </div>
  )
}
