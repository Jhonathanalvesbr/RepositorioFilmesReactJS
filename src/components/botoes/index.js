import Botao from "./botao";

import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import "./index.css"

function TelaBotoes({ genero, setPesquisa, setId, setGenero }) {
  let i = 0;
  return (
    <div className="btnCarrosel">
      <Carousel autoPlay="true">
        {genero?.map((element) => (
          <div >
            <Botao selecao="" label={genero[i]?.name} id={genero[i++]?.id} setPesquisa={setPesquisa} setID={setId} setGenero={setGenero} />

            <Botao selecao="" label={genero[i]?.name} id={genero[i++]?.id} setPesquisa={setPesquisa} setID={setId} setGenero={setGenero} />

            <Botao selecao="" label={genero[i]?.name} id={genero[i++]?.id} setPesquisa={setPesquisa} setID={setId} setGenero={setGenero} />

            <Botao selecao="" label={genero[i]?.name} id={genero[i++]?.id} setPesquisa={setPesquisa} setID={setId} setGenero={setGenero} />
  
          </div>
        )).slice(0, +genero?.length / 4)}
      </Carousel>
    </div>
  );
}

export default TelaBotoes;
