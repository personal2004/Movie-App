import { configureStore } from "@reduxjs/toolkit";
import moviesreducer from "./movies/movieSlice"

export const store=configureStore({reducer:{movies:moviesreducer}},window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())