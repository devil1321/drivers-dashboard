
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCashRegister, faChartLine, faCloudUploadAlt, faPlus, faRocket, faTasks, faUserShield } from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Button, Dropdown, ButtonGroup } from '@themesberg/react-bootstrap';
import { Nav, Tab } from '@themesberg/react-bootstrap';
import { CounterWidget, CircleChartWidget, BarChartWidget, TeamMembersWidget, ProgressTrackWidget, RankingWidget, SalesValueWidget, SalesValueWidgetPhone, AcquisitionWidget } from "../../components/Widgets";
import { PageVisitsTable } from "../../components/Tables";
import { Form, InputGroup } from '@themesberg/react-bootstrap';
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default () => {
  return (
    <>
    

      <Row className="mt-5">
        <Col>
        <Form>
        <Form.Group className="mb-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="email@example.com" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Temat</Form.Label>
            <Form.Control type="text" placeholder="Temat" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Example textarea</Form.Label>
            <Form.Control as="textarea" rows="7" />
          </Form.Group>
          <div className="mt-3">
              <Button variant="primary" type="submit">Prześlij</Button>
          </div>
          </Form>
        </Col>
      </Row>

     
    </>
  );
};
