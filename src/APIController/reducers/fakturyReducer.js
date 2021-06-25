import { SET_FAKTURY, SET_ALL_USER_FAKTURY, ADD_FAKTURA,DELETE_FAKTURA } from '../actions/types'


const initData = {
    faktury:[]
}

export default (state = initData,action) =>{
    switch(action.type){
        case SET_FAKTURY:
            return {
                ...state,
                faktury:action.payload
            }
        case SET_ALL_USER_FAKTURY:
            return {
                ...state,
                faktury:action.payload
            }
        case ADD_FAKTURA:
            return {
               ...state
            }
        case DELETE_FAKTURA:
            return {
               ...state
            }
        default:
            return {
                ...state
            }
    }
}