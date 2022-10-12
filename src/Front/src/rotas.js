import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom'

import Login from './pages/Login';
import AlterarAssoc from './pages/AlterarAssoc';
import AlterarEmail from './pages/AlterarEmail';
import CadastroAssoc from './pages/CadastroAssoc/antigo';
import Clipping from './pages/Clipping';
import GerencAssoc from './pages/GerencAssoc';
import Pdf from './pages/Pdf';

export default function Rotas() {
  return(
    
    <BrowserRouter>
      <Routes>
       <Route path='/' element={<Login/>} />
       <Route path='/alterassoc/:id' element={<AlterarAssoc/>} />
       <Route path='/alteremail' element={<AlterarEmail/>} />
       <Route path='/cadassoc' element={<CadastroAssoc/>} />
       <Route path='/clip' element={<Clipping/>} />
       <Route path='/gerencassoc' element={<GerencAssoc/>} />
       <Route path='/pdf' element={<Pdf/>} />
      </Routes>
    </BrowserRouter>
  )
};