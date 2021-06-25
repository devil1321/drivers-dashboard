
import React,{useContext,useEffect,useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { Breadcrumb } from '@themesberg/react-bootstrap';
import {kierowcy} from '../../data/kierowcy'
import { PageTrafficTable, PageKierowcyTableView } from "../../components/Tables";

import { connect } from 'react-redux'
import { userActions } from '../../APIController/actions/userActions'
import { umowyActions } from '../../APIController/actions/umowyActions'
import { fakturyActions } from '../../APIController/actions/fakturyActions'
import { rozliczeniaActions } from '../../APIController/actions/rozliczeniaActions'


const KierowcyMainTable = (props) => {

  const { user, users, loggedUser } = props.users
  const { umowy } = props.umowy
  const { setUser, setUsers, setUmowy, showAllUsers } = props
  const [isSet, setIsSet] = useState(false)
  useEffect(()=>{ 
    if(!isSet){
      setUser()
      setUsers()
      setUmowy()
      setIsSet(true)
    }
  },[isSet])
  return (
    <>
      <div className="d-xl-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
        <div className="d-block mb-4 mb-xl-0">
          <Breadcrumb className="d-none d-md-inline-block" listProps={{ className: "breadcrumb-dark breadcrumb-transparent" }}>
            <Breadcrumb.Item><FontAwesomeIcon icon={faHome} /></Breadcrumb.Item>
            <Breadcrumb.Item>Tables</Breadcrumb.Item>
            <Breadcrumb.Item active>Bootstrap tables</Breadcrumb.Item>
          </Breadcrumb>
          <h4>Bootstrap tables</h4>
          <p className="mb-0">
            Dozens of reusable components built to provide buttons, alerts, popovers, and more.
          </p>
        </div>
      </div>
        <PageKierowcyTableView {...props}/>
    </>
  );
};

const mapStateToProps = state => ({
  ...state
})
const actions = Object.assign({}, umowyActions,fakturyActions,userActions,rozliczeniaActions)


export default connect(mapStateToProps,actions)(KierowcyMainTable)
