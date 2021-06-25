import { SET_UMOWY,SET_ALL_USER_UMOWY,ADD_UMOWA } from '../../APIController/actions/types'
import axios from 'axios'

const setUmowy = () => dispatch =>{
    axios.get('http://localhost:5000/umowy')
    .then(res => {
        dispatch({
            type:SET_UMOWY,
            payload:res.data
        })
    })
    .catch(err => {if(err) throw err})
}

const setAllUserUmowy = (id) => dispatch =>{
    axios.get('http://localhost:5000/umowy/' + id)
    .then(res => {
        dispatch({
            type:SET_ALL_USER_UMOWY,
            payload:res.data
        })
    })
    .catch(err => {if(err) throw err})
}

const addUmowa = (umowa) => dispatch =>{
    axios.post('http://localhost:5000/umowy/umowa',umowa,{
        headers: {
          'Content-Type': 'multipart/form-data'
        }})
          .then(res => {
            console.log(res.data)
            window.location.reload()
          })
          .catch(err => {if(err) throw err})
    dispatch({
        type:ADD_UMOWA
    })
}

export const umowyActions = {
    setUmowy,
    setAllUserUmowy,
    addUmowa
}