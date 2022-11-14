import Botao from "./botao";

import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import "./index.css"

function TelaBotoes({ genero, setPesquisa, setId, setGenero }) {

  return (
    <div className="btnCarrosel">
      <Carousel autoPlay="true">
        {genero?.map((element, i) => (
          <div >
            <Botao selecao="" label={genero[i].name} id={genero[i].id} setPesquisa={setPesquisa} setID={setId} setGenero={setGenero} />
            <Botao selecao="" label={genero[i + 1]?.name} id={genero[i + 1]?.id} setPesquisa={setPesquisa} setID={setId} setGenero={setGenero} />
            <Botao selecao="" label={genero[i + 2]?.name} id={genero[i + 2]?.id} setPesquisa={setPesquisa} setID={setId} setGenero={setGenero} />
            <Botao selecao="" label={genero[i + 3]?.name} id={genero[i + 3]?.id} setPesquisa={setPesquisa} setID={setId} setGenero={setGenero} />
          </div>
        )).slice(0, +genero?.length / 4)}
      </Carousel>
    </div>
  );
}

export default TelaBotoes;
