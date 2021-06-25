import { SET_FAKTURY,SET_ALL_USER_FAKTURY, ADD_FAKTURA } from '../../APIController/actions/types'
import axios from 'axios'

const setFaktury = () => dispatch =>{
    axios.get('http://localhost:5000/faktury')
    .then(res => {
        dispatch({
            type:SET_FAKTURY,
            payload:res.data
        })
    })
    .catch(err => {if(err) throw err})
} 
const setAllUserFaktury = (id) => dispatch =>{
    axios.get('http://localhost:5000/faktury/' + id)
    .then(res => {
        dispatch({
            type:SET_ALL_USER_FAKTURY,
            payload:res.data
        })
    })
    .catch(err => {if(err) throw err})
}

const addFaktura = (faktura) => dispatch =>{
    axios.post('http://localhost:5000/faktury/faktura',faktura,{
        headers: {
          'Content-Type': 'multipart/form-data'
        }})
        .then(res => {
            console.log(res.data)
            window.location.reload()
        })
        .catch(err => {if(err) throw err})
    dispatch({
        type:ADD_FAKTURA,
    })
}

export const fakturyActions = {
    setFaktury,
    setAllUserFaktury,
    addFaktura
}