import React from 'react';
import logo from './logo.svg';
import './App.css';
import Waifu from './WaifuScroll/Waifu';
import UIButtons from './UIButtons';
import WaifuButtons from './WaifuScroll/WaifuButtons';

function App() {
  return (
    <div className='UI'>
      <WaifuButtons/>
      <Waifu/>
      <UIButtons/>

    </div>
  );
}

export default App;
