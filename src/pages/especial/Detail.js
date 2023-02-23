
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import './Detail.css'

function Detail(){
     //Nome do paramito 
     const { id } = useParams()
    //useState({Refere-se a um obijeto})
    const [movie, setMovie] = useState({})
    const image_path = 'https://image.tmdb.org/t/p/w500'
   

    useEffect(() => {
        //ESPORTAMENTO DA API
        fetch(`https://api.themoviedb.org/3/movie/${ id }?api_key=539de1633384724c07942e007e258bff&language=en-US&page=1`)
            .then(response => response.json())
            .then(data =>{
                const {title, overview,poster_path, release_data} = data
                

                const movie = {
                    id, 
                    title,
                    sinopse: overview,
                    image: `${image_path}${poster_path}`,
                    releaseData: release_data
                }
                setMovie(movie)
            }
            )
            
    }, 
    /* Sempre que eu trocar de filme o id também troca e tudo junto */
    [id])

    return(
        <div>

            <div className="imagem">
                <img className="w-sm-25 img-thumbnail  float-end "
                src={movie.image} alt={movie.title}/>
                <div className="sinopse">
                    <h1 className="title_secundario">
                        {movie.title}
                    </h1>
                    <span >
                        {movie.sinopse}
                    </span>
                </div>

            </div>
            <div className="button">
                <Link to='/'><button>Voltar</button></Link>
            </div>

        </div>
    )
}

export default Detail


/**
 *  <span>
                    {movie.releaseData}
                </span>
 */

                /**
                 *   <img className="w-sm-25
                 * 
                 */