import React from 'react'
import './MovieCard.scss'
import { Link } from 'react-router-dom'

function MovieCard({ data }) {
    return (
        <Link to={`/movie/${data.imdbID}`} target='_blank'>
            <div className='card-item'>
                <div className='card-inner'>
                    <div className='card-top'>
                        <img src={data.Poster} alt={data.Title} />
                    </div>
                    <div className='card-body'>
                        <h3>{data.Title}</h3>
                    </div>
                </div>
                <p className='year'>{data.Year.length !== 5 ? data.Year : data.Year.replace('–', '')}</p>
            </div>
        </Link>
    )
}

export default MovieCard
