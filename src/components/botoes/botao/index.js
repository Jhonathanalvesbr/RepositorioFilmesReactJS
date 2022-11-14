
import "./index.css"
import axios from "axios";

function Botao({ selecao, label, id, input, setPesquisa, setID }) {

    const editarPesquisa = () => {
        console.log(id);
        if (id) {

            axios.get("https://api.themoviedb.org/3/genre/movie/list?api_key=6360c588c1879ed5fb0171b5beb4528a&language=pt-BR")
                .then(genero => {
                    genero = genero.data;
                    axios.get(`http://api.themoviedb.org/3/discover/movie?api_key=6360c588c1879ed5fb0171b5beb4528a&with_genres=${id}`)
                        .then(res => {
                            res.data.results.forEach(element => {
                                let gene = []
                                element.genre_ids.forEach(element => {
                                    gene.push(genero.genres.filter(g => g.id === element)[0].name)
                                });
                                element.genre_ids = gene;
                            });

                            setID(res.data.results[Math.floor(Math.random() * res.data.results.length)]); setPesquisa(res.data)
                        }
                        )
                }
                )
        }
        else {
            axios.get("https://api.themoviedb.org/3/genre/movie/list?api_key=6360c588c1879ed5fb0171b5beb4528a&language=pt-BR")
                .then(genero => {
                    genero = genero.data;
                    axios.get(`https://api.themoviedb.org/3/search/movie/?api_key=6360c588c1879ed5fb0171b5beb4528a&language=pt-BR&page=1&include_adult=true&query=${input.current.value}`)
                        .then(res => {
                            res.data.results.forEach(element => {
                                let gene = []
                                element.genre_ids.forEach(element => {
                                    gene.push(genero.genres.filter(g => g.id === element)[0].name)
                                });
                                element.genre_ids = gene;
                            });
                            setID(res.data.results[Math.floor(Math.random() * res.data.results.length)]); setPesquisa(res.data)
                        }
                        )
                }
                )
        }
    }



    return (
        <button className={"botao " + selecao} onClick={() => editarPesquisa(id)} type="" > {label}</button >
    );
}

export default Botao;