import Botao from "./botao";
import "./index.css"

function TelaBotoes({ genero, setPesquisa, setId, setGenero }) {
  console.log(genero);
  return (
    <div className="botoes">
      {genero.map(element =>
        <Botao selecao="" label={element.name} id={element.id} setPesquisa={setPesquisa} setID={setId} setGenero={setGenero} />
      )}
    </div>

  );
}

export default TelaBotoes;
