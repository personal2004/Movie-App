import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { movieApi } from "../../common/apis/movieApi";
import { APIKEY } from '../../common/apis/MovieApiKey';

export const fetchAsyncMovies = createAsyncThunk("movies/fetchAyncMovies",
    async (term) => {
        const response = await movieApi
            .get(`?&apikey=${APIKEY}&s=${term}&type=movie`);
        return response.data;
    });

export const fetchAsynShows = createAsyncThunk("shows/fetchAyncShows",
    async (term) => {
        const response = await movieApi.get(`?&apikey=${APIKEY}&s=${term}&type=series`);
        return response.data;
    });

export const fetchMovieorShwDetails = createAsyncThunk(" selectedmovieorshowdwtail/fetchMovieorShowDetails",
    async (id) => {
        const response = await movieApi.get(`?&apikey=${APIKEY}&i=${id}&Plot=full`);
        return response.data;
    });

const initialState = {
    movies: {},
    shows: {},
    selectedmovieorshowdwtail: {},
    favMovies: [],
};

const movieSlice = createSlice({
    name: "movie",
    initialState,
    reducers: {

        addToFavourites: (state, { payload }) => {
            // console.log('i',initialState.favMovies);
            return {
                ...state,
                favMovies: [
                    ...state.favMovies,
                    payload
                ]
            }
        },

        removefromfavourite: (state, { payload }) => {
        console.log('filter ',state.favMovies.filter(item => item.id !== payload));
            return {
                ...state,
                favMovies: state.favMovies.filter(item => item.imdbID !== payload)
            }

        }

    },

    extraReducers: (builder) => {
        builder
            .addCase(fetchAsyncMovies.pending, () => {
                console.log("pending");
            })
            .addCase(fetchAsyncMovies.fulfilled, (state, { payload }) => {
                console.log("fetched sucessfully");

                return {
                    ...state,
                    movies: payload
                }
            })
            .addCase(fetchAsyncMovies.rejected, () => {
                console.log("rejected");
            })
            .addCase(fetchAsynShows.fulfilled, (state, { payload }) => {
                console.log("fetchd sucessfully");
                return {
                    ...state,
                    shows: payload
                }
            })

            .addCase(fetchMovieorShwDetails.fulfilled, (state, { payload }) => {
                return {
                    ...state,
                    selectedmovieorshowdwtail: payload
                }
            })

    }

})

export const { addToFavourites, removefromfavourite } = movieSlice.actions;
export const getAllMovies = (state) => state.movie.movies;
export const getAllShows = (state) => state.movie.shows;
export const getSelectedMoviesorShows = (state) => state.movie.selectedmovieorshowdwtail;
export const getfavorite = (state) => state.movie.favMovies;
export default movieSlice.reducer;