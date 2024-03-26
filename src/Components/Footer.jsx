import "./Footer.css"
import React from 'react';
import {
      MDBFooter,
      MDBContainer,
} from 'mdb-react-ui-kit';
    

function Footer() {
      return (
        <MDBFooter className='text-center text-white'>
      <MDBContainer className='p-4'></MDBContainer>

      <div className=' p-3' >
      <br></br>
        Follow us on Social Media!
        <br></br>
        <br></br>
        <a className='text-white' href='/'>
          Instagram, 
        </a>
        <a className='text-white' href='/'>
          Facebook, 
        </a>
        <a className='text-white' href='/'>
          Twitter 
        </a>
        <br></br>
        <br></br>
        © 2024 Copyright:
        <a className='text-white' href='/'>
          Rankify.com
        </a>
        <br></br>
        <p>Questions? email us at: rankify.support@gmail.com  </p>
      </div>
    </MDBFooter>
      );
    }

export default Footer