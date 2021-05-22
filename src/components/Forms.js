
import React, { useState } from "react";
import moment from "moment-timezone";
import Datetime from "react-datetime";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Card, Form, Button, InputGroup } from '@themesberg/react-bootstrap';


export const GeneralInfoForm = () => {
  const [birthday, setBirthday] = useState("");

  return (
    <Card border="light" className="bg-white shadow-sm mb-4">
      <Card.Body>
        <h5 className="mb-4">Informacje Ogólne</h5>
        <Form>
          <Row>
            <Col md={6} className="mb-3">
              <Form.Group id="firstName">
                <Form.Label>Imię</Form.Label>
                <Form.Control required type="text" placeholder="Podaj Imię" />
              </Form.Group>
            </Col>
            <Col md={6} className="mb-3">
              <Form.Group id="lastName">
                <Form.Label>Nazwisko</Form.Label>
                <Form.Control required type="text" placeholder="Podaj Nazwisko" />
              </Form.Group>
            </Col>
          </Row>
          <Row className="align-items-center">
            <Col md={6} className="mb-3">
              <Form.Group id="birthday">
                <Form.Label>Data Urodzin</Form.Label>
                <Datetime
                  timeFormat={false}
                  onChange={setBirthday}
                  renderInput={(props, openCalendar) => (
                    <InputGroup>
                      <InputGroup.Text><FontAwesomeIcon icon={faCalendarAlt} /></InputGroup.Text>
                      <Form.Control
                        required
                        type="text"
                        value={birthday ? moment(birthday).format("MM/DD/YYYY") : ""}
                        placeholder="mm/dd/yyyy"
                        onFocus={openCalendar}
                        onChange={() => { }} />
                    </InputGroup>
                  )} />
              </Form.Group>
            </Col>
            <Col md={6} className="mb-3">
              <Form.Group id="gender">
                <Form.Label>Płeć</Form.Label>
                <Form.Select defaultValue="0">
                  <option value="0">Mężczyzna</option>
                  <option value="1">Kobieta</option>
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md={6} className="mb-3">
              <Form.Group id="pesel">
                <Form.Label>Pesel</Form.Label>
                <Form.Control required type="text" placeholder="Podaj Pesel" />
              </Form.Group>
            </Col>
            <Col md={6} className="mb-3">
              <Form.Group id="telefon">
                <Form.Label>Telefon</Form.Label>
                <Form.Control required type="text" placeholder="+48 000 000 000" />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md={6} className="mb-3">
              <Form.Group id="emal">
                <Form.Label>Email</Form.Label>
                <Form.Control required type="email" placeholder="name@company.com" />
              </Form.Group>
            </Col>
            <Col md={6} className="mb-3">
              <Form.Group id="phone">
                <Form.Label>Telefon</Form.Label>
                <Form.Control required type="number" placeholder="+12-345 678 910" />
              </Form.Group>
            </Col>
          </Row>

          <h5 className="my-4">Adres</h5>
          <Row>
            <Col sm={9} className="mb-3">
              <Form.Group id="addres">
                <Form.Label>Adres</Form.Label>
                <Form.Control required type="text" placeholder="Podaj Adres" />
              </Form.Group>
            </Col>
            <Col sm={3} className="mb-3">
              <Form.Group id="nrdomu">
                <Form.Label>Nr Domu</Form.Label>
                <Form.Control required type="number" placeholder="No." />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col sm={4} className="mb-3">
              <Form.Group id="miasto">
                <Form.Label>Miasto</Form.Label>
                <Form.Control required type="text" placeholder="Miasto" />
              </Form.Group>
            </Col>
            <Col sm={4} className="mb-3">
              <Form.Group className="mb-2">
                <Form.Label>Województwo</Form.Label>
                <Form.Select id="state" defaultValue="0">
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
            </Col>
            <Col sm={4}>
              <Form.Group id="zip">
                <Form.Label>ZIP</Form.Label>
                <Form.Control required type="tel" placeholder="ZIP Miejscowość" />
              </Form.Group>
            </Col>
          </Row>
          <div className="mt-3">
            <Button variant="primary" type="submit">Save All</Button>
          </div>
        </Form>
      </Card.Body>
    </Card>
  );
};

export const RozliczeniaNaMoimAucieForm = (props) =>{
  const { imie,nazwisko, nrRej, email, uberAplikacja,uberGotowka, boltAplikacja,boltGotowka, freeNowAplikacja, freeNowGotowka, calyObrot, gotowkaRazem,napiwek,bonusy,potracenia,dodatek,premia,kwotaKoncowa_1,kwotaKoncowa_2, doWyplaty } = props;
  return(
    <>
    <h2 className="my-4 text-center">Modyfikuj Kierowcę</h2>
    <Card border="light" className="bg-white shadow-sm mb-4">
      <Card.Body>
        <Form>
            <Col className="mb-3">
              <Form.Group id="imie">
                <Form.Label>Imię</Form.Label>
                <Form.Control required type="text" placeholder="Podaj Imię" name="imie" value={imie} />
              </Form.Group>
            </Col>
            <Col className="mb-3">
              <Form.Group id="nazwisko">
                <Form.Label>Nazwisko</Form.Label>
                <Form.Control required type="text" placeholder="Podaj Nazwisko" name="nazwisko" value={nazwisko} />
              </Form.Group>
            </Col>
            <Col className="mb-3">
              <Form.Group id="rejestracja">
                <Form.Label>Nr. Rej.</Form.Label>
                <Form.Control required type="text" placeholder="Podaj Rejestrację" name="rejestracja" value={nrRej}/>
              </Form.Group>
            </Col>
            <Col className="mb-3">
              <Form.Group id="email">
                <Form.Label>E-mail</Form.Label>
                <Form.Control required type="email" placeholder="Podaj Email" name="email" value={email}/>
              </Form.Group>
            </Col>
            <Col className="mb-3">
              <Form.Group id="uber">
                <Form.Label>Uber</Form.Label>
                <Row>
                  <Col lg={2}>
                    <Form.Control required type="text" placeholder="Aplikacja" name="uber-aplikacja" value={uberAplikacja}/>
                  </Col>
                  <Col lg={2}>
                    <Form.Control required type="text" placeholder="Gotówka" name="uber-gotowka" value={uberGotowka}/>
                  </Col>
                </Row>
              </Form.Group>
            </Col>
          <Col className="mb-3">
              <Form.Group id="bolt">
                <Form.Label>Bolt</Form.Label>
                <Row>
                  <Col lg={2}>
                    <Form.Control required type="text" placeholder="Aplikacja" name="bolt-aplikacja" value={boltAplikacja}/>
                  </Col>
                  <Col lg={2}>
                    <Form.Control required type="text" placeholder="Gotówka" name="bolt-gotowka" value={boltGotowka}/>
                  </Col>
                </Row>
              </Form.Group>
            </Col>
            <Col className="mb-3">
            <Form.Group id="freeNow">
                <Form.Label>FreeNow</Form.Label>
                <Row>
                  <Col lg={2}>
                    <Form.Control required type="text" placeholder="Aplikacja" name="freeNow-aplikacja" value={freeNowAplikacja}/>
                  </Col>
                  <Col lg={2}>
                    <Form.Control required type="text" placeholder="Gotówka" name="freeNow-gotowka" value={freeNowGotowka}/>
                  </Col>
                </Row>
              </Form.Group>
            </Col>
            <Col className="mb-3">
              <Form.Group id="cały-obrót">
                <Form.Label>Cały Obrót</Form.Label>
                <Form.Control required type="email" placeholder="Cały Obrót" name="caly-obrot" value={calyObrot}/>
              </Form.Group>
            </Col>
            <Col className="mb-3">
              <Form.Group id="phone">
                <Form.Label>Gotówka Razem</Form.Label>
                <Form.Control required type="text" placeholder="Gotowka Razem" name="gotowka-razem" value={gotowkaRazem}/>
              </Form.Group>
            </Col>
            <Col className="mb-3">
              <Form.Group id="napiwek">
                <Form.Label>Napiwek</Form.Label>
                <Form.Control required type="text" placeholder="Podaj Napiwek" name="napiwek" value={napiwek}/>
              </Form.Group>
            </Col>
            <Col className="mb-3">
              <Form.Group id="nrdomu">
                <Form.Label>Bonusy</Form.Label>
                <Form.Control required type="number" placeholder="Podaj Bonusy" name="bonusy" value={bonusy}/>
              </Form.Group>
            </Col>
            <Col className="mb-3">
              <Form.Group id="potrącenia">
                <Form.Label>Potrącenia</Form.Label>
                <Form.Control required type="text" placeholder="Podaj Potrącenia" name="potracenia" value={potracenia}/>
              </Form.Group>
            </Col>
            <Col className="mb-3">
            <Form.Group id="dodatek">
                <Form.Label>Dodatek</Form.Label>
                <Form.Control required type="text" placeholder="Podaj Dodatek" name="dodatek" value={dodatek}/>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group id="premia">
                <Form.Label>Premia</Form.Label>
                <Form.Control required type="text" placeholder="Podaj Premię" name="premia" value={premia}/>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group id="dodatek-koncowy">
                <Form.Label>Kwota Końcowa</Form.Label>
                <Row>
                  <Col lg={2}>
                    <Form.Control required type="text" placeholder="Kwota Końcowa 1"  name="kwota-koncowa-1" value={kwotaKoncowa_1} />
                  </Col>
                  <Col lg={2}>
                    <Form.Control required type="text" placeholder="Kwota Końcowa 2"  name="kwota-koncowa-2" value={kwotaKoncowa_2}/>
                  </Col>
                </Row>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group id="do-wyplaty">
                <Form.Label>Do Wypłate</Form.Label>
                <Form.Control required type="text" placeholder="Podaj Wypłate" value={doWyplaty}/>
              </Form.Group>
            </Col>
            <div className="mt-3">
            <Button variant="primary" type="submit">Zapisz</Button>
          </div>
        </Form>
      </Card.Body>
    </Card>
    </>
  )
}

export const RozliczeniaNaSwoimAucieForm = (props) =>{
  const { imie,nazwisko, email, uberAplikacja,uberGotowka, boltAplikacja,boltGotowka, freeNowAplikacja, freeNowGotowka, calyObrot, gotowkaRazem, dodatek, prowizjaBolt, rozliczenieZus, bonusy, podatek, zwrotFv, potracenia, napiwki, doWyplaty } = props;
  return(
    <>
    <h2 className="my-4 text-center">Modyfikuj Kierowcę</h2>
    <Card border="light" className="bg-white shadow-sm mb-4">
    <Card.Body>
      <Form>
          <Col className="mb-3">
            <Form.Group id="imie">
              <Form.Label>Imię</Form.Label>
              <Form.Control required type="text" placeholder="Podaj Imię" name="imie" value={imie}/>
            </Form.Group>
          </Col>
          <Col className="mb-3">
            <Form.Group id="nazwisko">
              <Form.Label>Nazwisko</Form.Label>
              <Form.Control required type="text" placeholder="Podaj Nazwisko" name="nazwisko" value={nazwisko}/>
            </Form.Group>
          </Col>
          <Col className="mb-3">
            <Form.Group id="email">
              <Form.Label>E-mail</Form.Label>
              <Form.Control required type="text" placeholder="Podaj Email" name="email" value={email}/>
            </Form.Group>
          </Col>
          <Col className="mb-3">
            <Form.Group id="uber">
              <Form.Label>Uber</Form.Label>
              <Row>
                  <Col lg={2}>
                    <Form.Control required type="text" placeholder="Aplikacja" name="uber-gotowka" value={uberAplikacja} />
                  </Col>
                  <Col lg={2}>
                    <Form.Control required type="text" placeholder="Gotówka" name="uber-aplikacja" value={uberGotowka}/>
                  </Col>
                </Row>
            </Form.Group>
          </Col>
        <Col className="mb-3">
            <Form.Group id="bolt">
              <Form.Label>Bolt Brutto</Form.Label>
              <Row>
                  <Col lg={2}>
                    <Form.Control required type="text" placeholder="Aplikacja" name="bolt-aplikacja" value={boltAplikacja}/>
                  </Col>
                  <Col lg={2}>
                    <Form.Control required type="text" placeholder="Gotówka" name="bolt-gotowka" value={boltGotowka}/>
                  </Col>
                </Row>
            </Form.Group>
          </Col>
          <Col className="mb-3">
          <Form.Group id="freeNow">
              <Form.Label>FreeNow</Form.Label>
              <Row>
                  <Col lg={2}>
                    <Form.Control required type="text" placeholder="Aplikacja" name="freeNow-aplikacja" value={freeNowAplikacja}/>
                  </Col>
                  <Col lg={2}>
                    <Form.Control required type="text" placeholder="Gotówka" name="freeNow-gotowka" value={freeNowGotowka}/>
                  </Col>
                </Row>
            </Form.Group>
          </Col>
          <Col className="mb-3">
            <Form.Group id="caly-obrot">
              <Form.Label>Cały Obrót</Form.Label>
              <Form.Control required type="text" placeholder="Cały Obrót" name="caly-obrot" value={calyObrot} />
            </Form.Group>
          </Col>
          <Col className="mb-3">
            <Form.Group id="gotowka-razem">
              <Form.Label>Gotówka Razem</Form.Label>
              <Form.Control required type="text" placeholder="Gotowka Razem" name="gotowka-razem" value={gotowkaRazem}/>
            </Form.Group>
          </Col>
          <Col className="mb-3">
            <Form.Group id="dodatek">
              <Form.Label>Dodatek</Form.Label>
              <Form.Control required type="text" placeholder="Podaj Dodatek" name="dodatek" value={dodatek} />
            </Form.Group>
          </Col>
          <Col className="mb-3">
            <Form.Group id="nrdomu">
              <Form.Label>Prowizja Bolt</Form.Label>
              <Form.Control required type="text" placeholder="Podaj Prowizje Bolt" name="prowizja-bolt" value={prowizjaBolt} />
            </Form.Group>
          </Col>
          <Col className="mb-3">
            <Form.Group id="miasto">
              <Form.Label>Potrącenia</Form.Label>
              <Form.Control required type="text" placeholder="Potracenia" name="potracenia" value={potracenia}/>
            </Form.Group>
          </Col>
          <Col className="mb-3">
          <Form.Group id="miasto">
              <Form.Label>Rozliczenie + Zus</Form.Label>
              <Form.Control required type="text" placeholder="Miasto" name="miasto" value={rozliczenieZus}/>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group id="bonusy">
              <Form.Label>Bonusy</Form.Label>
              <Form.Control required type="text" placeholder="Podaj Bonusy" name="bonusy" value={bonusy}/>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group id="podatek">
              <Form.Label>Podatek</Form.Label>
              <Form.Control required type="text" placeholder="Podaj Podatek" name="podatek" value={podatek} />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group id="zwrot-fv">
              <Form.Label>Zwrot FV</Form.Label>
              <Form.Control required type="text" placeholder="Zwrot Fv" name='zwrot-fv' value={zwrotFv}/>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group id="potracenia">
              <Form.Label>Potrącenia</Form.Label>
              <Form.Control required type="text" placeholder="Potracenia" name='potracenia' value={potracenia} />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group id="napiwki">
              <Form.Label>Napiwki</Form.Label>
              <Form.Control required type="text" placeholder="Napiwki" name='napiwki' value={napiwki} />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group id="zip">
              <Form.Label>Do Wypłaty</Form.Label>
              <Form.Control required type="text" placeholder="Do Wypłaty" name='do-wyplaty' value={doWyplaty} />
            </Form.Group>
          </Col>
          <div className="mt-3">
            <Button variant="primary" type="submit">Zapisz</Button>
          </div>
      </Form>
    </Card.Body>
  </Card>
  </>
  )
}