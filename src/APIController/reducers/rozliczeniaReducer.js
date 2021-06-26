import { SET_IS_ROZLICZ_SHOW, SET_ROZLICZENIA,SET_ROZLICZENIE,SAVE_ROZLICZENIE,HANDLE_CHANGE_ROZLICZENIE,SET_ALL_USER_ROZLICZENIA, HANDLE_MODIFY_ROZLICZENIA } from '../actions/types'

const initData = {
    rozliczenia:[],
    rozliczenie:{},
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
            let rozliczenia  = action.payload
            if(action.payload.length > 0){
                rozliczenia = [...action.payload]
            }else{
                rozliczenia = []
            }
            return {
                ...state,
                rozliczenia:rozliczenia
             
            }
        case SET_ROZLICZENIE:
            return {
                ...state,
                rozliczenie:action.payload
            }
        case SET_ALL_USER_ROZLICZENIA:
            return{
                ...state,
                rozliczenia:action.payload
            }
        case HANDLE_CHANGE_ROZLICZENIE:
            return{
                ...state,
                rozliczenie:action.payload
            }
        case HANDLE_MODIFY_ROZLICZENIA:
            return {
                ...state,
                rozliczenia:action.payload
            }
        case SAVE_ROZLICZENIE:
            return {
                ...state
            }
        default:
            return {
                ...state
            }
    }
}