import TelaBotoes from "./components/botoes";
import Cartao from "./components/card";
import CardGrande from "./components/cardGrande";
import Pesquisa from "./components/pesquisa";
import "./index.css"
import axios from "axios";
import { useEffect, useState } from "react";
import { useRef } from "react";
import CliFadeLoader from "../node_modules/react-spinners/ClipLoader";

function App() {

  const [filmes, setPesquisa] = useState([]);
  const [id, setId] = useState([]);
  const [genero, setGenero] = useState([]);
  const input = useRef(null);

  useEffect(() => {
    axios.get("https://api.themoviedb.org/3/genre/movie/list?api_key=6360c588c1879ed5fb0171b5beb4528a&language=pt-BR")
      .then(genero => {
        genero = genero.data;
        setGenero(genero.genres);
        axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=6360c588c1879ed5fb0171b5beb4528a&language=pt-BR&page=1`)
          .then(res => {
            res.data.results.forEach(element => {
              let gene = []
              element.genre_ids.forEach(element => {
                gene.push(genero.genres.filter(g => g.id === element)[0].name)
              });
              element.genre_ids = gene;
            });
            setId(res.data.results[Math.floor(Math.random() * res.data.results.length)]); setPesquisa(res.data)
          }
          )
      }
      )
  }, []);


  if (filmes.length === 0 || filmes.results.length === 0) {
    return <div className="carregar">
      <div>
        <CliFadeLoader color="#00000" />
      </div>
    </div>

  }

  return (
    <div className="App">
      <header className="App-header">
        {<> <Pesquisa setPesquisa={setPesquisa} input={input} setId={setId} setGenero={setGenero} />
          <CardGrande filme={id} />
          <TelaBotoes genero={genero} setPesquisa={setPesquisa} setId={setId} setGenero={setGenero} />
          {filmes.results.map(f =>
            <Cartao filme={f} img={"https://image.tmdb.org/t/p/original/" + f.poster_path} nome={f.title}
              estrela={f.vote_average} tipo={f.genre_ids.join(", ")} alt={f.title} id={f.id} ano={f.release_date} setId={setId} />
          )}</>}
      </header>
    </div>
  );
}

export default App;
