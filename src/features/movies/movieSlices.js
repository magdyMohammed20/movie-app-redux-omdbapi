import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieApi from '../../common/apis/MovieAPI'
import { key } from '../../common/apis/MovieAPIKey'

export const fetchAsyncMovies = createAsyncThunk("movieSlice/moviesFetchAsync", async (term) => {
    const movies = await movieApi.get(`?apiKey=${key}&s=${term}&type=movie`);
    return movies.data;
})

export const fetchAsyncSeries = createAsyncThunk("movieSlice/seriesFetchAsync", async (term) => {
    const series = await movieApi.get(`?apiKey=${key}&s=${term}&type=series`);
    return series.data;
})

export const fetchAsyncMovieOrSeriesDetail = createAsyncThunk("movieSlice/MovieOrSeriesFetchAsync", async (id) => {
    const selectedMovie = await movieApi.get(`?apiKey=${key}&i=${id}&Plot=full`);
    return selectedMovie.data;
})

const initState = {
    movies: [],
    series: [],
    selectedMovie: {}
}


const movieSlice = createSlice({
    name: 'movieSlice',
    initialState: initState,
    reducers: {
        removeSelectedMovie: (state) => {
            state.selectedMovie = {}
        }
    },
    extraReducers: {
        [fetchAsyncMovies.pending]: () => {
            console.log('Pending')
        },
        [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
            console.log('Fetched Success');
            return { ...state, movies: payload }
        },
        [fetchAsyncMovies.rejected]: () => {
            console.log('Rejected')
        },
        [fetchAsyncSeries.fulfilled]: (state, { payload }) => {
            console.log('Series Success');
            return { ...state, series: payload }
        },
        [fetchAsyncMovieOrSeriesDetail.fulfilled]: (state, { payload }) => {
            console.log('Fetch Detail Success')
            return { ...state, selectedMovie: payload }
        }
    }
})

export default movieSlice.reducer
export const { removeSelectedMovie } = movieSlice.actions
export const getAllMovies = state => state.movies.movies
export const getAllSeries = state => state.movies.series
export const getSelectedMovie = state => state.movies.selectedMovie // 4- Add This Export