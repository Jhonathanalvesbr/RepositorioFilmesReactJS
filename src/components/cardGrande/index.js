import "./index.css"
import { Estrela } from "../card/estrelas";

function CardGrande({ alt, filme }) {
    return (

        <div className="img grande">
            <img src={"https://image.tmdb.org/t/p/original/" + filme.poster_path} alt={alt} />
            <div className="painel">
                <div>
                    <p>{filme.title}</p><p className="menor">{filme.release_date.split("-")[0] !== null ? "(" + filme.release_date.split("-")[0] + ")" : ""}</p>
                </div>
                <div className="estrela">
                    <Estrela valor={filme.vote_average} onClick={() => { }} />
                </div>
                <div>
                    <p className="tipo">{filme.genre_ids.join(", ")}</p>
                </div>
                <div>
                    <p className="texto">{filme.overview}</p>
                </div>

            </div>
        </div>
    )
}

export default CardGrande;