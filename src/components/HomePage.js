import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import accounting from '../pictures/accounting.png';
import finance from '../pictures/finance.png';
import IT from '../pictures/IT.png';
import cooking from '../pictures/cooking.png';
import media from '../pictures/media.png';
import healthcare from '../pictures/healthcare.png';
import law from '../pictures/law.png';
import music from '../pictures/music.png';
import translation from '../pictures/translation.png';
import tutoring from '../pictures/tutoring.png';
import physiotherapy from '../pictures/physiotherapy.png';
import repairing from '../pictures/repairing.png';
import electronics from '../pictures/electronics.png';
import art from '../pictures/art.png';
import graphicDesign from '../pictures/graphicDesign.png';
import './HomePage.css';



export default function HomePage(){
   
    return (
        <div>
            <div>
            <h1 className="homepage-title mb-4 px-5">Do you want to work?</h1>
            <h3 className="mb-4 px-5" >Find a job you can do</h3>
            <Container>
                <Row className='mb-5'>
                    <Col lg={true}>
                   <img className='img-fluid mb-4'
                        src={finance}
                        alt="finance"
                      />  
                       <h4>Finance</h4>
                        <ul className='p-0'>
                        <li><a href="#">Budgeting</a></li>
                        <li><a href="#">Personal finance advice</a></li>
                        <li><a href="#">Financial planning</a></li>
                        <li><a href="#">Excel & spreadsheets</a></li>
                        <li><a href="#">Expense tracking</a></li>
                        <li><a href="#">Financial analysis (basic)</a></li>

                       </ul>
                    </Col>

                    <Col lg={true}>
                      <img className='img-fluid mb-4'
                        src={accounting}
                        alt="accounting"
                      />  
                       <h4>Accounting</h4>
                        <ul className='p-0'>
                        <li><a href="#">Bookkeeping</a></li>
                        <li><a href="#">Tax reporting(basic)</a></li>
                        <li><a href="#">Invoicing</a></li>
                        <li><a href="#">Payroll(basic)</a></li>
                        <li><a href="#">Financial statements</a></li>
                        <li><a href="#">Startup accounting help</a></li>
                       </ul>
                    </Col>
                    
                    <Col lg={true}>
                      <img className='img-fluid mb-4'
                        src={IT}
                        alt="IT"
                      />  
                       <h4>IT</h4> 
                        <ul className='p-0'>
                        <li><a href="#">IT support / troubleshooting</a></li>
                        <li><a href="Tasks">Web development</a></li>
                        <li><a href="#">App testing</a></li>
                        <li><a href="#">Basic programming help</a></li>
                        <li><a href="#">Data handling</a></li>
                        <li><a href="#">System setup</a></li>
                       </ul>
                    </Col> 
                </Row>
                <Row className='mb-5'>
                    <Col lg={true}><img className='img-fluid mb-4'
                        src={cooking}
                        alt="cooking"
                      />  
                       <h4>Cooking</h4>
                        <ul className='p-0'>
                        <li><a href="#">Home cooking</a></li>
                        <li><a href="#">Meal prep</a></li>
                        <li><a href="#">Baking</a></li>
                        <li><a href="#">Catering help</a></li>
                        <li><a href="#">Recipe development</a></li>
                        <li><a href="#">Cultural / international cuisine</a></li>
                       </ul>
                       </Col>
                    <Col lg={true}>
                    <img className='img-fluid mb-4'
                        src={media}
                        alt="media and Marketing"
                      />  
                       <h4>Media and Marketing</h4>
                        <ul className='p-0'>
                        <li><a href="#">Social media management</a></li>
                        <li><a href="#">Content creation</a></li>
                        <li><a href="#">Copywriting</a></li>
                        <li><a href="#">SEO basics</a></li>
                        <li><a href="#">Email marketing</a></li>
                        <li><a href="#">Brand strategy (basic)</a></li>

                       </ul>
                       </Col>
                    <Col lg={true}>
                    <img className='img-fluid mb-4'
                        src={healthcare}
                        alt="healthcare"
                      />  
                       <h4>Healthcare</h4>
                        <ul className='p-0'>
                        <li><a href="#">Healthcare assistance</a></li>
                        <li><a href="#">Medical administration help</a></li>
                        <li><a href="#">Patient support</a></li>
                        <li><a href="#">Health education</a></li>
                        <li><a href="#">Research assistance</a></li>
                        <li><a href="#">Wellness Support</a></li>
                       </ul>
                       </Col> 
                </Row>
                 <Row className="mb-5">
                    <Col lg={true}><img className='img-fluid mb-4'
                        src={law}
                        alt="law"
                      />  
                       <h4>Law</h4>
                       <ul className='p-0'>
                        <li><a href="#">Legal Research</a></li>
                        <li><a href="#">Contract review (basic)</a></li>
                        <li><a href="#">Document drafting</a></li>
                        <li><a href="#">Compliance help</a></li>
                        <li><a href="#">Case preparation</a></li>
                        <li><a href="#">Legal translation</a></li>
                       </ul>
                       </Col>
                    <Col lg={true}>
                    <img className='img-fluid mb-4'
                        src={music}
                        alt="music and dance"
                      />  
                       <h4>Music and Dance</h4>
                        <ul className='p-0'>
                        <li><a href="#">Music lessons</a></li>
                        <li><a href="#">Dance lessons</a></li>
                        <li><a href="#">Choreography</a></li>
                        <li><a href="#">Instrument practice</a></li>
                        <li><a href="#">Music Theory</a></li>
                        <li><a href="#">Performance coaching</a></li>
                       </ul>
                       </Col>
                    <Col lg={true}>
                    <img className='img-fluid mb-4'
                        src={translation}
                        alt="translation"
                      />  
                       <h4>Translations</h4>
                        <ul className='p-0'>
                        <li><a href="#">Document translation</a></li>
                        <li><a href="#">Website translation</a></li>
                        <li><a href="#">Proofreading</a></li>
                        <li><a href="#">Localization</a></li>
                        <li><a href="#">Academic translation</a></li>
                        <li><a href="#">Business translation</a></li>
                       </ul>
                       </Col> 
                </Row> 
                <Row className='mb-5'>
                    <Col lg={true}><img className='img-fluid mb-4'
                        src={tutoring}
                        alt="tuturing"
                      />  
                       <h4>Tutoring</h4>
                       <ul className='p-0'>
                        <li><a href="#">Language tutoring</a></li>
                        <li><a href="#">Math tutoring</a></li>
                        <li><a href="#">Physics tutoring</a></li>
                        <li><a href="#">Economics tutoring</a></li>
                        <li><a href="#">Psychology tutoring</a></li>
                        <li><a href="#">Exam Preparation</a></li>
                        
                       </ul>
                       
                       </Col>
                    <Col lg={true}>
                    <img className='img-fluid mb-4'
                        src={physiotherapy}
                        alt="physiotherapy"
                      />  
                       <h4>Physiotherapy (support only)</h4>
                        <ul className='p-0'>
                        <li><a href="#">Exercise guidance</a></li>
                        <li><a href="#">Rehabilitation support</a></li>
                        <li><a href="#">Posture correction</a></li>
                        <li><a href="#">Injury prevention</a></li>
                        <li><a href="#">Stretching programs</a></li>
                        <li><a href="#">Mobility Training</a></li>
                       </ul>
                       </Col>
                    <Col lg={true}>
                    <img className='img-fluid mb-4'
                        src={repairing}
                        alt="repairing"
                      />  
                       <h4>Repairing</h4>
                        <ul className='p-0'>
                        <li><a href="#">Home repairs</a></li>
                        <li><a href="#">Furniture assembly</a></li>
                        <li><a href="#">Plumbing help (basic)</a></li>
                        <li><a href="#">Painting & decoration</a></li>
                        <li><a href="#">Installation help</a></li>
                         <li><a href="#">Maintenance tasks</a></li>
                       </ul>
                       </Col> 
                </Row>
                 <Row className='mb-5'>
                    <Col lg={true}><img className='img-fluid mb-4'
                        src={electronics}
                        alt="electronics"
                      />  
                       <h4>Electronics</h4>
                        <ul className='p-0'>
                        <li><a href="#">Device repair</a></li>
                        <li><a href="#">Phone repair</a></li>
                        <li><a href="#">Computer repair</a></li>
                        <li><a href="#">Hardware Installation</a></li>
                        <li><a href="#">Smart home setup</a></li>
                        <li><a href="#">Electronics troubleshooting</a></li>
                       </ul>
                       </Col>
                    <Col lg={true}>
                    <img className='img-fluid mb-4'
                        src={art}
                        alt="art and design"
                      />  
                       <h4>Art and Design</h4>
                        <ul className='p-0'>
                        <li><a href="#">Illustration</a></li>
                        <li><a href="#">Digital art</a></li>
                        <li><a href="#">Painting</a></li>
                        <li><a href="#">UI design</a></li>
                        <li><a href="#">UX design</a></li>
                        <li><a href="#">Animation (basic)</a></li>
                       </ul>
                       </Col>
                    <Col lg={true}>
                    <img className='img-fluid mb-4'
                        src={graphicDesign}
                        alt="graphic design"
                      />  
                       <h4>Graphic design</h4>
                        <ul className='p-0'>
                        <li><a href="#">Logo design</a></li>
                        <li><a href="#">Social media graphics</a></li>
                        <li><a href="#">Posters & flyers</a></li>
                        <li><a href="#">Business cards</a></li>
                        <li><a href="#">Presentations</a></li>
                        <li><a href="#">Branding materials</a></li>
                       </ul>
                       </Col> 
                </Row>
            </Container>
        </div>
        </div>
    )
}