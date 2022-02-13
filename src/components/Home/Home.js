import React, { useEffect } from 'react'
import MovieListing from '../MovieListing/MovieListing'
import { useDispatch } from 'react-redux'
// Import removeSelectedMovie From Movie Slice
import { fetchAsyncMovies, fetchAsyncSeries, removeSelectedMovie } from '../../features/movies/movieSlices' // Import This

function Home() {
    const dispatch = useDispatch()

    const movieText = 'Harry'
    const seriesText = 'Horror'
    useEffect(() => {
        dispatch(fetchAsyncMovies(movieText))
        dispatch(fetchAsyncSeries(seriesText))
        // Dispatch removeSelectedMovie
        dispatch(removeSelectedMovie())
    }, [dispatch])

    return (
        <div>
            <MovieListing />
        </div>
    )
}

export default Home
