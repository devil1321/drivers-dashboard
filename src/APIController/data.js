import React,{ createContext, useEffect, useState } from 'react'
import axios from 'axios'

export const DataContext = createContext({
    user:{},
    users:[],
    faktury:[],
    rozliczenia:[],
    umowy:[],
    loggedUser:{},
    handleUser:()=>{},
    setLoggedUser:()=>{},
    handleShowUser:()=>{},
    handleShowAllUsers:()=>{},
    handleModify:()=>{},
    setUser:()=>{},
    setUsers:()=>{},
    setFaktury:()=>{},
    setRozliczenia:()=>{},
    setUmowy:()=>{}
})


export const DataProvider = ({children}) =>{
    const [loggedUser,setLoggedUser] = useState({})
    const [user,setUser] = useState({})
    const [users,setUsers] = useState([])
    const [faktury,setFaktury] = useState([])
    const [rozliczenia,setRozliczenia] = useState([])
    const [umowy,setUmowy] = useState([])
    useEffect(()=>{

        if(users.length === 0){
            // axios.get('http://localhost:5000/users')
            // .then(res => setUsers(res.data))
            // .catch(err => {if(err) throw err})
        }

        // let loggedUser = localStorage.getItem('User')
        // if(loggedUser !== null && Object.keys(user).length === 0){
        //     loggedUser = JSON.parse(loggedUser)
        //     setLoggedUser(loggedUser)
        //     setUser(loggedUser)
        // }

        if(umowy.length === 0){
        //    axios.get('http://localhost:5000/umowy')
        //     .then(res => setUmowy(res.data))
        //     .catch(err => {if(err) throw err})
        }
        if(faktury.length === 0){
            // axios.get('http://localhost:5000/faktury')
            //  .then(res => setFaktury(res.data))
            //  .catch(err => {if(err) throw err})
         }
        

    },[users,user,loggedUser])

    const handleModify = (id,setIsRozliczShow) => {
        // axios.get('http://localhost:5000/users/user/' + id)
        //     .then(res => setUser(res.data))
        //     .catch(err => console.log(err))
        
        // setIsRozliczShow(true)
    }
    const handleUser = (id) =>{
        // axios.get('http://localhost:5000/users/user/' + id)
        // .then(res => setUsers(res.data))
        // .catch(err => {if(err) throw err})
    }
    const handleShowUser = (id) =>{
        // axios.get('http://localhost:5000/users/user/' + id)
        // .then(res => setUsers([res.data]))
        // .catch(err => {if(err) throw err})
    }

    const handleShowAllUsers = () =>{
        // axios.get('http://localhost:5000/users')
        // .then(res => setUsers(res.data))
        // .catch(err => {if(err) throw err})
    }

    return(
        <DataContext.Provider value={{
              users,
              faktury,
              rozliczenia,
              umowy,
              user,
              loggedUser,
              setLoggedUser,
              handleUser,
              handleShowUser,
              handleShowAllUsers,
              handleModify,
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