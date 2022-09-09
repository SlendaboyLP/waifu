import React from 'react';
import logo from './logo.svg';
import './reset.css'
import './App.css';
import Waifu from './WaifuScroll/Waifu';
import UIButtons from './WaifuScroll/UIButtons';
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
