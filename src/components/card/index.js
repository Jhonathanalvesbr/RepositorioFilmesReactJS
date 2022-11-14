import { Estrela } from "./estrelas";
import "./index.css"

function Cartao({ img, nome, estrela, tipo, alt, filme, ano, setId }) {
    const getID = () => {
        setId(filme);
    }

    return (
        <div className="img" onClick={getID}  >
            <img src={img} alt={alt} />

            <div className="painel">
                <div>
                    <p>{nome}</p><p className="menor">{ano.split("-")[0] !== null ? "(" + ano.split("-")[0] + ")" : ""}</p>
                </div>
                <div className="estrela">
                    <Estrela valor={+estrela} onClick={() => { }} />
                </div>
                <div>
                    <p className="tipo">{tipo}</p>
                </div>
            </div>

        </div>
    );
}

export default Cartao;