import React from 'react'
import { useSelector } from 'react-redux'
import { getAllMovies, getAllSeries } from '../../features/movies/movieSlices'
import MovieCard from "../MovieCard/MovieCard"
import './MovieListing.scss'
import Slider from 'react-slick' // 1- Import Slider Here
import settings from '../../common/SliderSettings'

function MovieListing() {

    const movies = useSelector(getAllMovies)
    const series = useSelector(getAllSeries)

    const renderMovies = movies.Response ?
        (
            movies.Search.map(movie => <MovieCard key={movie.imdbID} data={movie} />)
        ) : (
            <div className='movie-error'>Loading...</div>
        )

    const renderSeries = series.Response ?
        (
            series.Search.map(movie => <MovieCard key={movie.imdbID} data={movie} />)
        ) : (
            <div className='movie-error'>Loading...</div>
        )

    // 3- Wrap 'renderMovies' With Slider Here
    return (
        <div className='movie-wrapper'>
            <div className='movie-list'>
                <h2>Movies</h2>
                <div>
                    <Slider {...settings}>
                        {renderMovies}
                    </Slider>
                </div>
                <h2>Series</h2>
                <div>
                    <Slider {...settings}>
                        {renderSeries}
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default MovieListing
