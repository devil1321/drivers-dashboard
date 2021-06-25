import { SET_USER, SET_USER_BY_ID, SET_USERS,REGISTER_USER,LOGIN_USER, MODIFY_USER,MODIFY_PROFILE, HANDLE_USER, HANDLE_SHOW_USER, HANDLE_SHOW_ALL_USERS } from '../actions/types'
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
            case MODIFY_PROFILE:
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