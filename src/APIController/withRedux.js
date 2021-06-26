import { connect } from 'react-redux'
import { userActions } from './actions/userActions'
import { umowyActions } from './actions/umowyActions'
import { fakturyActions } from './actions/fakturyActions'
import { rozliczeniaActions } from './actions/rozliczeniaActions'

const mapStateToProps = state => ({
    ...state
  })
  
const actions = Object.assign({}, umowyActions,fakturyActions,userActions,rozliczeniaActions)
  
export const withRedux = connect(mapStateToProps,actions)


  