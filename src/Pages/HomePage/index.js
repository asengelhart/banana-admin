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
import styles from './style.module.scss';

export default function HomePage() {
  const [clients, setClients] = useState(5);
  const [donors, setDonors] = useState(5);
  const [donations, setDonations] = useState({claimedtotal: 0, activetotal: 0});

  // useEffect(() => {
  //   let id = JSON.parse(API.userToken()).admin.id;
  //   API.jsonGet(`admins/${id}/get_new_clients`).then(json => {setClients(json.newclients)});
  //   API.jsonGet(`admins/${id}/get_new_donors`).then(json => {setDonors(json.newdonors)});
  //   API.jsonGet(`admins/${id}/get_donations_status`).then(json => {setDonations(json)});
  // });

  return (
    <div>
      <Navbar />
      <div className={styles.container}>
      <Container>
        <Row>
          <Col lg={6}>
            <h1 className={styles.title}>NEW APPLICATIONS</h1>
            <ApplicationCard type='donor' userCount={donors} approvedCount={0}/>
            <ApplicationCard type='client' userCount={clients} approvedCount={0}/>
          </Col>
          <Col lg={6}>
            <div>
              <h2>Donation Card Here</h2>
            </div>
          </Col>
        </Row>
      </Container>
      </div>
    </div>
  );
}
