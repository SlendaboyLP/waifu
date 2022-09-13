import React from 'react';
import './reset.css'
import './App.css';
import Waifu from './WaifuScroll/Waifu';
import UIButtons from './WaifuScroll/UIButtons';
import WaifuButtons from './WaifuScroll/WaifuButtons';
import { useEffect, useState } from 'react';
import {Route, Routes} from 'react-router-dom'
import uuid4 from "uuid4";
import Settings from './Settings/Settings';

function App() {

  const [currentWaifu, setCurrentWaifu] = useState<any>(null);
  const [user, setUser] = useState<any>({
    userId: uuid4(),
    collection: {
      nsfw_collection: [],
      sfw_collection: [],
    },
    settings: {
      is_nsfw: false,
      sfw_collection_public: false,
      nsfw_collection_public: false,
    },
    tags: [
      {

        //nsfw tags will overwrite is_nsfw
        ass: false, 
        hentai: false, 
        milf: false, 
        oral: false, 
        paizuri: false, 
        ecchi: false, 
        ero: false, 

        //sfw tags will not overwrite is_nsfw
        uniform: false,
        maid: false,
        waifu: true,
        oppai: false,
        selfies: false
      },
      {
        "marin-kitagawa": false,
        "mori-calliope": false,
        "raiden-shogun": false
      }
    ]
  });

  return (

    <div className='UI'>
      <Routes>
        <Route path="/" element={
          <>
            <WaifuButtons currentWaifu={currentWaifu} user={user}/>
            <Waifu setCurrentWaifu={setCurrentWaifu} user={user}/>
            <UIButtons/>
          </>
        }/>

        <Route path="/Collection" element={
          <>
          </>
        }/>

        <Route path="/Settings" element={
            <Settings user={user} setUser={setUser}/>
        }/>

      </Routes>
      
    </div>
  );
}

export default App;