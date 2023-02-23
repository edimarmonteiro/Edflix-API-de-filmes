import { Container } from './styles'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'


function Home(){
    /*Chamando novos filmes atravez de array */
    const [movies, setMovies] = useState([])
    const image_path = 'https://image.tmdb.org/t/p/w500'

    useEffect(() => {
        //ESPORTAMENTO DA API
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=539de1633384724c07942e007e258bff&language=en-US&page=1')
            .then(response => response.json())
            .then(data => setMovies(data.results))
            
    }, [])

    return(
        <Container>

            <h1><strong>E</strong>DFLIX</h1>

            
            <ul >
                
                {movies.map(movie => {
                    return(
                    <li key={movie.id}>

                    <Link to={`/detail/${movie.id}`}> 
                        <img className='imagem_principal' src={`${image_path}${movie.poster_path}`} alt={movie.title}/>      
                    </Link>    
                    
                    
                    <span>{movie.title}</span>
                    </li>
                    )
                })}

            </ul>
        </Container>
    )
}

export default Home