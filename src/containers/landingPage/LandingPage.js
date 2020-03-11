import React, {useEffect, useState} from 'react'
import axios from "axios";
import { Container, Row, Col, Navbar} from 'react-bootstrap';
import ApiCard from '../../components/ApiCard'
import { v4 as uuidv4 } from 'uuid';
import {SiteHelper} from '../../helpers/helper'

const LandingPage = () => {

    const [apiDetailsArray, setApiDetailsArray] = useState([])

    let url = window.location.href;
    let arr = url.split("/");
    let hostUrl = arr[0] + "//" + arr[2]
    useEffect(() => {
        axios.get(`${hostUrl}/data.json`)
        .then((response) => {
            if(response.status === 200) {
                setApiDetailsArray(response.data)
            }
      }).catch(error => {
      });
    },[])
    

    return (
        <>
  <Navbar bg="primary" variant="dark">
    <Navbar.Brand href="#home">
      <img
        alt=""
        src="/logo.svg"
        width="30"
        height="30"
        className="d-inline-block align-top"
      />{' '}
      {SiteHelper.LANDING_PAGE_HEADER}
    </Navbar.Brand>
  </Navbar>
  <Container className='bg-light' >
      <Row>
            <Col align="left">
                <h3>{SiteHelper.SUB_HEADER_1}</h3>
            </Col>
      </Row>
      <Row>
            <Col align="left">
                <h6>{SiteHelper.SUB_HEADER_2}</h6>
            </Col>
      </Row>
      <Row>
          {
              apiDetailsArray.map((apiValue => {return(
                <Col key={uuidv4()} sm={12} md={6} lg={4} align="left">
                <ApiCard
                key={uuidv4()}
                api={apiValue}
                />
            </Col>
              )}))
          }
      </Row>
  
  </Container>
</>

    )
}



export default LandingPage;
