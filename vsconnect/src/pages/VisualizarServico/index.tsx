//rotas
import { useEffect, useState } from "react";
import { Link ,useParams } from "react-router-dom";
import api from "../../utils/api";

//estilização
import "./style.css";



function VisualizarServico() {

    const { idServico } = useParams(); // acessando o id usuario

    // dados dos usuario, retornar na api 

    const [nome, setNome] = useState<string>("");
    const [valor, setValor] = useState<string>("");
    const [descricao, setDescricao] = useState<string>("");
    const [listaSkills, setListaSkills] = useState<string[]>([]);


    function buscarServicoPorID() {
        //estrutura basica para consumir api

        api.get("servicos/" + idServico)
            .then((response: any) => {

                setNome(response.data.nome);
                setValor(response.data.valor);
                setDescricao(response.data.descricao);
                setListaSkills(response.data.techs);
            

            })
            .catch((error: any) => console.log(error));

    }

    useEffect(() => {
        buscarServicoPorID();
    }, []);

    return (
        <main id="main_visualizarservico">
            <div className="container">
            <Link to = {"/lista/servicos"}> <h1>Serviço</h1> </Link>
                
                
                <div className="servico">
                    <div className="topo_servico">
                        <h2>{nome}</h2>
                        <span>{valor}</span>
                    </div>
                    <p>{descricao}</p>
                    
                    <div className="techs">
                    {
                                listaSkills.map((tech: string, indice: number) => {

                                    return <span key={indice}> {tech} </span>
                                })
                            }



                       {/*  <span>HTML</span>
                        <span>CSS</span>
                        <span>React</span> */}
                    </div>
                </div>
            </div>

        </main>);
}

export default VisualizarServico;