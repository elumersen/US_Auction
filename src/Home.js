import React, { useState } from 'react';
import {
  MDBNavbar,
  MDBContainer,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBDropdown,
  MDBDropdownMenu,
  MDBDropdownToggle,
  MDBDropdownItem,
  MDBNavbarBrand,
} from 'mdb-react-ui-kit';

export default function Home() {
  const [showNavColor, setShowNavColor] = useState(false);
  const [showNavColorSecond, setShowNavColorSecond] = useState(false);
  const [showNavColorThird, setShowNavColorThird] = useState(false);
  const [showNavRight, setShowNavRight] = useState(false);

  return (
    <>
      <MDBNavbar expand='lg' dark bgColor='primary'>
        <MDBContainer fluid>
          <MDBNavbarBrand className='ml-5' href='#'>
          <img
              src='https://online-auction.state.gov/Content/Images/web/flags/PH.png'
              height='30'
              alt=''
              loading='lazy'
              />
          </MDBNavbarBrand>
          <MDBNavbarToggler
            type='button'
            data-target='#navbarColor02'
            aria-controls='navbarColor02'
            aria-expanded='false'
            aria-label='Toggle navigation'
            onClick={() => setShowNavColorSecond(!showNavColorSecond)} >
            <MDBIcon icon='bars' fas />
          </MDBNavbarToggler>
            <MDBCollapse navbar show={showNavRight}>
          <MDBNavbarNav right fullWidth={false} className='mx-5 mb-2 mb-lg-0'>
            <MDBNavbarItem>
              <MDBNavbarLink active aria-current='page' href='#' className=' mx-5'>
                Home
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink active aria-current='page' href='#' className=' mx-5'>
                Register
              </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
              <MDBNavbarLink active aria-current='page' href='./LoginPage' className=' mx-5'>
                Login
              </MDBNavbarLink>
            {/* </MDBNavbarItem> */}
              {/* <MDBDropdown>
                <MDBDropdownToggle tag='a' className='nav-link mx-5'>
                    Register
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem link>Action</MDBDropdownItem>
                  <MDBDropdownItem link>Another action</MDBDropdownItem>
                  <MDBDropdownItem link>Something else here</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown> */}
            {/* </MDBNavbarItem> */}
            {/* <MDBNavbarItem>
              <MDBNavbarLink disabled href='#' tabIndex={-1} aria-disabled='true'>
                Login
              </MDBNavbarLink>
            </MDBNavbarItem> */}
            </MDBNavbarItem>
          </MDBNavbarNav>
        </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>

   
    </>
  );
}