import { SET_UMOWY, ADD_UMOWA, SET_ALL_USER_UMOWY } from '../actions/types'


const initData = {
    umowy:[]
}

export default (state = initData,action) =>{
    switch(action.type){
        case SET_UMOWY:
            return {
                ...state,
                umowy:action.payload
            }
        case SET_ALL_USER_UMOWY:
            return {
                ...state,
                umowy:action.payload
            }
        case ADD_UMOWA:
            return{
                ...state
            }
        default:
            return {
                ...state
            }
    }
}