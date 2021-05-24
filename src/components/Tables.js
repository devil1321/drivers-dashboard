import React,{useEffect,useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp, faArrowDown, faArrowUp, faEdit, faEllipsisH, faExternalLinkAlt, faEye, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Nav, Card, Image, Button, Table, Dropdown, ProgressBar, Pagination, ButtonGroup,ListGroup } from '@themesberg/react-bootstrap';
import { Link } from 'react-router-dom';
import { Routes } from "../routes";
import { pageVisits, pageTraffic, pageRanking, pageEmails } from "../data/tables";
import transactions from "../data/transactions";
import commands from "../data/commands";
import { faktury } from '../data/faktury';

const ValueChange = ({ value, suffix }) => {
  const valueIcon = value < 0 ? faAngleDown : faAngleUp;
  const valueTxtColor = value < 0 ? "text-danger" : "text-success";

  return (
    value ? <span className={valueTxtColor}>
      <FontAwesomeIcon icon={valueIcon} />
      <span className="fw-bold ms-1">
        {Math.abs(value)}{suffix}
      </span>
    </span> : "--"
  );
};

export const PageUmowyTable = (props) =>{
  const { umowy } = props
  const TableRow = (props) => {
    const { id, data, rodzaj, link } = props;
  

    return (
      <tr>
        <td scope="row">{id}</td>
        <td>{data}</td>
        <td>{rodzaj}</td>
        <td>{link}</td>
      </tr>
    );
  };

  return (
    <Card border="light" className="shadow-sm">
      <Card.Header>
        <Row className="align-items-center">
          <Col>
            <h5>Umowy</h5>
          </Col>
          <Col className="text-end">
            <Button variant="secondary" size="sm">See all</Button>
          </Col>
        </Row>
      </Card.Header>
      <Table responsive className="align-items-center table-flush">
        <thead className="thead-light">
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Data</th>
            <td scope="col">Rodzaj</td>
            <td scope="col">Link</td>
          </tr>
        </thead>
        <tbody>
          {umowy.map(umowa => <TableRow key={umowa.id} {...umowa} />)}
        </tbody>
      </Table>
    </Card>
    );
};

export const PageFakturyTable = (props) => {
  const TableRow = (props) => {

    const { id, data, link, kwota, nip, płatność } = props;
    return (
      <tr>
        <td>
          <Card.Link href="#" className="text-primary fw-bold">{id}</Card.Link>
        </td>
        <td className="fw-bold">
          <FontAwesomeIcon icon className={`icon icon-xs text-black w-30`} />
          {data}
        </td>
        <td>{link}</td>
        <td>{kwota}</td>
        <td>{nip}</td>
        <td>{płatność}</td>
      </tr>
    );
  };

  return (
    <Card border="light" className="shadow-sm mb-4">
    <Card.Header>
        <Row className="align-items-center">
          <Col>
            <h5>Faktury</h5>
          </Col>
          <Col className="text-end">
            <Button variant="secondary" size="sm">See all</Button>
          </Col>
        </Row>
      </Card.Header>
      <Card.Body className="pb-0">
        <Table responsive className="table-centered table-nowrap table-hover rounded mb-0">
          <thead className="thead-light">
            <tr>
              <th className="border-0">Id</th>
              <th className="border-0">Data dodania</th>
              <th className="border-0">Pobierz</th>
              <th className="border-0">Kwota</th>
              <th className="border-0">Nip</th>
              <th className="border-0">Forma Płatności</th>
            </tr>
          </thead>
          <tbody>
            {faktury.map(faktura => <TableRow key={faktura.id} {...faktura} />)}
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
};

export const PageKierowcyTable = (props) =>{
  const {kierowcy} = props
  const TableRow = (props) => {
  const { id, imie, nazwisko, email, umowa, auto, doWyplaty, isActive } = props;
return (
  <tr>
    <td>
      <Card.Link href="#" className="text-primary fw-bold">{id}</Card.Link>
    </td>
    <td className="fw-bold">
      <FontAwesomeIcon icon className={`icon icon-xs text-black w-30`} />
      {imie} {nazwisko}
    </td>
    <td>{email}</td>
    <td>{umowa}</td>
    <td>{auto}</td>
    <td>{doWyplaty}</td>
    <td>{isActive ? "Aktywne" : "Nieaktywne"}</td>
    <td>Usuń</td>
    <td>{isActive ? "dezaktywuj" : "aktywuj"}</td>
  </tr>
  );
  }
return (
    <Card border="light" className="shadow-sm mb-4">
    <Card.Header>
        <Row className="align-items-center">
          <Col>
            <h5>Kierowcy</h5>
          </Col>
          <Col className="text-end">
            <Button variant="secondary" size="sm">See all</Button>
          </Col>
        </Row>
      </Card.Header>
      <Card.Body className="pb-0">
        <Table responsive className="table-centered table-nowrap rounded table-hover mb-0">
          <thead className="thead-light">
            <tr>
              <th className="border-0">Id</th>
              <th className="border-0">Imie I Nazwisko</th>
              <th className="border-0">Email</th>
              <th className="border-0">Umowa</th>
              <th className="border-0">Auto</th>
              <th className="border-0">Do Wypłaty</th>
              <th className="border-0">Stan Konta</th>
              <th className="border-0">Usuń Konto</th>
              <th className="border-0">Zmień Stan</th>
            </tr>
          </thead>
          <tbody>
            {kierowcy.map(kierowca => <TableRow key={kierowca.id} {...kierowca} />)}
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  )
};

export const PageKierowcyTableView = (props) =>{
  const {kierowcy} = props
  const TableRow = (props) => {

const { id, imie, nazwisko, email, umowa, auto, doWyplaty, isActive } = props;
return (
  <tr>
    <td>
      <Card.Link href="#" className="text-primary fw-bold">{id}</Card.Link>
    </td>
    <td className="fw-bold">
      <FontAwesomeIcon icon className={`icon icon-xs text-black w-30`} />
      {imie} {nazwisko}
    </td>
    <td>{email}</td>
    <td>{umowa}</td>
    <td>{auto}</td>
    <td>{doWyplaty}</td>
    <td>{isActive ? "Aktywne" : "Nieaktywne"}</td>
  </tr>
  );
  }
return (
    <Card border="light" className="shadow-sm mb-4">
    <Card.Header>
        <Row className="align-items-center">
          <Col>
            <h5>Kierowcy</h5>
          </Col>
          <Col className="text-end">
            <Button variant="secondary" size="sm">See all</Button>
          </Col>
        </Row>
      </Card.Header>
      <Card.Body className="pb-0">
        <Table responsive className="table-centered table-nowrap table-hover rounded mb-0">
          <thead className="thead-light">
            <tr>
              <th className="border-0">Id</th>
              <th className="border-0">Imie I Nazwisko</th>
              <th className="border-0">Email</th>
              <th className="border-0">Umowa</th>
              <th className="border-0">Auto</th>
              <th className="border-0">Do Wypłaty</th>
              <th className="border-0">Stan Konta</th>
            </tr>
          </thead>
          <tbody>
            {kierowcy.map(kierowca => <TableRow key={kierowca.id} {...kierowca} />)}
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  )
};

export const PageRozliczeniaNaMoimAucieTable = (props) => {
  const { rozliczenia } = props
  
  const TableRow = (props) => {
    const { imie, nazwisko, nrRej, email, uberAplikacja, uberGotowka, boltAplikacja, boltGotowka, freeNowAplikacja, freeNowGotowka, calyObrot, gotowkaRazem, napiwek, bonusy, potracenia, dodatek, premia, kwotaKoncowa, doWyplaty } = props;
    return (
      <tr>
        <td>
          <Card.Link href="#" className="text-primary fw-bold">{imie} {nazwisko}</Card.Link>
        </td>
        <td>{nrRej}</td>
        <td>{email}</td>
        <td>{uberAplikacja}</td>
        <td>{uberGotowka}</td>
        <td>{boltAplikacja}</td>
        <td>{boltGotowka}</td>
        <td>{freeNowAplikacja}</td>
        <td>{freeNowGotowka}</td>
        <td>{calyObrot}</td>
        <td>{gotowkaRazem}</td>
        <td>{napiwek}</td>
        <td>{bonusy}</td>
        <td>{potracenia}</td>
        <td>{dodatek}</td>
        <td>{premia}</td>
        <td>{kwotaKoncowa}</td>
        <td>{doWyplaty}</td>
        <td><Button>Modyfikuj</Button></td>
      </tr>
    );
  };

  return (
    <Card border="light" className="shadow-sm mb-4">
    <Card.Header>
        <Row className="align-items-center">
          <Col>
            <h5>Rozliczenia Na Moim Aucie</h5>
          </Col>
          <Col className="text-end">
            <Button variant="secondary" size="sm">See all</Button>
          </Col>
        </Row>
      </Card.Header>
      <Card.Body className="pb-0">
        <Table responsive className="table-centered table-nowrap table-hover rounded mb-0">
          <thead className="thead-light">
            <tr>
              <th className="border-0">Imię I Nazwisko</th>
              <th className="border-0">Nr.Rej</th>
              <th className="border-0">Email</th>
              <th className="border-0" colSpan="2">Uber</th>
              <th className="border-0" colSpan="2">Bolt</th>
              <th className="border-0" colSpan="2">FreeNow</th>
              <th className="border-0">Cały Obrót</th>
              <th className="border-0">Gotówka Razem</th>
              <th className="border-0">Napiwek</th>
              <th className="border-0">Bonusy</th>
              <th className="border-0">Potrącenia</th>
              <th className="border-0">Dodatek</th>
              <th className="border-0">Premia</th>
              <th className="border-0">Kwota Końcowa</th>
              <th className="border-0">Do Wypłaty</th>
              <th className="border-0">Modyfikuj</th>
            </tr>
          </thead>
          <tbody>
            {rozliczenia.map(rozliczenie => <TableRow key={rozliczenie.id} {...rozliczenie} />)}
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
};

export const PageRozliczeniaNaSwoimAucieTable = (props) => {
  const { rozliczenia } = props
  const TableRow = (props) => {
    const { imie,nazwisko, nrRej, email, uberAplikacja,uberGotowka, boltAplikacja,boltGotowka, freeNowAplikacja, freeNowGotowka, calyObrot, gotowkaRazem, dodatek, prowizjaBolt, rozliczenieZus, bonusy, podatek, zwrotFv, potracenia, napiwki, doWyplaty } = props;
    return (
      <tr>
        <td>
          <Card.Link href="#" className="text-primary fw-bold">{imie} {nazwisko}</Card.Link>
        </td>
        <td>{nrRej}</td>
        <td>{email}</td>
        <td>{uberAplikacja}</td>
        <td>{uberGotowka}</td>
        <td>{boltAplikacja}</td>
        <td>{boltGotowka}</td>
        <td>{freeNowAplikacja}</td>
        <td>{freeNowGotowka}</td>
        <td>{calyObrot}</td>
        <td>{gotowkaRazem}</td>
        <td>{dodatek}</td>
        <td>{prowizjaBolt}</td>
        <td>{rozliczenieZus}</td>
        <td>{bonusy}</td>
        <td>{podatek}</td>
        <td>{zwrotFv}</td>
        <td>{potracenia}</td>
        <td>{napiwki}</td>
        <td>{doWyplaty}</td>
        <td><Button>Modyfikuj</Button></td>
      </tr>
    );
  };

  return (
    <Card border="light" className="shadow-sm mb-4">
      <Card.Header>
        <Row className="align-items-center">
          <Col>
            <h5>Rozliczenia Na Swoim Aucie</h5>
          </Col>
          <Col className="text-end">
            <Button variant="secondary" size="sm">See all</Button>
          </Col>
        </Row>
      </Card.Header>
      <Card.Body className="pb-0">
        <Table responsive className="table-centered table-nowrap table-hover rounded mb-0">
          <thead className="thead-light">
            <tr>
              <th className="border-0">Imię I Nazwisko</th>
              <th className="border-0">Nr.Rej</th>
              <th className="border-0">Email</th>
              <th className="border-0" colSpan="2">Uber</th>
              <th className="border-0" colSpan="2">Bolt</th>
              <th className="border-0" colSpan="2">FreeNow</th>
              <th className="border-0">Cały Obrót</th>
              <th className="border-0">Gotówka Razem</th>
              <th className="border-0">Napiwek</th>
              <th className="border-0">Bonusy</th>
              <th className="border-0">Potrącenia</th>
              <th className="border-0">Dodatek</th>
              <th className="border-0">Premia</th>
              <th className="border-0" colSpan="2">Kwota Końcowa</th>
              <th className="border-0" colSpan="2">Do Wypłaty</th>
              <th className="border-0">Modyfikuj</th>
            </tr>
          </thead>
          <tbody>
            {rozliczenia.map(rozliczenie => <TableRow key={rozliczenie.id} {...rozliczenie} />)}
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
};

export const PageTrafficTable = () => {
  const TableRow = (props) => {
    const { id, source, sourceIcon, sourceIconColor, sourceType, category, rank, trafficShare, change } = props;

    return (
      <tr>
        <td>
          <Card.Link href="#" className="text-primary fw-bold">{id}</Card.Link>
        </td>
        <td className="fw-bold">
          <FontAwesomeIcon icon={sourceIcon} className={`icon icon-xs text-${sourceIconColor} w-30`} />
          {source}
        </td>
        <td>{sourceType}</td>
        <td>{category ? category : "--"}</td>
        <td>{rank ? rank : "--"}</td>
        <td>
          <Row className="d-flex align-items-center">
            <Col xs={12} xl={2} className="px-0">
              <small className="fw-bold">{trafficShare}%</small>
            </Col>
            <Col xs={12} xl={10} className="px-0 px-xl-1">
              <ProgressBar variant="primary" className="progress-lg mb-0" now={trafficShare} min={0} max={100} />
            </Col>
          </Row>
        </td>
        <td>
          <ValueChange value={change} suffix="%" />
        </td>
      </tr>
    );
  };

  return (
    <Card border="light" className="shadow-sm mb-4">
      <Card.Body className="pb-0">
        <Table responsive className="table-centered table-nowrap rounded mb-0">
          <thead className="thead-light">
            <tr>
              <th className="border-0">#</th>
              <th className="border-0">Traffic Source</th>
              <th className="border-0">Source Type</th>
              <th className="border-0">Category</th>
              <th className="border-0">Global Rank</th>
              <th className="border-0">Traffic Share</th>
              <th className="border-0">Change</th>
            </tr>
          </thead>
          <tbody>
            {pageTraffic.map(pt => <TableRow key={`page-traffic-${pt.id}`} {...pt} />)}
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
};

export const MessagesTable = (props) => {
  const [messageModel,setMassageModel] = useState(null)
  const { id,email,osoba,temat,wiadomosc } = props[0];
  const [isShow,setIsShow] = useState(false)
  
  const TableRow = (props) => {
    const { id,email,osoba,temat,wiadomosc,setIsShow} = props;
    const [placeholderMessage,setPlaceholderMessage] = useState(wiadomosc)
   
    useEffect(()=>{
      setPlaceholderMessage(wiadomosc.substring(0, 50))
    },[])
    
    return (
      <tr>
        <td className="pt-4">
          <Card.Link href="#" className="text-primary fw-bold">{id}</Card.Link>
        </td> 
        <td className="pt-4">{osoba}</td>
        <td className="pt-4">{email}</td>
        <td className="pt-4">{temat}</td>
        <td className="pt-4">{placeholderMessage}</td>
        <td> <Button onClick={()=>{props.setShow(true)}} variant="outline-primary">Przeczytaj</Button></td>
      </tr>
    );
  };

  return (
    <>
    <Card border="light" className="shadow-sm mb-4">
      <Card.Body className="pb-0">
        <Table responsive className="table-centered table-nowrap rounded mb-0 table-hover">
          <thead className="thead-light">
            <tr>
              <th className="border-0"></th>
              <th className="border-0">Osoba</th>
              <th className="border-0">Email</th>
              <th className="border-0">Temat</th>
              <th className="border-0">Wiadomosc</th>
              <th className="border-0"></th>
            </tr>
          </thead>
          <tbody>
            {pageEmails.map(email => <TableRow key={email.id} {...email} setShow = {setIsShow} />)}
          </tbody>
        </Table>
      </Card.Body>
    </Card>
    {isShow ? 
    <div className="pb-5">
      <Card>
      <Card.Header><span className="font-weight-bold">Od:</span> {osoba} | <span className="font-weight-bold">email: </span>{email}</Card.Header>
     <ListGroup variant="flush" className="px-2">
        <ListGroup.Item ><span className="font-weight-bold">Temat</span> : {temat}</ListGroup.Item>
      </ListGroup>
      <Card.Text  className="p-4">
        {wiadomosc}
      </Card.Text>
    </Card>   
    <Button className="mt-2">Odpisz</Button>
    </div>
    : null
      }
      </>
      
  );
};

