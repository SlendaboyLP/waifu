import React from 'react'
import { useEffect , useState} from 'react'
import './Waifu.css'
import {allTags} from './Types'

export default function Waifu({setCurrentWaifu}:any) {


  let   url = 'https://api.waifu.im/random'
  const [waifu, setWaifu] = useState<any>(null);
  const [keys, setKeys] = useState<any>({});
  const [lastWaifu, setLastWaifu] = useState<any>(null);
  const [nextWaifu, setNextWaifu] = useState<any>(null);

  const getWaifu = () => { 
    fetch(url)
      .then(response => response.json())
      .then(data => setWaifu(data.images[0]));
  }

  const getNextWaifu = () => { 
    fetch(url)
      .then(response => response.json())
      .then(data => setNextWaifu(data.images[0]));
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
      {waifu ? <img src={waifu.url} className='waifu'alt=''/> : 'Loading...'}
    </div>
  )
}
