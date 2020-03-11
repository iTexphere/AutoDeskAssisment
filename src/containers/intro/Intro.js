import React from 'react'
import {  Navbar } from 'react-bootstrap';
import {SiteHelper} from '../../helpers/helper'

 const Intro = () => {
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
      {SiteHelper.INTRO_PAGE_HEADER}
    </Navbar.Brand>
  </Navbar>
      </>
    )
}

export default Intro;
