//imagens
import imgLogo from "../../assets/images/logo.svg";
/* import imgDev from "../../assets/images/dev.png"; */
import iconFace from "../../assets/images/facebook.svg";
import iconInsta from "../../assets/images/instagram.svg";
import iconLinkedin from "../../assets/images/linkedin.svg";

//estilização
import "./style.css";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer>
            <div className="container rodape">
                <div className="rodape_conteudo">
                    <div className="rodape_conteudo_paginas">
                        <h2>Páginas</h2>
                        <ul>
                            <li><Link to={'/login'}>Login</Link></li>
                            <li><Link to={'/'}>Home</Link></li>
                            <li><Link to={'/lista/servicos'}>Listar Serviços</Link></li>
                            <li><Link to={'/cadastro/usuario'}>Cadastrar Cliente</Link></li>
                            <li><Link to={'/lista/devs'}>Lista desenvolvedores</Link></li>
                            <li><Link to={'/cadastro/usuario'}>Cadastrar Desenvolvedor</Link></li>
                        </ul>
                    </div>
                    <img src={imgLogo} alt="" />
                    <div className="rodape_conteudo_contatos">
                        <h2>Contatos</h2>
                        <div>
                            <Link to={"/"}><img src={iconFace} alt="" /></Link>
                            <Link to={"/"}><img src={iconInsta} alt="" /></Link>
                            <Link to={"/"}><img src={iconLinkedin} alt="" /></Link>
                        </div>
                        <Link to={"/"}>contato@vsconnect.com</Link>
                    </div>
                </div>
                <p>todos os direitos reservados ©.</p>
            </div>
        </footer>
    )
}

export default Footer;