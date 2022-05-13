import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Index from './Views/Index';
import Album from './Views/Album';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Index/>}/>
      <Route path='/album' element={<Album/>}/>
    </Routes>
  </BrowserRouter>
)