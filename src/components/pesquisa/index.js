
import Botao from "../botoes/botao";
import "./index.css"


function Pesquisa({ setPesquisa,  input, setId }) {
    

    return (
        <div className="input">
            <input type="text" ref={input} />
            <Botao selecao="terceiro" setID= {setId}label={"Pesquisar"} input={input} setPesquisa={setPesquisa} />
        </div>
    )
}

export default Pesquisa;