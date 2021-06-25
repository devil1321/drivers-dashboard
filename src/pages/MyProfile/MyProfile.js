import React,{useState,useEffect,useContext} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBoxOpen, faCartArrowDown, faChartPie, faChevronDown, faClipboard, faCommentDots, faFileAlt, faPlus, faRocket, faStore } from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Button, Dropdown } from '@themesberg/react-bootstrap';
import { ChoosePhotoWidget, ProfileCardWidget } from "../../components/Widgets";
import { GeneralInfoForm } from "../../components/Forms";

import Profile3 from "../../assets/img/team/profile-picture-3.jpg";
import { profile } from "../../data/profile";
import axios from 'axios'

import {DataContext} from '../../APIController/data'


import { connect } from 'react-redux'
import { userActions } from '../../APIController/actions/userActions'
import { umowyActions } from '../../APIController/actions/umowyActions'
import { fakturyActions } from '../../APIController/actions/fakturyActions'
import { rozliczeniaActions } from '../../APIController/actions/rozliczeniaActions'



const MyProfile = (props) => {
  const { setUser } = props

  const [isSet,setIsSet] = useState(false)

  useEffect(()=>{
    setUser()
    setIsSet(true)
  },[isSet])

  return (
    <>
    <Col>
      <Row className="py-3">
        <Col xs={12} xl={8}>
          <GeneralInfoForm {...props} />
        </Col>

        <Col xs={12} xl={4}>
          <Row>
            <Col xs={12}>
              <ProfileCardWidget {...profile}/>
            </Col>
            <Col xs={12}>
              <ChoosePhotoWidget
                title="Wybierz zdjęcie profilowe"
                photo={Profile3}
              />
            </Col>
          </Row>
        </Col>
      </Row>
      </Col>
    </>
  );
};


const mapStateToProps = state => ({
  ...state
})

const actions = Object.assign({}, umowyActions,fakturyActions,userActions,rozliczeniaActions)


export default connect(mapStateToProps,actions)(MyProfile)