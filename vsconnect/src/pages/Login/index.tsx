//hooks
import { useEffect, useState } from "react";
//estilização
import "./style.css";

//axios
import api from "../../utils/api";

import { useNavigate } from "react-router-dom";
//Local storage 
import securelocalStorage from "react-secure-storage";



function Login() {
    //variavel que utiliza  a funcao para navigation entee os componentes 

    const navegate = useNavigate();

    const [email, setEmail] = useState<string>("");
    const [senha, setSenha] = useState<string>("");

    function realizarAutenticacao(event: any) {
        event.preventDefault();

        const usuario = {
            email: email,
            password: senha
        };

        api.post("login", usuario)
        .then((response: any) => {
            securelocalStorage.setItem("user", response.data);
            //redireciionar componente perfil 
            navegate("/perfil/"+ response.data.user.id);
            //recarrega a tela
            navegate(0);
            
            alert("Login com sucesso :)");
            console.log(response.data);
        })
        .catch((error: any) => {
            alert("Falha ao se logar");
            console.log(error);
        })
   
    }

    return (
        <main id="main_login">
            <div className="container container_login">
                <div className="login_conteudo">
                    <h1>Login</h1>
                    <hr />
                    <form className="login_formulario" method="POST" onSubmit={realizarAutenticacao}>
                        <div className="login_box_input">
                            <label htmlFor="email">E-mail:</label>
                            <input
                                type="email"
                                id="email"
                                placeholder="Digite aqui seu e-mail:"
                                required
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="login_box_input">
                            <label htmlFor="senha">Senha:</label>
                            <input
                                type="password"
                                id="senha"
                                placeholder="Digite aqui sua senha:"
                                required
                                onChange={(e) => setSenha(e.target.value)}
                            />
                        </div>
                        <button className="login_botao" type="submit">Logar</button>
                    </form>
                </div>
            </div>
        </main>

    );
}

export default Login;