import React,{ createContext, useEffect, useState } from 'react'
import axios from 'axios'

export const DataContext = createContext({
    user:{},
    users:[],
    faktury:[],
    rozliczenia:[],
    umowy:[],
    setUser:()=>{},
    setUsers:()=>{},
    setFaktury:()=>{},
    setRozliczenia:()=>{},
    setUmowy:()=>{}
})


export const DataProvider = ({children}) =>{
  
    const [user,setUser] = useState({})
    const [users,setUsers] = useState([])
    const [faktury,setFaktury] = useState([])
    const [rozliczenia,setRozliczenia] = useState([])
    const [umowy,setUmowy] = useState([])
    useEffect(()=>{
        if(users.length === 0){
            axios.get('http://localhost:5000/users')
            .then(res => setUsers(res.data))
            .catch(err => {if(err) throw err})
        }

        let loggedUser = localStorage.getItem('User')
        if(loggedUser !== null && Object.keys(user).length === 0){
            loggedUser = JSON.parse(loggedUser)
            setUser(loggedUser)
        }
       
    
        
    },[users,user])



    return(
        <DataContext.Provider value={{
              users,
              faktury,
              rozliczenia,
              umowy,
              user,
              setUser,
              setUsers,
              setFaktury,
              setRozliczenia,
              setUmowy
        }}>
            {children}
        </DataContext.Provider>
    )
}