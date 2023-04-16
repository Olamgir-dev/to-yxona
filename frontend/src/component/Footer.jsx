import React from 'react'
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
function Footer() {
  return (
    <>
      <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
        <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
          <div className='me-5 d-none d-lg-block'>
            <span>Ijtimoiy tarmoqlarda biz bilan bog'laning:</span>
          </div>
          <div className='fs-5'>
            <a href='Tel:+998942981280' className='me-4 text-reset'>
              <i class='bx bxs-phone-call'></i>
            </a>
            <a href='https://www.facebook.com/profile.php?id=100079671891120' className='me-4 text-reset'>
              <i class='bx bxl-facebook-circle'></i>
            </a>
            <a href='https://twitter.com/AbdullaMirzaev' className='me-4 text-reset'>
              <i class='bx bxl-twitter'></i>
            </a>
            <a href='https:/google.com' className='me-4 text-reset'>
              <i class='bx bxl-google'></i>
            </a>
            <a href='https://www.instagram.com/olamgir.ibrohimov/' className='me-4 text-reset'>
              <i class='bx bxl-instagram'></i>
            </a>
            <a href='https://www.linkedin.com/in/olamgir-ibrohimov-545624258/' className='me-4 text-reset'>
              <i class='bx bxl-linkedin-square'></i>
            </a>
            <a href="https://github.com/Olamgir-div" className='me-4 text-reset'>
              <i class='bx bxl-github'></i>
            </a>
          </div>
        </section>

        <section className=''>
          <MDBContainer className='text-center text-md-start mt-5'>
            <MDBRow className='mt-3'>
              <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
                <h6 className='text-uppercase fw-bold mb-4'>
                  <MDBIcon color='secondary' icon='gem' className='me-3' />
                  SHIRKAT NOMI
                </h6>
                <p>
                  Bu yerda siz altbilgi tarkibini tartibga solish uchun qatorlar va 
                  ustunlardan foydalanishingiz mumkin. Lorem ipsum dolor sit amet, 
                  consectetur adipisicing elit
                </p>
              </MDBCol>

              <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4'>
                <h6 className='text-uppercase fw-bold mb-4'>Texnologiyalar</h6>
                <p>
                  <a href='https://react.dev/' className='text-reset'>
                   React.js
                  </a>
                </p>
                <p>
                  <a href='https://nodejs.org/en' className='text-reset'>
                    Node.js
                  </a>
                </p>
                <p>
                  <a href="https://getbootstrap.com/docs/5.0/getting-started/introduction/" className='text-reset'>
                    bootstrap 5
                  </a>
                </p>
                <p>
                  <a href='https://www.mongodb.com/' className='text-reset'>
                    Mongodb
                  </a>
                </p>
              </MDBCol>

              <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-4'>
                <h6 className='text-uppercase fw-bold mb-4'>FOYDALI HAVOLALAR</h6>
                <p>
                  <a href='https://the-weather-1280.netlify.app/' className='text-reset'>
                    Ob xavo
                  </a>
                </p>
                <p>
                  <a href='#!' className='text-reset'>
                    Settings
                  </a>
                </p>
                <p>
                  <a href='#!' className='text-reset'>
                    Orders
                  </a>
                </p>
                <p>
                  <a href='#!' className='text-reset'>
                    Help
                  </a>
                </p>
              </MDBCol>


              <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
                <h6 className='text-uppercase fw-bold mb-4'>ALOQA</h6>
                <p>
                  <i class='bx bxs-home fs-5 fw-bold me-1'></i>
                  Toshkent sh , yunsobod t
                </p>
                <p>
                  <i class='bx bxl-gmail fs-5 fw-bold me-1'></i>
                  olamgir2003@gmail.com
                </p>
                <p>
                  <i class='bx bxs-phone-call fs-5 fw-bold me-1 '></i>
                  +998942981280
                </p>
                <a color='secondary' icon='phone' className=' nav-link' href="https://t.me/OlamgirIbrohimov">
                  <i class='bx bxl-telegram fs-5 fw-bold me-1'></i>
                  @OlamgirIbrohimov
                </a>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>

        <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2021 Mualliflik huquqi:
          <a className='text-reset fw-bold' href='https://t.me/OlamgirIbrohimov'>
           Olamgir Ibrohimov
          </a>
        </div>
      </MDBFooter>
    </>
  )
}

export default Footer