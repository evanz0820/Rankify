import "./Footer.css"
import React from 'react';
import {
      MDBFooter,
      MDBContainer,
      MDBCol,
      MDBRow,
      MDBIcon,
      MDBBtn
} from 'mdb-react-ui-kit';
    

function Footer() {
      return (
        <MDBFooter className='text-center text-white'>
      <MDBContainer className='p-4'></MDBContainer>

      <div className=' p-3' >
        © 2024 Copyright:
        <a className='text-white' href='/'>
          Rankify.com
        </a>
      </div>
    </MDBFooter>
      );
    }

export default Footer