import React from 'react'
import { useEffect , useState} from 'react'
import './Waifu.css'
import {allTags} from './Types'

export default function Waifu({setCurrentWaifu, user}:any) {


  const defaultUrl = 'https://api.waifu.im/random'
  const [waifu, setWaifu] = useState<any>(null);
  const [keys, setKeys] = useState<any>({});
  const [lastWaifu, setLastWaifu] = useState<any>(null);
  const [nextWaifu, setNextWaifu] = useState<any>(null);

  const getWaifu = () => { 
    fetch(buildQueryString())
      .then(response => response.json())
      .then(data => setWaifu(data.images[0]));
  }

  const getNextWaifu = () => { 
    fetch(buildQueryString())
      .then(response => response.json())
      .then(data => setNextWaifu(data.images[0]));
  }

  useEffect(() => console.log(waifu), [waifu])

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

  const buildQueryString = () => {
    const [ Tags, girls] = user.tags
    let url = defaultUrl + "?is_nsfw=" + user.settings.is_nsfw


    for(const tag in Tags){
      if(!Tags[tag]) continue
      url += "&selected_tags=" + tag
    }

    for(const girl in girls){
      if(!girls[girl]) continue
      url += "&selected_tags=" + girl
    }
    return url

  }

   return (
    <div className='waifu-container'>
      {waifu ? <img src={waifu.url} className='waifu'alt='' style={{border: "2px solid " + waifu.dominant_color}}/> : 'Loading...'}
    </div>
  )
}
