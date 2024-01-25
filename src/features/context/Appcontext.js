import React, { useState } from 'react'
import { createContext } from 'react';

export const appcontext=createContext(null);

export const Appcontextprovide=({children})=>{
    const [favourite,setfavourite]=useState([]);
    
    const addtofavourite=(showormovie)=>{
       const oldfavourite=[...favourite];
       const newfavourite=oldfavourite.concat(showormovie);
       console.log(newfavourite);
       setfavourite(newfavourite);
    };

    const removefromFavourite=(id)=>{
        const oldfavourite=[...favourite];
        const newfavourite=oldfavourite.filter((showormovie)=>showormovie.id!==id);
        console.log(newfavourite);
        setfavourite(newfavourite);
    };
    return(
        <appcontext.Provider value={ {favourite,addtofavourite,removefromFavourite}}>
            {children}
        </appcontext.Provider>
    );
}
