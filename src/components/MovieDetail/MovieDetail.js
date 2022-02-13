import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { fetchAsyncMovieOrSeriesDetail } from '../../features/movies/movieSlices.js'
import { getSelectedMovie } from '../../features/movies/movieSlices'
import { useDispatch, useSelector } from 'react-redux'
import './MovieDetail.scss'

function MovieDetail() {
    const { id } = useParams()

    const dispatch = useDispatch()
    const selectedMovie = useSelector(getSelectedMovie)
    const {
        Title,
        imdbRating,
        imdbVotes,
        Runtime,
        Year,
        Poster,
        Plot,
        Director,
        Actors,
        Genre,
        Language
    } = selectedMovie;
    useEffect(() => {
        dispatch(fetchAsyncMovieOrSeriesDetail(id))

    }, [dispatch, id])

    return (
        <div className='movie-details'>
            {
                Object.keys(selectedMovie).length ? (
                    <>
                        <div className='section-left'>
                            <h2 className='movie-title'>{Title}</h2>
                            <ul className='movie-data-list'>
                                <li>Rating <i className='fa fa-star'></i>: {imdbRating}</li>
                                <li>Votes <i className="fas fa-concierge-bell"></i>: {imdbVotes}</li>
                                <li>Runtime<i className="far fa-clock"></i>: {Runtime}</li>
                                <li>Year<i className="far fa-calendar-alt"></i>: {Year && (Year.length !== 5 ? (Year) : (Year.replace('–', '')))}</li>
                            </ul>
                            <p>
                                {Plot}
                            </p>
                            <div className='movie-data-info'>
                                <ul>
                                    <li>Director : <span>{Director}</span></li>
                                    <li>Actors : <span>{Actors}</span></li>
                                    <li>Type : <span>{Genre}</span></li>
                                    <li>Languages : <span>{Language}</span></li>
                                </ul>
                            </div>
                        </div>
                        <div className='section-right'>
                            <img src={Poster} alt={Title} />
                        </div>
                    </>
                ) : (<div className='loading'>Loading...</div>)
            }
        </div>
    )
}

export default MovieDetail
