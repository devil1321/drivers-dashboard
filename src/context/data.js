import React,{ createContext, useEffect, useState } from 'react'


export const DataContext = createContext({
    users:[],
    faktury:[],
    rozliczenia:[],
    umowy:[],
    setUsers:()=>{},
    setFaktury:()=>{},
    setRozliczenia:()=>{},
    setUmowy:()=>{}
})


export const DataProvider = ({children}) =>{


    return(
        <DataContext.Provider value={{
              users,
              faktury,
              rozliczenia,
              umowy,
              setUsers,
              setFaktury,
              setRozliczenia,
              setUmowy
        }}>
            {children}
        </DataContext.Provider>
    )
}