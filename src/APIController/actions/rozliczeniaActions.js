import { SET_IS_ROZLICZ_SHOW, SET_ROZLICZENIA, SET_ALL_USER_ROZLICZENIA, HANDLE_MODIFY_ROZLICZENIA } from '../../APIController/actions/types'
import  axios  from 'axios'

const setIsRozliczShow = () => dispatch =>{
    return
}

const setRozliczenia = () => dispatch =>{
    axios.get('http://localhost:5000/rozliczenia')
    .then(res => {
        dispatch({
            type:SET_ROZLICZENIA,
            payload:JSON.parse(res.data)
        })
    })
    .catch(err => {if(err) throw err})
}

const setAllUserRozliczenia = (id) => dispatch => {
    axios.get('http://localhost:5000/rozliczenia/' + id)
    .then(res => {
        dispatch({
            type:SET_ALL_USER_ROZLICZENIA,
            payload:JSON.parse(res.data)
        })
    })
    .catch(err => {if(err) throw err})
}

export const rozliczeniaActions = {
    setIsRozliczShow,
    setRozliczenia,
    setAllUserRozliczenia
}