import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { movieApi } from "../../common/apis/movieApi";
import { APIKEY } from '../../common/apis/MovieApiKey';

export const fetchAsyncMovies = createAsyncThunk("movies/fetchAyncMovies",
    async () => {
        const movieText = "Harry";
        const response = await movieApi
            .get(`?&apikey=${APIKEY}&s=${movieText}&type=movie`);
        return response.data;
    });

export const fetchAsynShows = createAsyncThunk("shows/fetchAyncShows",
    async () => {
        const ShowText = "percy jackson";
        const response = await movieApi.get(`?&apikey=${APIKEY}&s=${ShowText}&type=series`);
        return response.data;
    });
    
export const fetchMovieorShwDetails=createAsyncThunk(" selectedmovieorshowdwtail/fetchMovieorShowDetails",
   async (id) => {
    const response=await movieApi.get(`?&apikey=${APIKEY}&i=${id}&Plot=full`);
    return response.data;
   });

const initialState = {
    movies: {},
    shows: {},
    selectedmovieorshowdwtail:{},
};

const movieSlice = createSlice({
    name: "movie",
    initialState,
    reducers: {
        // addMovies: (state, { payload }) => {
        //     state.movies = payload;
        // },
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
            .addCase(fetchAsynShows.fulfilled,(state, { payload }) => {
                console.log("fetchd sucessfully");
                return{
                    ...state,
                    shows:payload
            }})

            .addCase(fetchMovieorShwDetails.fulfilled,(state,{payload})=>{
                return{
                    ...state,
                    selectedmovieorshowdwtail:payload
                }
            })
            
    }

})

export const { addMovies } = movieSlice.actions;
export const getAllMovies = (state) => state.movie.movies;
export const getAllShows = (state) => state.movie.shows;
export const getSelectedMoviesorShows=(state)=>state.movie.selectedmovieorshowdwtail;
export default movieSlice.reducer;