import React, {useState, useEffect} from 'react';
import {
  Row,
  Col,
  Container
} from 'reactstrap';
import Icon from '../../Components/Icon';
import Navbar from '../../Components/Navbar';
import ApplicationCard from '../../Components/ApplicationCard';
import API from '../../Services/API';

export default function HomePage() {
  const [clients, setClients] = useState(0);
  const [donors, setDonors] = useState(0);
  const [donations, setDonations] = useState({claimedtotal: 0, activetotal: 0});

  useEffect(() => {
    let id = JSON.parse(API.userToken()).admin.id;
    API.jsonGet(`admins/${id}/get_new_clients`).then(json => {setClients(json.newclients)});
    API.jsonGet(`admins/${id}/get_new_donors`).then(json => {setDonors(json.newdonors)});
    API.jsonGet(`admins/${id}/get_donations_status`).then(json => {setDonations(json)});
  });

  return (
    <div>
      <Navbar />
      <Container>
        <Row>
          <Col lg={6}>

          </Col>
          <Col lg={6}>
            
          </Col>
        </Row>
      </Container>
    </div>
  );
}
