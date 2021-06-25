import { SET_IS_ROZLICZ_SHOW, SET_ROZLICZENIA,SET_ALL_USER_ROZLICZENIA, HANDLE_MODIFY_ROZLICZENIA } from '../actions/types'

const initData = {
    rozliczenia:[],
    isRozliczShow:false
}

export default (state = initData,action) =>{
    switch(action.type){
        case SET_IS_ROZLICZ_SHOW:
            return {
                ...state,
                isRozliczShow:action.payload
            }
        case SET_ROZLICZENIA:
            return {
                ...state,
                rozliczenia:action.payload
            }
        case SET_ALL_USER_ROZLICZENIA:
            return{
                ...state,
                rozliczenia:action.payload
            }
        case HANDLE_MODIFY_ROZLICZENIA:
            return {
                ...state,
                rozliczenia:action.payload
            }
        default:
            return {
                ...state
            }
    }
}