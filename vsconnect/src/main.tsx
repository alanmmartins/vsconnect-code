import React from 'react';
import ReactDOM from 'react-dom/client';


import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

//componentes
import Header from './components/Header';
import Home from './pages/Home';
import ListaServicos from './pages/ListaServicos';
import Cadastro from './pages/Cadastro';
import CadastroServico from './pages/CadastroServico';
import ListaDevs from './pages/ListaDevs';
import Login from './pages/Login';
import './index.css';

//estilização global
import "./index.css";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/lista/servicos' element={<ListaServicos />} />
        <Route path='/cadastro/usuario' element={<Cadastro />} />
        <Route path='/cadastro/servicos' element={<CadastroServico />} />
        <Route path='/lista/devs' element={<ListaDevs />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </Router>
  </React.StrictMode>,
)
