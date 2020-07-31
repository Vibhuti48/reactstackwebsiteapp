import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar,Nav,NavDropdown,Form,FormControl,Button, Container, Row, Col,Fade, ProgressBar, Carousel } from 'react-bootstrap';
import navLogo  from './assets/logo.png';
import bannerLogo  from './assets/banner-img.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CountUp from 'react-countup';
import { faMedal } from "@fortawesome/free-solid-svg-icons";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Progress from 'react-progressbar';
import LineIcon from 'react-lineicons';
import videoBg  from './assets/video-bg.jpeg';
import teamImg1 from './assets/team-01.png';
import teamImg2 from './assets/team-02.png';
import teamImg3 from './assets/team-03.png';
import teamImg4 from './assets/team-04.png';
import countingImage from './assets/progress-bg.jpg';
import skillLayout from './assets/skills.jpg';
import workImg1 from './assets/img-1.jpg';
import workImg2 from './assets/img-2.jpg';
import workImg3 from './assets/img-3.jpg';
import workImg4 from './assets/img-4.jpg';
import workImg5 from './assets/img-5.jpg';
import workImg6 from './assets/img-6.jpg';
import slideImage1 from './assets/img1.jpg';
import slideImage2 from './assets/img2.jpg';
import slideImage3 from './assets/img3.jpg';
import slideImage4 from './assets/img4.png';
import slideImage5 from './assets/img5.png';
import blogImg1 from './assets/blog-img1.jpg';
import blogImg2 from './assets/blog-img2.jpg';
import blogImg3 from './assets/blog-img3.jpg';
import clientImg1 from './assets/clientimg1.png';
import clientImg2 from './assets/clientimg2.png';
import clientImg3 from './assets/clientimg3.png';
import clientImg4 from './assets/clientimg4.png';
import { animations } from 'react-animation';
import { fadeInLeft } from 'react-animations';
import './stackApp.css';


function App() {
  return (
    <div className="App">
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light" fixed ="top" id="topNavigation">
      <Container>
         <Navbar.Brand href="#home">
            <img
               src= {navLogo}
               className="d-inline-block align-top"
               alt="Company Logo"
               />
         </Navbar.Brand>
         <Navbar.Toggle aria-controls="responsive-navbar-nav" />
         <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
               <Nav.Link href="#home" className="navbar__link" active>Home</Nav.Link>
               <Nav.Link href="#feature" className="navbar__link">Feature</Nav.Link>
               <Nav.Link href="#services"  className="navbar__link">Services</Nav.Link>
               <Nav.Link href="#team"  className="navbar__link">Team</Nav.Link>
               <Nav.Link href="#pricing"  className="navbar__link">Pricing</Nav.Link>
               <Nav.Link href="#works"  className="navbar__link">Works</Nav.Link>
               <Nav.Link href="#testimonial"  className="navbar__link">Testimonial</Nav.Link>
               <Nav.Link href="#blog"  className="navbar__link">Blog</Nav.Link>
               <Nav.Link href="#contact"  className="navbar__link">Contact</Nav.Link>
            </Nav>
         </Navbar.Collapse>
      </Container>
   </Navbar>
   <Container>
      <Row>
         <Col lg={12} md={12} sm={12} xl={12}>
         <div className="bannerText text-center">
            <h2 className="bannerTitle">We Discover, Design & Build Digital <br /> Presence of Businesses</h2>
            <div>
               <Button variant="primary" className="downloadBtn">Download Now</Button>{' '}
            </div>
         </div>
         <div className="bannerImage" style={{animation: animations.fadeInUp}}>
            <img
               src= {bannerLogo}
               className="d-inline-block align-top"
               alt="Banner"
               />
         </div>
         </Col>
      </Row>
   </Container>
   <Container fluid id="feature">
      <Row>
         <Col lg={6} md={12}>
         <div className="leftContent">
            <div>
               <h2 className="leftContentTitle  inLeft">We are helping to grow <br /> your business</h2>
            </div>
            <p className="leftPara">A digital studio specialising in User Experience & eCommerce, we combine innovation with digital craftsmanship to help brands fulfill their potential.</p>
            <Button variant="primary" className="downloadBtn">More About Us</Button>{' '}
         </div>
         </Col>
         <Col lg={6} md={12} className="featureContent">
         <div className="rightContent">
            <div className="featureItem inDown">
               <div className="featureIcon">
                  <LineIcon className="lni lni-microphone lni-lg" />
               </div>
               <div className="featureIconContent">
                  <h3>What we do</h3>
                  <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia con- sequuntur magni dolores </p>
               </div>
            </div>
            <div className="featureItem inDown">
               <div className="featureIcon">
                  <LineIcon className="lni lni-users lni-lg" />
               </div>
               <div className="featureIconContent">
                  <h3>Meet our team </h3>
                  <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia con- sequuntur magni dolores </p>
               </div>
            </div>
            <div className="featureItem inDown">
               <div className="featureIcon">
                  <FontAwesomeIcon icon={faMedal} size = "3x" className="medalIcon" />
               </div>
               <div className="featureIconContent">
                  <h3>What we do </h3>
                  <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia con- sequuntur magni dolores </p>
               </div>
            </div>
         </div>
         </Col>
      </Row>
   </Container>
   <div className="serviceLayout" id="services">
      <Container>
         <div className="serviceHeading text-center">
            <h2 class="serviceTitle inDown">Our Services</h2>
            <p>A desire to help and empower others between community contributors in technology <br /> began to grow in 2020.</p>
         </div>
         <Row>
            <Col lg={4} md={6} xs={12}>
            <div className="serviceItems inRight">
               <div className="serviceIcon">
                  <LineIcon className="lni lni-pencil" id="iconList" />
               </div>
               <div className="serviceContent">
                  <h3>Content Writing</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde perspiciatis dicta labore nulla beatae quaerat quia incidunt laborum aspernatur...</p>
               </div>
            </div>
            </Col>
            <Col lg={4} md={6} xs={12}>
            <div className="serviceItems inRight">
               <div className="serviceIcon">
                  <LineIcon className="lni lni-briefcase" id="iconList" />
               </div>
               <div className="serviceContent">
                  <h3>Digital Marketing</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde perspiciatis dicta labore nulla beatae quaerat quia incidunt laborum aspernatur...</p>
               </div>
            </div>
            </Col>
            <Col lg={4} md={6} xs={12}>
            <div className="serviceItems inRight">
               <div className="serviceIcon">
                  <LineIcon className="lni lni-cog" id="iconList" />
               </div>
               <div className="serviceContent">
                  <h3>web Developement</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde perspiciatis dicta labore nulla beatae quaerat quia incidunt laborum aspernatur...</p>
               </div>
            </div>
            </Col>
            <Col lg={4} md={6} xs={12}>
            <div className="serviceItems inRight">
               <div className="serviceIcon">
                  <LineIcon className="lni lni-mobile" id="iconList" />
               </div>
               <div className="serviceContent">
                  <h3>Ios & Android</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde perspiciatis dicta labore nulla beatae quaerat quia incidunt laborum aspernatur...</p>
               </div>
            </div>
            </Col>
            <Col lg={4} md={6} xs={12}>
            <div className="serviceItems inRight">
               <div className="serviceIcon">
                  <LineIcon className="lni lni-layers" id="iconList" />
               </div>
               <div className="serviceContent">
                  <h3>UI&UX Design</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde perspiciatis dicta labore nulla beatae quaerat quia incidunt laborum aspernatur...</p>
               </div>
            </div>
            </Col>
            <Col lg={4} md={6} xs={12}>
            <div className="serviceItems inRight">
               <div className="serviceIcon">
                  <LineIcon className="lni lni-rocket"  id="iconList"/>
               </div>
               <div className="serviceContent">
                  <h3>Branding & Identity</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde perspiciatis dicta labore nulla beatae quaerat quia incidunt laborum aspernatur...</p>
               </div>
            </div>
            </Col>
         </Row>
      </Container>
   </div>
   <div className="videoSection watchVideo" >
      <div className="overlay"></div>
      <Container>
         <Row>
            <Col md={12} sm={12}>
            <div className="videoWatchContent text-center" >
               <a href={"//https://www.youtube.com/watch?v=yP6kdOZHids"} className="videoPlayer" >
                  <LineIcon className="lni lni-video" />
               </a>
               <h2 className="videoTitle">Watch Video</h2>
            </div>
            </Col>
         </Row>
      </Container>
   </div>
   <div className="teamLayout" id="team">
      <Container>
         <div className="teamHeading text-center">
            <h2 className="teamTitle inDown">Meet our team</h2>
            <p>A desire to help and empower others between community contributors in technology <br /> began to grow in 2020.</p>
         </div>
         <Row>
            <Col lg={3} md={6} sm={6}>
            <div className="teamItem inRight text-center">
               <div className="teamImage">
                  <img
                     src= {teamImg1}
                     className="d-inline-block align-top"
                     width={280}
                     height={280}
                     alt="teamList"
                     />
               </div>
               <div className="teamOverlay">
                  <div className="socialIcon text-center">
                     <ul className="socialIconList">
                        <li>
                           <a href="#">
                              <LineIcon className="lni lni-facebook-filled" />
                           </a>
                        </li>
                        <li>
                           <a href="#">
                              <LineIcon className="lni lni-twitter-filled" />
                           </a>
                        </li>
                        <li>
                           <a href="#">
                              <LineIcon className="lni lni-instagram-filled" />
                           </a>
                        </li>
                     </ul>
                  </div>
               </div>
            </div>
            <div className="teamInfoText">
               <h3><a href="#">David Smith</a></h3>
               <p>Chief Operating Officer</p>
            </div>
            </Col>
            <Col lg={3} md={6} sm={6}>
            <div className="teamItem inRight text-center">
               <div className="teamImage">
                  <img
                     src= {teamImg2}
                     className="d-inline-block align-top teamList"
                     width={280}
                     height={280}
                     alt="teamList"
                     />
               </div>
               <div className="teamOverlay">
                  <div className="socialIcon text-center">
                     <ul className="socialIconList">
                        <li>
                           <a href="#">
                              <LineIcon className="lni lni-facebook-filled" />
                           </a>
                        </li>
                        <li>
                           <a href="#">
                              <LineIcon className="lni lni-twitter-filled" />
                           </a>
                        </li>
                        <li>
                           <a href="#">
                              <LineIcon className="lni lni-instagram-filled" />
                           </a>
                        </li>
                     </ul>
                  </div>
               </div>
            </div>
            <div className="teamInfoText">
               <h3><a href="#">Eric Peterson</a></h3>
               <p>Product Designer </p>
            </div>
            </Col>
            <Col lg={3} md={6} sm={6}>
            <div className="teamItem inRight text-center">
               <div className="teamImage">
                  <img
                     src= {teamImg3}
                     className="d-inline-block align-top"
                     width={280}
                     height={280}
                     alt="teamList"
                     />
               </div>
               <div className="teamOverlay">
                  <div className="socialIcon text-center">
                     <ul className="socialIconList">
                        <li>
                           <a href="#">
                              <LineIcon className="lni lni-facebook-filled" />
                           </a>
                        </li>
                        <li>
                           <a href="#">
                              <LineIcon className="lni lni-twitter-filled" />
                           </a>
                        </li>
                        <li>
                           <a href="#">
                              <LineIcon className="lni lni-instagram-filled" />
                           </a>
                        </li>
                     </ul>
                  </div>
               </div>
            </div>
            <div className="teamInfoText">
               <h3><a href="#">Durwin Babb</a></h3>
               <p>Lead Designer</p>
            </div>
            </Col>
            <Col lg={3} md={6} sm={6}>
            <div className="teamItem inRight text-center">
               <div className="teamImage">
                  <img
                     src= {teamImg4}
                     className="d-inline-block align-top"
                     width={280}
                     height={280}
                     alt="teamList"
                     />
               </div>
               <div className="teamOverlay">
                  <div className="socialIcon text-center">
                     <ul className="socialIconList">
                        <li>
                           <a href="#">
                              <LineIcon className="lni lni-facebook-filled" />
                           </a>
                        </li>
                        <li>
                           <a href="#">
                              <LineIcon className="lni lni-twitter-filled" />
                           </a>
                        </li>
                        <li>
                           <a href="#">
                              <LineIcon className="lni lni-instagram-filled" />
                           </a>
                        </li>
                     </ul>
                  </div>
               </div>
            </div>
            <div className="teamInfoText">
               <h3><a href="#">Marijn Otte</a></h3>
               <p>Front-end developer</p>
            </div>
            </Col>
         </Row>
      </Container>
   </div>
   <div className="countingSection" id="counting">
      <div className="overlay"></div>
      <Container>
         <Row className="justify-content-between">
            <Col lg={3} md={6} xs={12}>
            <div className="countingBox" style={{animation: animations.fadeInUp}}>
               <div className="countingIcon">
                  <LineIcon className="lni lni-users"  id="icon"/>
               </div>
               <div className="counter">
                  <h3>
                     <CountUp  start={22500} end={23576} duration={1.75} />
                  </h3>
                  <p>Users</p>
               </div>
            </div>
            </Col>
            <Col lg={3} md={6} xs={12}>
            <div className="countingBox" style={{animation: animations.fadeInUp}}>
               <div className="countingIcon">
                  <LineIcon className="lni lni-emoji-smile" id="icon" />
               </div>
               <div className="counter">
                  <h3>
                     <CountUp  start={1200} end={2124} duration={1.75} />
                  </h3>
                  <p>Positive Reviews</p>
               </div>
            </div>
            </Col>
            <Col lg={3} md={6} xs={12}>
            <div className="countingBox" style={{animation: animations.fadeInUp}}>
               <div className="countingIcon">
                  <LineIcon className="lni lni-download" id="icon" />
               </div>
               <div className="counter">
                  <h3>
                     <CountUp  start={53587} end={54598} duration={1.75} />
                  </h3>
                  <p>Downloads</p>
               </div>
            </div>
            </Col>
            <Col lg={3} md={6} xs={12}>
            <div className="countingBox" style={{animation: animations.fadeInUp}}>
               <div className="countingIcon">
                  <LineIcon className="lni lni-thumbs-up" id="icon" />
               </div>
               <div class="counter">
                  <h3>
                     <CountUp  start={2300} end={3211} duration={1.75} />
                  </h3>
                  <p>Followers</p>
               </div>
            </div>
            </Col>
         </Row>
      </Container>
   </div>
   <div className="pricingLayout" id="pricing">
      <Container>
         <div className="pricingHeading text-center">
            <h2 className="pricingTitle inDown">Best Pricing</h2>
            <p>A desire to help and empower others between community contributors in technology <br /> began to grow in 2020.</p>
         </div>
         <Row>
            <Col lg={4} md={6} xs={12} className="pricingBox">
            <div className="pricingTable inLeft">
               <div className="pricingTableTitle">
                  <h3>Basic</h3>
               </div>
               <div className="pricingHeader">
                  <p className="priceValue">$12.90<span>/ Month</span></p>
               </div>
               <ul className="priceDescription">
                  <li>Business Analyzing</li>
                  <li>24/7 Tech Suport</li>
                  <li>Operational Excellence</li>
                  <li>Business Idea Ready</li>
                  <li>2 Database</li>
                  <li>Customer Support</li>
               </ul>
               <Button variant="primary" className="btnGetit" id="btnBlue">Get it</Button>{' '}
            </div>
            </Col>
            <Col lg={4} md={6} xs={12} className="pricingBox">
            <div className="pricingTable inLeft">
               <div className="pricingTableTitle" id="black">
                  <h3>Proffesional</h3>
               </div>
               <div className="pricingHeader">
                  <p className="priceValue" id="blue">$49.90<span>/ Month</span></p>
               </div>
               <ul className="priceDescription">
                  <li>Business Analyzing</li>
                  <li>24/7 Tech Suport</li>
                  <li>Operational Excellence</li>
                  <li>Business Idea Ready</li>
                  <li>2 Database</li>
                  <li>Customer Support</li>
               </ul>
               <Button variant="primary" className="btnGetit" id="btnBlack">Get it</Button>{' '}
            </div>
            </Col>
            <Col lg={4} md={6} xs={12} className="pricingBox">
            <div className="pricingTable inLeft">
               <div className="pricingTableTitle">
                  <h3>Expert</h3>
               </div>
               <div className="pricingHeader">
                  <p className="priceValue">$89.90<span>/ Month</span></p>
               </div>
               <ul className="priceDescription">
                  <li>Business Analyzing</li>
                  <li>24/7 Tech Suport</li>
                  <li>Operational Excellence</li>
                  <li>Business Idea Ready</li>
                  <li>2 Database</li>
                  <li>Customer Support</li>
               </ul>
               <Button variant="primary" className="btnGetit" id="btnBlue">Get it</Button>{' '}
            </div>
            </Col>
         </Row>
      </Container>
   </div>
   <div className="skillsArea">
      <Container>
         <Row>
            <Col lg={6} md={12} xs={12} className="skillColumn inLeft">
            <img
               src= {skillLayout}
               className="d-inline-block align-top skillImg"
               alt="skillimage"
               />
            </Col>
            <Col lg={6} md={12} xs={12} className="skillColumn inRight">
            <div className="skillHeading">
               <h2 className="skillTitle">Our <span>Skill</span></h2>
               <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus architecto laudantium dolorem, aut aspernatur modi minima alias provident obcaecati! Minima odio porro nemo magnam dolore minus asperiores veniam dolorum est!
               </p>
               <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, nesciunt possimus quaerat ipsam, corporis architecto aspernatur non aut! Dolorum consectetur placeat excepturi, perspiciatis sunt.
               </p>
            </div>
            <div className="skillsProgressReport">
               <div className="progressBox">
                  <h5>Strategy &amp; Analysis <span >88%</span></h5>
                  <div className="progressSection" id="progressLine">
                     <ProgressBar  now={88}style={{height:"8px"}}  />
                  </div>
               </div>
               <div className="progressBox">
                  <h5>Economic Growth <span className="ml-auto">95%</span></h5>
                  <div className="progressSection" id="progressLine">
                     <ProgressBar now={95} style={{height:"8px"}} />
                  </div>
               </div>
               <div className="progressBox">
                  <h5>Achievers Goal <span className="ml-auto">70%</span></h5>
                  <div className="progressSection" id="progressLine">
                     <ProgressBar  now={70} style={{height:"8px"}} />
                  </div>
               </div>
            </div>
            </Col>
         </Row>
      </Container>
   </div>
   <div className="workSection" id="works">
      <Container>
         <div className="workHeading text-center">
            <h2 className="workTitle inDown">Our Works</h2>
            <p>A desire to help and empower others between community contributors in technology <br /> began to grow in 2020.</p>
         </div>
         <Row>
            <Col lg={12} md={12} xs={12}>
            <div className="workControl text-center">
               <Button variant="primary" className="btnGetit btnEffect"  id="button1">All</Button>{' '}
               <Button variant="primary" className="btnGetit btnEffect"  id="button2">Design</Button>{' '}
               <Button variant="primary" className="downloadBtn btnEffect"  id="button3">Developement</Button>{' '}
               <Button variant="primary" className="btnGetit btnEffect"  id="button4">Print</Button>{' '}
            </div>
            </Col>
         </Row>
         <Row>
            <Col  md={4} xs={12} className="workBox">
            <div className="workItems">
               <div className="workItemsList">
                  <img
                     src= {workImg1}
                     className="d-inline-block align-top"
                     alt="workImageSection"
                     max-width="100%"
                     height="auto"
                     />
               </div>
               <div className="workContent">
                  <div className="fancyTable">
                     <div className="tableCell">
                        <div className="zoom-icon">
                           <a className="lightbox" href={workImg1}>
                              <LineIcon className="lni lni-eye item-icon" />
                           </a>
                        </div>
                        <a href="#">Creative Design</a>
                     </div>
                  </div>
               </div>
            </div>
            </Col>
            <Col  md={4} xs={12} className="workBox">
            <div className="workItems">
               <div className="workItemsList">
                  <img
                     src= {workImg2}
                     className="d-inline-block align-top"
                     alt="workImageSection"
                     max-width="100%"
                     height="auto"
                     />
               </div>
               <div className="workContent">
                  <div className="fancyTable">
                     <div className="tableCell">
                        <div className="zoom-icon">
                           <a className="lightbox" href={workImg2}>
                              <LineIcon className="lni lni-eye item-icon" />
                           </a>
                        </div>
                        <a href="#">Retina Reddy</a>
                     </div>
                  </div>
               </div>
            </div>
            </Col>
            <Col md={4} xs={12} className="workBox">
            <div className="workItems">
               <div className="workItemsList">
                  <img
                     src= {workImg3}
                     className="d-inline-block align-top"
                     alt="workImageSection"
                     max-width="100%"
                     height="auto"
                     />
               </div>
               <div className="workContent">
                  <div className="fancyTable">
                     <div className="tableCell">
                        <div className="zoom-icon">
                           <a className="lightbox" href={workImg3}>
                              <LineIcon className="lni lni-eye item-icon" />
                           </a>
                        </div>
                        <a href="#">Responsive</a>
                     </div>
                  </div>
               </div>
            </div>
            </Col>
         </Row>
         <Row>
            <Col lg={4} md={6} xs={12} className="workBox">
            <div className="workItems">
               <div className="workItemsList">
                  <img
                     src= {workImg4}
                     className="d-inline-block align-top"
                     alt="workImageSection"
                     max-width="100%"
                     height="auto"
                     />
               </div>
               <div className="workContent">
                  <div className="fancyTable">
                     <div className="tableCell">
                        <div className="zoom-icon">
                           <a className="lightbox" href={workImg4}>
                              <LineIcon className="lni lni-eye item-icon" />
                           </a>
                        </div>
                        <a href="#">Well Documented</a>
                     </div>
                  </div>
               </div>
            </div>
            </Col>
            <Col lg={4} md={6} xs={12} className="workBox">
            <div className="workItems">
               <div className="workItemsList">
                  <img
                     src= {workImg5}
                     className="d-inline-block align-top"
                     alt="workImageSection"
                     max-width="100%"
                     height="auto"
                     />
               </div>
               <div className="workContent">
                  <div className="fancyTable">
                     <div className="tableCell">
                        <div className="zoom-icon">
                           <a className="lightbox" href={workImg5}>
                              <LineIcon className="lni lni-eye item-icon" />
                           </a>
                        </div>
                        <a href="#">Custom Support</a>
                     </div>
                  </div>
               </div>
            </div>
            </Col>
            <Col lg={4} md={6} xs={12} className="workBox">
            <div className="workItems">
               <div className="workItemsList">
                  <img
                     src= {workImg6}
                     className="d-inline-block align-top"
                     alt="workImageSection"
                     max-width="100%"
                     height="auto"
                     />
               </div>
               <div className="workContent">
                  <div className="fancyTable">
                     <div className="tableCell">
                        <div className="zoom-icon">
                           <a className="lightbox" href={workImg6}>
                              <LineIcon className="lni lni-eye item-icon" />
                           </a>
                        </div>
                        <a href="#">User friendly</a>
                     </div>
                  </div>
               </div>
            </div>
            </Col>
         </Row>
      </Container>
   </div>
   <div className="testimonialSection" id="testimonial">
      <div className="overlay"></div>
      <Container>
         <Carousel>
            <Carousel.Item>
               <img
                  className="d-block w-20 testimonialImg"
                  src={slideImage1}
                  alt="First slide"
                  />
               <Carousel.Caption>
                  <h3>First slide label</h3>
               </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
               <img
                  className="d-block w-20 testimonialImg"
                  src={slideImage2}
                  alt="Third slide"
                  />
               <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
               </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
               <img
                  className="d-block w-20 testimonialImg"
                  src={slideImage3}
                  alt="Third slide"
                  />
               <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
               </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
               <img
                  className="d-block w-20 testimonialImg"
                  src={slideImage4}
                  alt="Fourth slide"
                  />
               <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
               </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
               <img
                  className="d-block w-20 testimonialImg"
                  src={slideImage5}
                  alt="Fifth slide"
                  />
               <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
               </Carousel.Caption>
            </Carousel.Item>
         </Carousel>
      </Container>
   </div>
   <div className="blogSection" id="blog">
      <Container>
         <div className="blogHeading text-center">
            <h2 className="blogTitle inDown"> Latest Blog</h2>
            <p>A desire to help and empower others between community contributors in technology <br /> began to grow in 2020.</p>
         </div>
         <Row>
            <Col lg={4} md={6} xs={12} className="blogItem">
            <div className="blogItemBox inLeft">
               <div className="blogItemImg">
                  <img
                     src= {blogImg1}
                     className="d-inline-block align-top"
                     alt="BlogImage"
                     />
               </div>
               <div className="blogItemText">
                  <h3>
                     <a href="#">Suspendisse dictum non velit</a>
                  </h3>
                  <p>
                     Nunc in mauris a ante rhoncus tristique vitae et nisl. Quisque ullamcorper rutrum lacinia. Integer varius ornare egestas.
                  </p>
                  <Button variant="primary" className="btnGetit btnRead">Read More</Button>{' '}
               </div>
            </div>
            </Col>
            <Col lg={4} md={6} xs={12} className="blogItem">
            <div className="blogItemBox inLeft">
               <div className="blogItemImg">
                  <img
                     src= {blogImg2}
                     className="d-inline-block align-top"
                     alt="BlogImage"
                     />
               </div>
               <div className="blogItemText">
                  <h3>
                     <a href="#">Remarkably Did Increasing</a>
                  </h3>
                  <p>
                     Nunc in mauris a ante rhoncus tristique vitae et nisl. Quisque ullamcorper rutrum lacinia. Integer varius ornare egestas.
                  </p>
                  <Button variant="primary" className="btnGetit btnRead">Read More</Button>{' '}
               </div>
            </div>
            </Col>
            <Col lg={4} md={6} xs={12} className="blogItem">
            <div className="blogItemBox inLeft">
               <div className="blogItemImg">
                  <img
                     src= {blogImg3}
                     className="d-inline-block align-top"
                     alt="BlogImage"
                     />
               </div>
               <div className="blogItemText">
                  <h3>
                     <a href="#">Changing the topic scope</a>
                  </h3>
                  <p>
                     Nunc in mauris a ante rhoncus tristique vitae et nisl. Quisque ullamcorper rutrum lacinia. Integer varius ornare egestas.
                  </p>
                  <Button variant="primary" className="btnGetit btnRead">Read More</Button>{' '}
               </div>
            </div>
            </Col>
         </Row>
      </Container>
   </div>
   <div className="clientSection" id="clients">
      <Container>
         <div className="clientHeading text-center">
            <h2 className="clientTitle inDown">Notable Clients</h2>
            <p>Over the last 20 years, we have helped and guided organisations to achieve outstanding results</p>
         </div>
         <Row>
            <Col lg={3} md={6} sm={6} style={{animation: animations.fadeInUp}}>
            <div className="clientItemBox">
               <img
                  src= {clientImg1}
                  className="d-inline-block align-top"
                  alt="Client Image"
                  />
            </div>
            </Col>
            <Col lg={3} md={6} sm={6} style={{animation: animations.fadeInUp}}>
            <div className="clientItemBox">
               <img
                  src= {clientImg2}
                  className="d-inline-block align-top"
                  alt="Client Image"
                  />
            </div>
            </Col>
            <Col lg={3} md={6} sm={6} style={{animation: animations.fadeInUp}}>
            <div className="clientItemBox">
               <img
                  src= {clientImg3}
                  className="d-inline-block align-top clientItemImg"
                  alt="Client Image"
                  />
            </div>
            </Col>
            <Col lg={3} md={6} sm={6} style={{animation: animations.fadeInUp}}>
            <div className="clientItemBox">
               <img
                  src= {clientImg4}
                  className="d-inline-block align-top clientItemImg"
                  alt="Client Image"
                  />
            </div>
            </Col>
         </Row>
      </Container>
   </div>
   <div className="contactSection" id="contact">
      <Container>
         <Row style={{animation: animations.fadeInUp}}>
            <Col lg={6} md={6} sm={12}>
            <div className="contactBlock">
               <Form>
                  <Form.Row>
                     <Form.Group as={Col} controlId="formGridName">
                        <Form.Control type="text" placeholder="Name" />
                     </Form.Group>
                     <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Control type="email" placeholder="Email" />
                     </Form.Group>
                  </Form.Row>
                  <Form.Group controlId="formGridSubject">
                     <Form.Control placeholder="Subject" />
                  </Form.Group>
                  <Form.Group controlId="exampleForm.ControlTextarea1">
                     <Form.Control as="textarea" rows="5" placeholder="Message" />
                  </Form.Group>
                  <Button size="lg" variant="primary" type="submit" className="float-left conatactBtn">
                  Send Message
                  </Button>
               </Form>
            </div>
            </Col>
            <Col lg={6} md={6} sm={12}>
            <div className="contactRightArea" style={{animation: animations.fadeInUp}} id="rightContact">
               <div class="contactTitle">
                  <h1>We're a friendly bunch..</h1>
                  <p>We create projects for companies and startups with a passion for quality</p>
               </div>
               <h2>Contact Us</h2>
               <div className="contactRight">
                  <div className="singleContact">
                     <div className="contactIcon">
                        <LineIcon className="lni lni-map-marker" />
                     </div>
                     <p>ADDRESS: 28 Green Tower, New York City, USA</p>
                  </div>
                  <div className="singleContact">
                     <div className="contactIcon">
                        <LineIcon className="lni lni-envelope" />
                     </div>
                     <p><a href="#">Email: contact@stuck.com</a></p>
                  </div>
                  <div className="singleContact">
                     <div className="contactIcon">
                     <LineIcon className="lni lni-phone" />
                     </div>
                     <p><a href="#">Phone: +84 846 250 592</a></p>
                  </div>
               </div>
            </div>
            </Col>
         </Row>
      </Container>
   </div>

   <div className="blackBox">
      <Container>
         <Row>
            <Col lg={4} md={3} sm={12}>
               <div className="footerLogo">
               <img
               src= {navLogo}
               className="d-inline-block align-top"
               alt="Banner"
               />
               </div>
            </Col>
            <Col lg={4} md={4} sm={12} className="socialMiddleSection">
               <div className="socialIconFooter text-center">
                  <a className="facebook" href="#"><LineIcon className="lni lni-facebook-filled" /></a>
                  <a className="twitter" href="#"><LineIcon className=" lni lni-twitter-filled" /></a>
                  <a className="instagram" href="#"><LineIcon className="lni lni-instagram-filled" /></a>
                  <a className="linkedin" href="#"><LineIcon className="lni lni-linkedin" /></a>
               </div>
            </Col>
            <Col lg={4} md={5} sm={12} className="lastLine">
            <p class="float-right">Designed and Developed by <a href="index.html" >UIdeck</a></p>
            </Col>
         </Row>
      </Container>
   </div>
    </div>
  );
}

export default App;
