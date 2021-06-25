import { SET_USER, SET_USER_BY_ID, SET_USERS,FILTER_USERS_BY_ID,REGISTER_USER,HANDLE_DELETE_USER,LOGIN_USER, MODIFY_USER,HANDLE_ACTIVE_USER,MODIFY_PROFILE,HANDLE_CHANGE_USER, HANDLE_USER, HANDLE_SHOW_USER, HANDLE_SHOW_ALL_USERS } from '../actions/types'
import axios from 'axios'
const initData = {
    user:{},
    users:[],
    loggedUser:{}
}

export default (state = initData,action)=>{
        switch(action.type){
            case SET_USER: 
                return{
                    ...state,
                    user:action.payload,
                    loggedUser:action.payload
                }
            case SET_USER_BY_ID: 
                return{
                    ...state,
                    user:action.payload
                }
            case REGISTER_USER:
                return {
                    ...state
                }
            case LOGIN_USER:
                return{
                    ...state,
                    loggedUser:action.payload,
                    user:action.payload
                }
            case MODIFY_USER:
                return {
                    ...state,
                    user:action.payload
                }
            case HANDLE_ACTIVE_USER:
                return {
                    ...state
                }
            case HANDLE_DELETE_USER:
                return{
                    ...state
                }
            case MODIFY_PROFILE:
                return {
                    ...state,
                    user:action.payload,
                    loggedUser:action.payload
                }
            case HANDLE_CHANGE_USER:
                return {
                    ...state,
                    user:action.payload,
                    loggedUser:action.payload
                }
            case SET_USERS: 
                return{
                    ...state,
                    users:action.payload
                }
            case HANDLE_USER: 
                return{
                    ...state,
                    user:action.payload
                }
            case FILTER_USERS_BY_ID:
                return{
                    ...state,
                    users:action.payload
                }
            case HANDLE_SHOW_USER:
                return{
                    ...state,
                    users:[...action.payload]
                }
            case HANDLE_SHOW_ALL_USERS:
                return{
                    ...state,
                    users:action.payload
                }
            default:
                return {
                    ...state
                }
        }
}