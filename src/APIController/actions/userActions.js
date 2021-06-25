import { SET_USER,SET_USER_BY_ID,MODIFY_USER,MODIFY_PROFILE,REGISTER_USER,LOGIN_USER, SET_USERS, SET_LOGGED_USER, HANDLE_USER,SET_IS_ROZLICZ_SHOW, HANDLE_SHOW_USER, HANDLE_SHOW_ALL_USERS } from '../../APIController/actions/types'
import axios from 'axios'
import store from '../store'

const setUserById = (id) => dispatch =>{
    axios.get('http://localhost:5000/users' + id)
    .then(res => {
        dispatch({
            type:SET_USER_BY_ID,
            payload:JSON.parse(res.data)
        })
    })
    .catch(err => {if(err) throw err})
}

const setUser = () => dispatch =>{
    const user = localStorage.getItem('User')
    if(user !== null){
        dispatch({
            type:SET_USER,
            payload:JSON.parse(user)
        })
    }
}

const registerUser = (formData) => dispatch =>{
    axios.post('http://localhost:5000/users/register',formData)
        .then(res => console.log('registered'))
        .catch(err => {if(err) throw err})
    dispatch({
        type:REGISTER_USER
    })
}

const loginUser = (formData) => dispatch =>{
    axios.post('http://localhost:5000/users/login',formData)
    .then(res => {
      localStorage.setItem('User',JSON.stringify(res.data))
      dispatch({
          type:LOGIN_USER,
          payload:JSON.parse(res.data)
      })
    })
    .catch(err => {if(err) throw err})
    

}

const setUsers = () => dispatch =>{
    axios.get('http://localhost:5000/users')
        .then(res => {
            dispatch({
                type:SET_USERS,
                payload:res.data
            })
        })
        .catch(err => {if(err) throw err})
}



const modifyUser = (id) => dispatch =>{
    axios.get('http://localhost:5000/users/user/' + id)
    .then(res => {
        dispatch({
            type:MODIFY_USER,
            payload:JSON.parse(res.data)
        })
    })
    .catch(err => console.log(err))
    dispatch({
        type:SET_IS_ROZLICZ_SHOW,
        payload:true
    })
}

const modifyProfile = (_id ,user) => dispatch => {
    axios.post('http://localhost:5000/users/update/' + _id ,user)
    .then(res => {
      console.log('added')
      localStorage.clear()
      localStorage.setItem('User',JSON.stringify(res.data))
      dispatch({
          type:MODIFY_PROFILE,
          payload:res.data
      })
      window.location.reload()
    })
    .catch(err => {if(err) throw err})
}

const handleUser = (id) => dispatch =>{
    axios.get('http://localhost:5000/users/user/' + id)
    .then(res => {
        dispatch({
            type:HANDLE_USER,
            payload:res.data
        })
    })
    .catch(err => {if(err) throw err})
}

const showUser = (id) => dispatch =>{
    axios.get('http://localhost:5000/users/user/' + id)
    .then(res => {
        dispatch({
            type:HANDLE_SHOW_USER,
            payload:[JSON.parse(res.data)]
        })
    })
    .catch(err => {if(err) throw err})
}

const showAllUsers = () => dispatch =>{
    axios.get('http://localhost:5000/users')
    .then(res => {
        dispatch({
            type:HANDLE_SHOW_ALL_USERS,
            payload:res.data
        })
    })
    .catch(err => {if(err) throw err})
}

export const userActions = {
    setUser,
    setUserById,
    setUsers,
    loginUser,
    registerUser,
    modifyUser,
    modifyProfile,
    handleUser,
    showUser,
    showAllUsers
}