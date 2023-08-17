import CardServico from "../../components/CardServicos";
import "./style.css";
import { useState , useEffect} from "react";

//
import api from "../../utils/api";

function ListaServicos() {

    const [servicos,setServicos] = useState<any[]>([

    ]);

   /*  const [listaServicosfiltrado, setListaServicosFiltrados] = useState<any[]>(lista); */

    const [servicoDigitado, setServicoDigitado] = useState<string>("");

    function verificarCampoServico(event: any) {
        if (event.target.value === "") {
            listarServicos();//retorno api

        }
        setServicoDigitado(event.target.value);
        console.log(servicoDigitado);

    }

    function buscarServicoPorSkill(event: any) {

        event.preventDefault();

        const servicosFiltrado = servicos.filter((servico: any) => servico.techs.includes(servicoDigitado.toLocaleUpperCase()));

        if (servicosFiltrado.length === 0) {
            alert("Nenhum desenvolvedor(a) com essa skill :(")
        } else {

            /* setListaServicosFiltrados(servicosFiltrado); */
            setServicos(servicosFiltrado)

        }

    }


    //obter servicos da api

    function listarServicos() {
        api.get("servicos")
            .then((response: any) => {
                console.log(response);
                setServicos(response.data)
            })

            .catch((error: any) => {
                console.log("Error ao realizar uma requisição servoco", error);

            })

    }


    //monitorar componente - só sera executado dps que a tela carregar
    useEffect(() => {
        //executa ação
        listarServicos();

    }, []);

    return (
        <>
            <main id="main_listaservicos">
                <div className="container container_lista_servicos">
                    <div className="lista_servicos_conteudo">
                        <h1>Lista de Serviços</h1>
                        <hr />
                        <form onSubmit={buscarServicoPorSkill} method="post">
                            <div className="wrapper_form">
                                <label htmlFor="busca">Procurar serviços</label>
                                <div className="campo-label">
                                    <input onChange={verificarCampoServico} type="search"
                                        name="campo-busca"
                                        id="busca"
                                        placeholder="Buscar serviços por tecnologias..." />
                                    <button type="submit">Buscar</button>
                                </div>
                            </div>
                        </form>
                        <div className="wrapper_lista">
                            <ul>
                                {
                                    servicos.map((servicos: any, indice: number) => {
                                        return <li key={indice}>
                                            <CardServico

                                                titulo={servicos.titulo}
                                                descricao={servicos.descricao}
                                                proposta={servicos.proposta}
                                                techs={servicos.techs} />
                                        </li>
                                    })
                                }

                            </ul>
                        </div>
                    </div>
                </div>
            </main>

        </>
    );
}

export default ListaServicos;