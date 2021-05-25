
import React,{useState,useEffect} from "react";
import { useHistory } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faEnvelope, faUnlockAlt } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { Col, Row, Form, Card, Button, FormCheck, Container, InputGroup,Alert  } from '@themesberg/react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios'
import { Routes } from "../../routes";
import BgImage from "../../assets/img/illustrations/signin.svg";


export default () => {
  const history = useHistory()
  const [show,setShow] = useState(false)
  const [errors,setErrors] = useState([])
  const [formData,setFormData] = useState({
      email:'',
      password:'',
      password2:'',
      imie:'',
      nazwisko:'',
      auto:'',
      wojewodztwo:'dolnośląskie',
      isActive:false
  })
  useEffect(()=>{
    console.log(formData)
  },[formData,errors,show])

  const handleChange = (e) =>{
      const { name , value } = e.target
      setFormData(prevState =>({
        ...prevState,
        [name]:value
      }))
  }

  const handleSubmit = () =>{
    axios.post('http://localhost:5000/users/register',formData)
      .then(res => setFormData({  
        email:'',
        password:'',
        password:'',
        imie:'',
        nazwisko:'',
        auto:'',
        wojewodztwo:'dolnośląskie',
        isActive:false,
        isAdmin:false
      }))
      .catch(err => {if(err) throw err})
  }

  const handleValidate = (e) =>{
      e.preventDefault()
      let event = e
      let errors = []
      const {  email, password, password2, imie, nazwisko, auto,wojewodztwo } = formData    
      if(password !== password2){
        errors.push('Hasla się rożnia')
      }
      if(password.length < 6){
        errors.push('Hasło Musi Posiadać co najmniej 6 znaków')
      }
      if( email === '' || password === '' ||   password2 === '' || imie ==='' ||  nazwisko === '' || auto === '' ||    wojewodztwo === 'dolnośląskie'){
        errors.push('Wypełnij Wszystkie Pola')
      }
      if(errors.length > 0){
        setShow(true)
        setErrors(errors)
      }else{
        handleSubmit(event)  
      }
  }
  return (
    <main>
      <section className="d-flex align-items-center my-5 mt-lg-6 mb-lg-5">
        <Container>
          <p className="text-center">
            <Card.Link as={Link} to={Routes.DashboardOverview.path} className="text-gray-700">
              <FontAwesomeIcon icon={faAngleLeft} className="me-2" /> Back to homepage
            </Card.Link>
          </p>
          <Row className="justify-content-center form-bg-image" style={{ backgroundImage: `url(${BgImage})` }}>
            <Col xs={12} className="d-flex align-items-center justify-content-center">
              <div className="mb-4 mb-lg-0 bg-white shadow-soft border rounded border-light p-4 p-lg-5 w-100 fmxw-500">
                <div className="text-center text-md-center mb-4 mt-md-0">
                  <p className="mb-0">Create an account</p>
                </div>
                {errors.map(error =>{
                  return show && <Alert variant="danger" onClose={() => setShow(false)} dismissible>{error}</Alert>
                })}
                <Form className="mt-4" onSubmit={(e)=>{handleValidate(e)}} encType="multipart/form-data">
                  <Form.Group id="email" className="mb-4">
                    <Form.Label>Email</Form.Label>
                    <InputGroup>
                      <InputGroup.Text>
                        <FontAwesomeIcon icon={faEnvelope} />
                      </InputGroup.Text>
                      <Form.Control onChange={(e)=>{handleChange(e)}} autoFocus required type="email" name="email" value={formData.email} placeholder="Podaj Email" />
                    </InputGroup>
                  </Form.Group>
                  <Form.Group id="password" className="mb-4">
                    <Form.Label>Hasło</Form.Label>
                    <InputGroup>
                      <InputGroup.Text>
                        <FontAwesomeIcon icon={faUnlockAlt} />
                      </InputGroup.Text>
                      <Form.Control onChange={(e)=>{handleChange(e)}} required type="password" placeholder="Podaj Hasło" value={formData.haslo} name="password"/>
                    </InputGroup>
                  </Form.Group>
                  <Form.Group id="confirmPassword" className="mb-4">
                    <Form.Label>Potwiedź Hasło</Form.Label>
                    <InputGroup>
                      <InputGroup.Text>
                        <FontAwesomeIcon icon={faUnlockAlt} />
                      </InputGroup.Text>
                      <Form.Control onChange={(e)=>{handleChange(e)}}  required type="password" placeholder="Potwierdź Hasło" value={formData.haslo2} name="password2" />
                    </InputGroup>
                  </Form.Group>
                  <Form.Group id="imie" className="mb-4">
                    <Form.Label>Imię</Form.Label>
                    <InputGroup>
     
                      <Form.Control onChange={(e)=>{handleChange(e)}}  required type="text" placeholder="Podaj Imię" value={formData.imie} name="imie"/>
                    </InputGroup>
                  </Form.Group>
                  <Form.Group id="nazwisko" className="mb-4">
                    <Form.Label>Nazwisko</Form.Label>
                    <InputGroup>
                      <Form.Control onChange={(e)=>{handleChange(e)}}  required type="text" placeholder="Podaj Nazwisko" value={formData.nazwisko} name="nazwisko" />
                    </InputGroup>
                  </Form.Group>
                    <Form.Group id="auto">
                <Form.Label>Auto</Form.Label>
                <Form.Select onChange={(e)=>{handleChange(e)}}   name="auto" value={formData.auto}>
                  <option>Wybierz Auto</option>
                  <option value={false}>Własne</option>
                  <option value={true}>Moje</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-2">
                <Form.Label>Województwo</Form.Label>
                <Form.Select onChange={(e)=>{handleChange(e)}}  id="state" name="wojewodztwo" value={formData.wojewodztwo} >
                  <option value="dolnośląskie">Dolnośląskie</option>
                  <option value="kujawsko-pomorskie">Kujawsko-pomorskie</option>
                  <option value="lubelskie">Lubelskie</option>
                  <option value="lubuskie">Lubuskie</option>
                  <option value="łódzkie">Łódzkie</option>
                  <option value="małopolskie">Małopolskie</option>
                  <option value="mazowieckie">Mazowieckie</option>
                  <option value="opolskie">Opolskie</option>
                  <option value="podkarpackie">Podkarpackie</option>
                  <option value="podlaskie">Podlaskie</option>
                  <option value="pomorskie">Pomorskie</option>
                  <option value="śląskie">Śląskie</option>
                  <option value="świętokrzyskie">Świętokrzyskie</option>
                  <option value="warmińsko-mazurskie">Warmińsko-mazurskie</option>
                  <option value="wielkopolskie">Wielkopolskie</option>
                  <option value="zachodniopomorskie">Zachodniopomorskie</option>
                </Form.Select>
              </Form.Group>
                  <FormCheck type="checkbox" className="d-flex mb-4">
                    <FormCheck.Input required id="terms" className="me-2" />
                    <FormCheck.Label htmlFor="terms">
                      Zgoda Na Przetwarzanie Danych Osobowych <Card.Link>Warunki</Card.Link>
                    </FormCheck.Label>
                  </FormCheck>

                  <Button variant="primary" type="submit" className="w-100">
                    Sign up
                  </Button>
                </Form>

                <div className="mt-3 mb-4 text-center">
                  <span className="fw-normal">or</span>
                </div>
                <div className="d-flex justify-content-center my-4">
                  <Button variant="outline-light" className="btn-icon-only btn-pill text-facebook me-2">
                    <FontAwesomeIcon icon={faFacebookF} />
                  </Button>
                  <Button variant="outline-light" className="btn-icon-only btn-pill text-twitter me-2">
                    <FontAwesomeIcon icon={faTwitter} />
                  </Button>
                  <Button variant="outline-light" className="btn-icon-only btn-pil text-dark">
                    <FontAwesomeIcon icon={faGithub} />
                  </Button>
                </div>
                <div className="d-flex justify-content-center align-items-center mt-4">
                  <span className="fw-normal">
                    Already have an account?
                    <Card.Link as={Link} to={Routes.Signin.path} className="fw-bold">
                      {` Login here `}
                    </Card.Link>
                  </span>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
};
