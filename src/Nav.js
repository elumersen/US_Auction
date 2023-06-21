import React from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand
} from 'mdb-react-ui-kit';

export default function Nav() {
  return (
    <>
      <MDBNavbar light bgColor='light'>
        <MDBContainer>
          <MDBNavbarBrand href='#'>
          <span>
            <img
              src=''
              color='black'
              height='30'
              alt=''
              loading='lazy'
            /></span>
            <img
              src='https://online-auction.state.gov/Content/Images/web/flags/PH.png'
              height='30'
              alt=''
              loading='lazy'
              />
          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>
    </>
  );
}