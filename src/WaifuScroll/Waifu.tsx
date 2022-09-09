import React from 'react'
import { useEffect , useState} from 'react'
import './Waifu.css'

export default function Waifu() {

  const [waifu, setWaifu] = useState<any>();
  const [keys, setKeys] = useState<any>({});
  const [lastWaifu, setLastWaifu] = useState<any>();
  const [nextWaifu, setNextWaifu] = useState<any>();


  type nsfwTags = 
    | "ass"
    | "hentai"
    | "milf"
    | "oral"
    | "paizuri"
    | "ecchi"
    | "ero";

  type sfwTags = 
    | "uniform"
    | "maid"
    | "waifu"
    | "marin-kitagawa"
    | "mori-calliope"
    | "raiden-shogun"
    | "oppai"
    | "selfies";

  type allTags = nsfwTags | sfwTags


  const getWaifu = () => {
    fetch('https://api.waifu.im/random')
      .then(response => response.json())
      .then(data => setWaifu(data));
  }

  useEffect(getWaifu, [])

  const keyUpdate = (key: string, isPressed: boolean)=>{
    
    setKeys({...keys, [key]: isPressed});
  }

  useEffect(() => {
    let l1 = document.addEventListener("keydown", e => keyUpdate(e.key, true));
    let l2 = document.addEventListener("keyup" , e => keyUpdate(e.key, false));

    return () => {
      document.removeEventListener("keydown",l1 as any);
      document.removeEventListener("keyup", l2 as any);
    }
  }, [])

  useEffect(() => {
      if(keys["ArrowDown"]) {
        setLastWaifu(waifu)
        setWaifu(null)
        getWaifu()
      }

      if(keys["ArrowUp"]) {
        setWaifu(lastWaifu)
        setLastWaifu(null)
        
      }
  }, [keys])

   return (
    <div className='waifu-container'>
      {waifu ? <img src={waifu.images[0].url} className='waifu'/> : 'Loading...'}
    </div>
  )
}
