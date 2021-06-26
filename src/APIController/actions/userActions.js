import { SET_USER,SET_SELECTED_USER,SET_USER_BY_ID,MODIFY_USER,MODIFY_PROFILE,FILTER_USERS_BY_ID,HANDLE_DELETE_USER,HANDLE_ACTIVE_USER,HANDLE_CHANGE_USER,REGISTER_USER,LOGIN_USER, SET_USERS, SET_LOGGED_USER, HANDLE_USER,SET_IS_ROZLICZ_SHOW, HANDLE_SHOW_USER, HANDLE_SHOW_ALL_USERS } from '../../APIController/actions/types'
import axios from 'axios'
import store from '../store'

const setSelectedUser = (user) => dispatch =>{
    dispatch({
        type:SET_SELECTED_USER,
        payload:user
    })
}

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

const handleChangeUser = (e) => dispatch =>{
    const oldUser = store.getState().users.loggedUser; 
    const newVal = oldUser[e.target.name] = e.target.value
    let newUser = {...oldUser,newVal}
    dispatch({
        type:HANDLE_CHANGE_USER,
        payload:newUser
    })
}

const handleActiveUser = (id,isActive) => dispatch =>{
    if(isActive){
        isActive = false
      }else{
        isActive = true
      }
      const user = {
        isActive
      }
      axios.post('http://localhost:5000/users/state/' + id ,user)
        .then(res => {
          // setUsers([])
          dispatch({
              type:HANDLE_ACTIVE_USER
          })
          window.location.reload()
        })
        .catch(err => {if(err) throw err})

    axios.get('http://localhost:5000/users')
        .then(res => {
            dispatch({
                type:SET_USERS,
                payload:res.data
            })
        })
        .catch(err => {if(err) throw err})
        
}


const handleDeleteUser = (id) => dispatch =>{
    console.log('deleted')
    axios.delete('http://localhost:5000/users/delete/' + id)
    .then(res => {
      // setUsers([])
      dispatch({
          type:HANDLE_DELETE_USER
      })
      window.location.reload()
    })
    .catch(err => {if(err) throw err})

    axios.get('http://localhost:5000/users')
        .then(res => {
            dispatch({
                type:SET_USERS,
                payload:res.data
            })
        })
        .catch(err => {if(err) throw err})
}

const filterUsersById = (id) => dispatch =>{
    axios.get('http://localhost:5000/users/user/' + id)
        .then(res => {
            dispatch({
                type:FILTER_USERS_BY_ID,
                payload:[res.data]
            })
        })
        .catch(err => console.log(err))
   
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
    handleChangeUser,
    showUser,
    setSelectedUser,
    showAllUsers,
    handleActiveUser,
    handleDeleteUser,
    filterUsersById
}