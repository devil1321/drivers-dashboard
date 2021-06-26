import { SET_IS_ROZLICZ_SHOW,SAVE_ROZLICZENIE,SET_ROZLICZENIE, SET_ROZLICZENIA,HANDLE_CHANGE_ROZLICZENIE, SET_ALL_USER_ROZLICZENIA, HANDLE_MODIFY_ROZLICZENIA } from '../../APIController/actions/types'
import  axios  from 'axios'
import store from '../store'

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

const setRozliczenie = () => dispatch =>{
    let rozliczenie = store.getState().rozliczenia.rozliczenie; 
    let selectedUser = store.getState().users.selectedUser; 
    rozliczenie.userId = selectedUser._id
    rozliczenie.imie = selectedUser.imie
    rozliczenie.nazwisko = selectedUser.nazwisko
    rozliczenie.email = selectedUser.email
    dispatch({
        type:SET_ROZLICZENIE,
        payload:rozliczenie
    })

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

const handleChangeRozliczenie = (e) => dispatch =>{
    const oldRozliczenie = store.getState().rozliczenia.rozliczenie; 
    oldRozliczenie[e.target.name] = e.target.value
    let newRozliczenie = {...oldRozliczenie}
    console.log(newRozliczenie)
    dispatch({
        type:HANDLE_CHANGE_ROZLICZENIE,
        payload:newRozliczenie
    })
}

const saveRozliczenie = (id) => dispatch =>{
    const rozliczenie = store.getState().rozliczenia.rozliczenie; 
    let userId = {
        userId:id
    }
    const formData = Object.assign({},userId,rozliczenie)
    axios.post('http://localhost:5000/rozliczenia/rozliczenie',formData)
        .then(res => console.log('rozliczenie added'))
        .catch(err => console.log(err))
    dispatch({
        type:SAVE_ROZLICZENIE
    })
}

export const rozliczeniaActions = {
    setIsRozliczShow,
    setRozliczenia,
    setAllUserRozliczenia,
    handleChangeRozliczenie,
    saveRozliczenie,
    setRozliczenie
}