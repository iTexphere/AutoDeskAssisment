import React from 'react'
import {  Navbar } from 'react-bootstrap';
import {SiteHelper} from '../../helpers/helper'

 const Guide = () => {
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
      {SiteHelper.GUIDE_PAGE_HEADER}
    </Navbar.Brand>
  </Navbar>
        </>
    )
}

export default Guide;
