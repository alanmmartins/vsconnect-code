import React from 'react';
import ReactDOM from 'react-dom/client';

//componentes
import Header from './components/Header';
import Home from "./pages/Home/";
import ListaServicos from "./pages/ListaServicos/";
import Footer from "./components/Footer"

//estilização global
import "./index.css";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Header/>
    <Home />
    <ListaServicos />
    <Footer/>
  </React.StrictMode>,
)
