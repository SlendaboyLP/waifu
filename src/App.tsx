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
    collection: [],
    settings: {
      is_nsfw: false,
    },
    tags: [
      {
        ass: false,
        hentai: false,
        milf: false,
        oral: false,
        paizuri: false,
        ecchi: false,
        ero: false,
      },
      {
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