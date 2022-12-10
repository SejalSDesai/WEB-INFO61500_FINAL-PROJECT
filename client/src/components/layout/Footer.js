import React from 'react'
import './Footer.css';

 
const Footer = () => {
  const back = {backgroundImage:'url(https://res.cloudinary.com/djqty7gls/image/upload/v1670449775/shape-11_yjib92.png)'};
  const width = {width:'40px'};
  return (
    <footer className="main-footer bg-dark">
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"></link>
      <link href="https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"></link>
      <script src="https://kit.fontawesome.com/95817e6879.js" crossorigin="anonymous"></script>
      <div className="footer-top pt-130">
      <div className="vector-bg" style={{...back}}></div>
                <div className="auto-container">
                    <div className="row clearfix">
                        <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                            <div className="footer-widget logo-widget">
                                {/* <figure className="footer-logo"><img src="https://res.cloudinary.com/djqty7gls/image/upload/v1670449285/logo-new_lco1yc.png" alt="" style={{...width}}></img></figure> */}
                                <div className="text">
                                    <p>At Star booking, our purpose is to enrich lives through holiday packages. We do that by leveraging our unique combination of tech expertise and human touch to meet our customers’ holiday needs.</p>
                                </div>
                                <ul className="social-links clearfix">
                                    <li><a href='https://www.facebook.com/goshoppingonline1' target='_blank' ><i className="fa fa-facebook-f"></i></a></li>
                                    <li><i className="fa fa-twitter"></i></li>
                                    <li><a href='https://www.instagram.com/goshop.nsk/' target='_blank'><i className="fa fa-instagram"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                            <div className="footer-widget links-widget">
                                <div className="widget-title">
                                    <h3>Services</h3>
                                </div>
                                <div className="widget-content">
                                    <ul className="links-list clearfix">
                                        <li>About Us</li>
                                        <li>Our Services</li>
                                        <li>Our Blog</li>
                                        <li>Contact Us</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                            <div className="footer-widget contact-widget">
                                <div className="widget-title">
                                    <h3>Contacts</h3>
                                </div>
                                <div className="widget-content">
                                    <ul className="info-list clearfix">
                                        <li><i className="fa fa-map-marker-alt"></i>Flat 20, Reynolds Neck, North Boston 02678</li>
                                        <li><i className="fa fa-microphone"></i><a href="tel:23055873407">+1(305) 587-3407</a></li>
                                        <li><i className="fa fa-envelope"></i><a href="mailto:info@example.com">info@star.com</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="auto-container">
                    <div className="bottom-inner clearfix">
                        <div className="copyright pull-left">
                            <p><a href="index.html">Start booking</a> &copy; 2022 All Right Reserved</p>
                        </div>
                        <ul className="footer-nav pull-right">
                            <li><a href="index.html">Terms of Service</a></li>
                            <li><a href="index.html">Privacy Policy</a></li>
                        </ul>
                    </div>
                </div>
      </div>

    </footer>
  )
}

export default Footer
