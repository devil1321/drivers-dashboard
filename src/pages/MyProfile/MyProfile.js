import React,{useState,useEffect,useContext} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBoxOpen, faCartArrowDown, faChartPie, faChevronDown, faClipboard, faCommentDots, faFileAlt, faPlus, faRocket, faStore } from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Button, Dropdown } from '@themesberg/react-bootstrap';
import { ChoosePhotoWidget, ProfileCardWidget } from "../../components/Widgets";
import { GeneralInfoForm } from "../../components/Forms";

import Profile3 from "../../assets/img/team/profile-picture-3.jpg";
import { profile } from "../../data/profile";
import axios from 'axios'


const MyProfile = (props) => {
  const { setUser,handleChangeUser } = props

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


export default MyProfile