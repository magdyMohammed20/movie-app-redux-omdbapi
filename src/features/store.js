import { configureStore } from "@reduxjs/toolkit";
import movieReducer from './movies/movieSlices'

const store = configureStore({
    reducer: {
        movies: movieReducer
    }
})

export default store