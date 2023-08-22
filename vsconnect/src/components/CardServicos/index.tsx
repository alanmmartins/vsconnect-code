import "./style.css";
import { Link  } from "react-router-dom";
function CardServicos(props: any) {
    return (
        
  
        <div className="servico">
            <div className="topo_servico">
                
            <Link to = {"/Visualizar/"+ props.id}> <h2>{props.titulo}</h2> </Link>
                
               <span>R${props.proposta}</span>
            </div>
            <p>{props.descricao}</p>
            <div className="techs">

                {
                    props.techs.map((tech: string, indice: number) => {
                        return <span key={indice}>{tech}</span>
                    })
                }

            </div>
           
        </div>
   

    )
}
export default CardServicos;