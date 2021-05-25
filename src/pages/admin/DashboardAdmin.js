
import React,{useState,useContext} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCashRegister, faChartLine, faCloudUploadAlt, faPlus, faRocket, faTasks, faUserShield } from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Button, Dropdown, ButtonGroup } from '@themesberg/react-bootstrap';
import { Nav, Tab } from '@themesberg/react-bootstrap';
import { CounterWidget, CircleChartWidget, BarChartWidget, TeamMembersWidget, ProgressTrackWidget, RankingWidget, SalesValueWidget, SalesValueWidgetPhone, AcquisitionWidget } from "../../components/Widgets";
import { PageRozliczeniaNaMoimAucieTable,PageRozliczeniaNaSwoimAucieTable,PageFakturyTable, PageVisitsTable,PageKierowcyTable } from "../../components/Tables";
import { rozliczenia } from '../../data/rozliczenia'
import { trafficShares, totalOrders } from "../../data/charts";
import { kierowcy } from '../../data/kierowcy'
import { Form, InputGroup } from '@themesberg/react-bootstrap';
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { RozliczeniaNaMoimAucieForm, RozliczeniaNaSwoimAucieForm } from '../../components/Forms'

import { DataContext } from '../../context/data'

import axios from 'axios'

export default () => {
  const [isKierowcyShow,setIsKierowcyShow] = useState(false)
  const [isRozliczeniaShow,setIsRozliczeniaShow] = useState(false)
  const [isRozliczShow,setIsRozliczShow] = useState(false)
  const [isModyfikujShow,setIsModyfikujShow] = useState(false)
  const [isFakturyShow,setIsFakturyShow] = useState(false)
  const [isUmowyShow,setIsUmowyShow] = useState(false)


  const {users, setUsers } = useContext(DataContext)

  const handleActive = (id,isActive) =>{
    if(isActive){
      isActive = false
    }else{
      isActive = true
    }
    const user = {
      isActive
    }
    axios.post('http://localhost:5000/users/state/' + id ,user)
      .then(res => {
        setUsers([])
        window.location.reload()
      })
      .catch(err => {if(err) throw err})
  }
  const handleDelete = (id) =>{
    axios.delete('http://localhost:5000/users/delete/' + id)
    .then(res => {
      setUsers([])
      window.location.reload()
    })
  }

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
                setIsFakturyShow(false)
                setIsRozliczeniaShow(false)
              }}>
            <FontAwesomeIcon icon={faPlus} className="me-2"/>Pokaz Kierowców
            </Dropdown.Item>
            <Dropdown.Item className="fw-bold"  onClick={()=>{
                 setIsRozliczeniaShow(true)
                 setIsKierowcyShow(false)
                 setIsFakturyShow(false)
              }}>
              <FontAwesomeIcon icon={faTasks} className="me-2"/>Pokaz Rozliczenia
            </Dropdown.Item>
            <Dropdown.Item className="fw-bold" onClick={()=>{
                 setIsFakturyShow(true)
                 setIsRozliczeniaShow(false)
                 setIsKierowcyShow(false)
            }}>
              <FontAwesomeIcon icon={faCloudUploadAlt} className="me-2" />Pokaż Pokaż Faktury
            </Dropdown.Item>

            <Dropdown.Divider />

            <Dropdown.Item className="fw-bold">
              <FontAwesomeIcon icon={faUserShield} className="me-2" /> Pokaz Obrót
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
            category="Cały Obrót"
            title="$43,594"
            period="Feb 1 - Apr 1"
            percentage={28.4}
            icon={faCashRegister}
            iconColor="shape-tertiary"
          />
        </Col>

       
        <Col xs={12} sm={6} xl={4} className="mb-4">
          <CounterWidget
            category="Do Wypłaty"
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
                        <Form.Label>Wybierz Kierowcę</Form.Label>
                        <Form.Select id="state" defaultValue="0">
                          {users.map(user =>{
                            return <option>{user.imie}{user.nazwisko}</option>
                          })}
                        </Form.Select>
                      </Form.Group>
                    </Form>
                  <PageKierowcyTable kierowcy={users} handleActive={handleActive} handleDelete={handleDelete} />
               </React.Fragment>}
               {isRozliczeniaShow && 
               <React.Fragment>
                <h2 className="text-center my-4">Rozliczenia</h2>
                <Form className="mt-4">
                  <Form.Group className="mb-2">
                      <Form.Label>Wybierz Kierowcę</Form.Label>
                      <Form.Select id="state" defaultValue="0">
                      {users.map(user =>{
                            return <option>{user.imie}{user.nazwisko}</option>
                          })}
                      </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3">
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
                  </Form>
                  <PageRozliczeniaNaMoimAucieTable rozliczenia={rozliczenia}/>
                  <PageRozliczeniaNaSwoimAucieTable rozliczenia={rozliczenia}/>
                  </React.Fragment>}
                  {isFakturyShow && 
                  <React.Fragment>
                    <h2 className="text-center my-5">Faktury</h2>
                    <PageFakturyTable />
                  </React.Fragment>}
                {isRozliczShow && 
                <React.Fragment>
                <Form className="mt-4">
                  <h2 className="text-center">Rozlicz Kierowcę</h2>
                  <Form.Group className="mb-3">
                    <Form.Label>Prześlij Plik Faktury</Form.Label>
                    <InputGroup>
                      <InputGroup.Text><FontAwesomeIcon icon={faSearch} /></InputGroup.Text>
                      <Form.Control type="file" />
                    </InputGroup>
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Kwota na fakturze</Form.Label>
                    <InputGroup>
                      <InputGroup.Text><FontAwesomeIcon icon={faSearch} /></InputGroup.Text>
                      <Form.Control type="text" placeholder="Wpisz kwotę" />
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
                      <Form.Label>Forma płatności</Form.Label>
                      <Form.Select id="state" defaultValue="0">
                        <option value="uber">Uber</option>
                        <option value="bolt">Bolt</option>
                        <option value="free-now">FreeNow</option>
                      </Form.Select>
                    </Form.Group>
                    <div className="mt-3">
                      <Button variant="primary" type="submit">Prześlij</Button>
                    </div>
                </Form>
                </React.Fragment>}
        </Col>
      </Row>

      <Row>
        <Col>
        {isModyfikujShow && 
          <React.Fragment>
            <RozliczeniaNaMoimAucieForm />
            <RozliczeniaNaSwoimAucieForm />
          </React.Fragment>}
        </Col>
      </Row>

    
       
 
 
    </>
  );
};
