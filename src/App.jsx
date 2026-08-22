import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Home from './assets/Home'
import Bloglist from './assets/Bloglist'

function App() {
  return(
    <div className="app-shell">
      <Home />
      <div className="blo-list">
        <Bloglist />
      </div>
    </div>
  );
}

export default App;
