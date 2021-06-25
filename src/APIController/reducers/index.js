import { combineReducers } from 'redux'

import userReducer from '../reducers/userReducer'
import fakturyReducer from '../reducers/fakturyReducer'
import umowyReducer from '../reducers/umowyReducer'
import rozliczeniaReducer from '../reducers/rozliczeniaReducer'

export default combineReducers({
    users:userReducer,
    faktury:fakturyReducer,
    umowy:umowyReducer,
    rozliczenia:rozliczeniaReducer
})