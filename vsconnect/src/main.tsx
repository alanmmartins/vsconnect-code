import React from 'react';
import ReactDOM from 'react-dom/client';

//componentes
import Home from "./pages/Home/";
import ListaServicos from "./pages/ListaServicos/";
import ListaDevs from "./pages/ListaDevs";
import Footer from "./components/Footer"
import Header from './components/Header';
import Perfil from "./pages/PerfilUsuario"
import Servico from "./pages/VisualizarServico"
import CadastroUsuario from './pages/CadastroUsuario';


//estilização global
import "./index.css";

//rotas
import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter> {/*Indica que aplicação terá rotas*/}
      <Header />
      <Routes>{/*Indica uma lista de rotas*/}
        <Route path='/' element={<Home />} /> {/*Indica o caminho do componente e o nome da rota dele*/}
        <Route path='lista/servicos' element={<ListaServicos />} />
        <Route path='lista/devs' element={<ListaDevs />} />
        <Route path='Visualizar/:idServico' element={<Servico/>} />
        <Route path='Perfil/:idUsuario' element={<Perfil/>} />
        <Route path='Cadastro/Usuario' element={<CadastroUsuario/>} />

      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
)