
import React,{useState,useContext,useEffect} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCashRegister, faChartLine, faCloudUploadAlt, faPlus, faRocket, faTasks, faUserShield } from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Button, Dropdown, ButtonGroup } from '@themesberg/react-bootstrap';
import { CounterWidget,  SalesValueWidget, SalesValueWidgetPhone, AcquisitionWidget } from "../../components/Widgets";
import { PageRozliczeniaNaMoimAucieTable,PageRozliczeniaNaSwoimAucieTable,PageFakturyTable, PageKierowcyTable } from "../../components/Tables";
import { Form, InputGroup } from '@themesberg/react-bootstrap';
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { RozliczeniaNaMoimAucieForm, RozliczeniaNaSwoimAucieForm } from '../../components/Forms'

import { DataContext } from '../../APIController/data'


import axios from 'axios'

import { connect } from 'react-redux'
import { userActions } from '../../APIController/actions/userActions'
import { umowyActions } from '../../APIController/actions/umowyActions'
import { fakturyActions } from '../../APIController/actions/fakturyActions'
import { rozliczeniaActions } from '../../APIController/actions/rozliczeniaActions'



const DashboardAdmin = (props) => {
  const [isKierowcyShow,setIsKierowcyShow] = useState(false)
  const [isPojazdyShow,setIsPojazdyShow] = useState(false)
  const [isKierowcyPojazdyShow,setIsKierowcyPojazdyShow] = useState(false)
  const [isRozliczeniaShow,setIsRozliczeniaShow] = useState(false)


  const [isRozliczShow,setIsRozliczShow] = useState(false)
  const [isModyfikujShow,setIsModyfikujShow] = useState(false)
  const [isFakturyShow,setIsFakturyShow] = useState(false)
  const [isUmowyShow,setIsUmowyShow] = useState(false)
  // const [isSet,setIsSet] = useState(false)


  const { handleShowUser, handleSetUser } = useContext(DataContext)
  const { user, users,loggedUser,selectedUser } = props.users
  const { faktury } = props.faktury
  const { umowy } = props.umowy
  const { rozliczenia } = props.rozliczenia
  
  const { setFaktury, setSelectedUser, setRozliczenia,setRozliczenie, setUmowy, setUsers ,setUser, handleActiveUser, handleDeleteUser, filterUsersById, setAllUserRozliczenia } = props
  const [usersOptions,setUserOptions] = useState(users)
  const [isSet,setIsSet] = useState(false)
  



 
  useEffect(()=>{
    setRozliczenie()
    setUmowy()
    setUsers()
    setUser()
    if(!isSet && users.length > 0){
      setUserOptions(users.filter(user => user._id !== loggedUser._id))
      setIsSet(true)
      setSelectedUser(users[0])
      setRozliczenia()
      setFaktury() 
    }
    
  },[isRozliczShow,usersOptions,selectedUser])

  return (
    <>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
        <Dropdown className="btn-toolbar">
        <Dropdown.Toggle as={Button} variant="primary" size="sm" className="me-2">
            <FontAwesomeIcon icon={faPlus} className="me-2" />Akjca
          </Dropdown.Toggle>
          <Dropdown.Menu className="dashboard-dropdown dropdown-menu-left mt-2">

            <Dropdown.Item className="fw-bold"  onClick={()=>{
                setIsKierowcyShow(true)
                setIsPojazdyShow(false)
                setIsKierowcyPojazdyShow(false)
                setIsFakturyShow(false)
                setIsRozliczeniaShow(false)
                setIsRozliczShow(false)
                setIsUmowyShow(false)
              }}>
            <FontAwesomeIcon icon={faPlus} className="me-2"/>Pokaz Kierowc??w
            </Dropdown.Item>
           
            <Dropdown.Item className="fw-bold" onClick={()=>{
                setIsPojazdyShow(true)
                setIsKierowcyShow(false)
                setIsKierowcyPojazdyShow(false)
                setIsFakturyShow(false)
                setIsRozliczeniaShow(false)
                setIsRozliczShow(false)
                setIsUmowyShow(false)
            }}>
              <FontAwesomeIcon icon={faCloudUploadAlt} className="me-2" />Poka?? Pojazdy
            </Dropdown.Item>
      
            <Dropdown.Item className="fw-bold" onClick={()=>{
                setIsKierowcyPojazdyShow(true)
                setIsKierowcyShow(false)
                setIsPojazdyShow(false)
                setIsFakturyShow(false)
                setIsRozliczeniaShow(false)
                setIsRozliczShow(false)
                setIsUmowyShow(false)
            }}>
              <FontAwesomeIcon icon={faCloudUploadAlt} className="me-2" />Poka?? Pojazdy I Kierowc??w
            </Dropdown.Item>

            <Dropdown.Item className="fw-bold" onClick={()=>{
                setIsFakturyShow(true)
                setIsKierowcyPojazdyShow(false)
                setIsKierowcyShow(false)
                setIsPojazdyShow(false)
                setIsRozliczeniaShow(false)
                setIsRozliczShow(false)
                setIsUmowyShow(false)
            }}>
              <FontAwesomeIcon icon={faCloudUploadAlt} className="me-2" />Poka?? Faktury
            </Dropdown.Item>

            <Dropdown.Item className="fw-bold"  onClick={()=>{
                setIsRozliczeniaShow(true)
                setIsKierowcyPojazdyShow(false)
                setIsKierowcyShow(false)
                setIsPojazdyShow(false)
                setIsFakturyShow(false)
                setIsUmowyShow(false)
                setIsRozliczShow(true)
              }}>
              <FontAwesomeIcon icon={faTasks} className="me-2"/>Rozlicz Kierowc??
            </Dropdown.Item>

            <Dropdown.Item className="fw-bold" onClick={()=>{
                setIsKierowcyPojazdyShow(true)
                setIsKierowcyShow(false)
                setIsPojazdyShow(false)
                setIsFakturyShow(false)
                setIsRozliczeniaShow(false)
                setIsRozliczShow(false)
                setIsUmowyShow(false)
            }}>
              <FontAwesomeIcon icon={faCloudUploadAlt} className="me-2" />Poka?? Pojazdy I Kierowc??w
            </Dropdown.Item>

            <Dropdown.Divider />

            <Dropdown.Item className="fw-bold">
              <FontAwesomeIcon icon={faUserShield} className="me-2" /> Pokaz Obr??t
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

      
      </div>

      <Row className="justify-content-md-center">
        <Col xs={12} className="mb-4 d-none d-sm-block">
          <SalesValueWidget
            title="Sales Value"
            value="10,567"
            percentage={10.57}
          />
        </Col>
        <Col xs={12} className="mb-4 d-sm-none">
          <SalesValueWidgetPhone
            title="Sales Value"
            value="10,567"
            percentage={10.57}
          />
        </Col>
        <Col xs={12} sm={6} xl={4} className="mb-4">
          <CounterWidget
            category="Kierowcy"
            title="345k"
            period="Feb 1 - Apr 1"
            percentage={18.2}
            icon={faChartLine}
            iconColor="shape-secondary"
          />
        </Col>

        <Col xs={12} sm={6} xl={4} className="mb-4">
          <CounterWidget
            category="Ca??y Obr??t"
            title="$43,594"
            period="Feb 1 - Apr 1"
            percentage={28.4}
            icon={faCashRegister}
            iconColor="shape-tertiary"
          />
        </Col>

       
        <Col xs={12} sm={6} xl={4} className="mb-4">
          <CounterWidget
            category="Do Wyp??aty"
            title="$43,594"
            period="Feb 1 - Apr 1"
            percentage={28.4}
            icon={faCashRegister}
            iconColor="shape-tertiary"
          />
        </Col>
      </Row>

      <Row>
        <Col xs={12}>
                {isKierowcyShow && 
                <React.Fragment>
                  <h2 className="text-center my-4">Kierowcy</h2>
                  <Form className="mt-4">
                    <Form.Group className="mb-2">
                        <Form.Label>Wybierz Kierowc??</Form.Label>
                        {/* onChange={(e)=>{handleShowUser(e.target.value)}} */}
                        <Form.Select id="kierowcy" defaultValue="0" onChange={(e)=>{filterUsersById(e.target.value)}}> 
                          {usersOptions.map(user =>{
                            return <option value={user._id}>{user.imie} {user.nazwisko}</option>
                          })}
                        </Form.Select>
                      </Form.Group>
                    </Form>
                  <PageKierowcyTable {...props} handleActive={handleActiveUser} handleDelete={handleDeleteUser} />
               </React.Fragment>}
               {isRozliczeniaShow && 
               <React.Fragment>
                <h2 className="text-center my-4">Rozliczenia</h2>
                <Form className="mt-4">
                  <Form.Group className="mb-2">
                      <Form.Label>Wybierz Kierowc??</Form.Label>
                      <Form.Select id="state" defaultValue="0" onChange={(e)=>{
                          filterUsersById(e.target.value)
                          setAllUserRozliczenia(e.target.value)
                        }}>
                      {usersOptions.map(user =>{
                            return <option value={user._id}>{user.imie} {user.nazwisko}</option>
                          })}
                      </Form.Select>
                    </Form.Group>
                    {rozliczenia.length > 0 
                    ?<Form.Group className="mb-3">
                     <Form.Label>Wybierz Przedzial Datowy</Form.Label>
                      <Col className="d-flex" lg={4}>
                        <InputGroup>
                          <InputGroup.Text><FontAwesomeIcon icon={faSearch} /></InputGroup.Text>
                          <Form.Control type="date" style={{marginRight:"15px"}} />
                        </InputGroup>
                        <InputGroup>
                          <InputGroup.Text><FontAwesomeIcon icon={faSearch} /></InputGroup.Text>
                          <Form.Control type="date" />
                        </InputGroup>
                      </Col>
                    </Form.Group>
                    : null}
                  </Form>
                  {rozliczenia.length > 0 
                  ? <React.Fragment>
                    {selectedUser.auto 
                      ? <PageRozliczeniaNaMoimAucieTable {...props}/>
                      : <PageRozliczeniaNaSwoimAucieTable {...props}/>
                    }
                    </React.Fragment>
                  : null
                  }
                  

                  </React.Fragment>}
                  {isFakturyShow && 
                  <React.Fragment>
                    <h2 className="text-center my-5">Faktury</h2>
                    <Form className="my-4">
                      <Form.Group>
                        <Form.Label>Wybierz Kierowc??</Form.Label>
                          <Form.Select id="users" defaultValue="0" onChange={(e)=>{filterUsersById(e.target.value)}}>
                          {usersOptions.map(user =>{
                                return <option value={user._id}>{user.imie} {user.nazwisko}</option>
                              })}
                        </Form.Select>
                      </Form.Group>
                    </Form>
                    <PageFakturyTable {...props} />
                  </React.Fragment>}
                {isRozliczShow && 
                <React.Fragment>
                <Form className="mt-4">
                  <h2 className="text-center">Prze??lij Fakture</h2>
                  <Form.Group className="mb-3">
                    <Form.Label>Prze??lij Plik Faktury</Form.Label>
                    <InputGroup>
                      <InputGroup.Text><FontAwesomeIcon icon={faSearch} /></InputGroup.Text>
                      <Form.Control type="file" />
                    </InputGroup>
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Kwota na fakturze</Form.Label>
                    <InputGroup>
                      <InputGroup.Text><FontAwesomeIcon icon={faSearch} /></InputGroup.Text>
                      <Form.Control type="text" placeholder="Wpisz kwot??" />
                    </InputGroup>
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Data</Form.Label>
                    <InputGroup>
                      <Form.Control type="date" placeholder="20/12/12" />
                      <InputGroup.Text><FontAwesomeIcon icon={faSearch} /></InputGroup.Text>
                    </InputGroup>
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Nip sprzedawcy</Form.Label>
                    <InputGroup>
                      <Form.Control type="text" placeholder="20/12/12" />
                      <InputGroup.Text><FontAwesomeIcon icon={faSearch} /></InputGroup.Text>
                    </InputGroup>
                  </Form.Group>
                  <Form.Group className="mb-2">
                      <Form.Label>Forma p??atno??ci</Form.Label>
                      <Form.Select id="state" defaultValue="0">
                        <option value="uber">Uber</option>
                        <option value="bolt">Bolt</option>
                        <option value="free-now">FreeNow</option>
                      </Form.Select>
                    </Form.Group>
                    <div className="mt-3">
                      <Button variant="primary" type="submit">Prze??lij</Button>
                    </div>
                </Form>
                {selectedUser.auto 
                  ? <RozliczeniaNaMoimAucieForm {...props} />
                  : <RozliczeniaNaSwoimAucieForm {...props}/>
                }
                </React.Fragment>}
        </Col>
      </Row>

      <Row>
        <Col>
        {isModyfikujShow && 
          <React.Fragment>
          {selectedUser.auto 
            ? <RozliczeniaNaMoimAucieForm {...props} />
            : <RozliczeniaNaSwoimAucieForm {...props}/>
          }
          </React.Fragment>}
        </Col>
      </Row>

    </>
  );
};




export default DashboardAdmin