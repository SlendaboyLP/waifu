import React from 'react';
import logo from './logo.svg';
import './reset.css'
import './App.css';
import Waifu from './WaifuScroll/Waifu';
import UIButtons from './WaifuScroll/UIButtons';
import WaifuButtons from './WaifuScroll/WaifuButtons';
import { useEffect, useState } from 'react';

import uuid4 from "uuid4";

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
      <WaifuButtons currentWaifu={currentWaifu} user={user}/>
      <Waifu setCurrentWaifu={setCurrentWaifu}/>
      <UIButtons user={user}/>
    </div>
  );
}

export default App;
