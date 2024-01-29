import React, { useState } from 'react'
import { createContext } from 'react';

export const appcontext=createContext(null);

export const Appcontextprovide=({children})=>{
    const [favourite,setFavourite]=useState([]);
    
    const addtofavourite = (showOrMovie) => {
        setFavourite((prevFavourites) => {
          // Check if the movie is already in the favourites
          const isAlreadyAdded = prevFavourites.some((item) => item.id === showOrMovie.id);
    
          if (!isAlreadyAdded) {
            return [...prevFavourites, showOrMovie];
          }
    
          return prevFavourites;
        });
      };
    
      const removefromFavourite = (id) => {
        setFavourite((prevFavourites) => prevFavourites.filter((item) => item.id !== id));
      };
    
    return(
        <appcontext.Provider value={{favourite,addtofavourite,removefromFavourite}}>
            {children}
        </appcontext.Provider>
    );
}
