import '../src/assets/App.css';
import React, { } from "react";
import { } from 'react-bootstrap'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home';
import NotFound from './components/NotFound';
import Album from './components/Album';
import Artist from './components/Artist';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/album' element={<Album />} />
          <Route path='/artist' element={<Artist />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
