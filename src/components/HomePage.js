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
                        <li><a href="Tasks">Budgeting</a></li>
                        <li><a href="Tasks">Personal finance advice</a></li>
                        <li><a href="Tasks">Financial planning</a></li>
                        <li><a href="Tasks">Excel & spreadsheets</a></li>
                        <li><a href="Tasks">Expense tracking</a></li>
                        <li><a href="Tasks">Financial analysis (basic)</a></li>

                       </ul>
                    </Col>

                    <Col lg={true}>
                      <img className='img-fluid mb-4'
                        src={accounting}
                        alt="accounting"
                      />  
                       <h4>Accounting</h4>
                        <ul className='p-0'>
                        <li><a href="Tasks">Bookkeeping</a></li>
                        <li><a href="Tasks">Tax reporting(basic)</a></li>
                        <li><a href="Tasks">Invoicing</a></li>
                        <li><a href="Tasks">Payroll(basic)</a></li>
                        <li><a href="Tasks">Financial statements</a></li>
                        <li><a href="Tasks">Startup accounting help</a></li>
                       </ul>
                    </Col>
                    
                    <Col lg={true}>
                      <img className='img-fluid mb-4'
                        src={IT}
                        alt="IT"
                      />  
                       <h4>IT</h4> 
                        <ul className='p-0'>
                        <li><a href="Tasks">IT support / troubleshooting</a></li>
                        <li><a href="Tasks">Web development</a></li>
                        <li><a href="Tasks">App testing</a></li>
                        <li><a href="Tasks">Basic programming help</a></li>
                        <li><a href="Tasks">Data handling</a></li>
                        <li><a href="Tasks">System setup</a></li>
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
                        <li><a href="Tasks">Home cooking</a></li>
                        <li><a href="Tasks">Meal prep</a></li>
                        <li><a href="Tasks">Baking</a></li>
                        <li><a href="Tasks">Catering help</a></li>
                        <li><a href="Tasks">Recipe development</a></li>
                        <li><a href="Tasks">Cultural / international cuisine</a></li>
                       </ul>
                       </Col>
                    <Col lg={true}>
                    <img className='img-fluid mb-4'
                        src={media}
                        alt="media and Marketing"
                      />  
                       <h4>Media and Marketing</h4>
                        <ul className='p-0'>
                        <li><a href="Tasks">Social media management</a></li>
                        <li><a href="Tasks">Content creation</a></li>
                        <li><a href="Tasks">Copywriting</a></li>
                        <li><a href="Tasks">SEO basics</a></li>
                        <li><a href="Tasks">Email marketing</a></li>
                        <li><a href="Tasks">Brand strategy (basic)</a></li>

                       </ul>
                       </Col>
                    <Col lg={true}>
                    <img className='img-fluid mb-4'
                        src={healthcare}
                        alt="healthcare"
                      />  
                       <h4>Healthcare</h4>
                        <ul className='p-0'>
                        <li><a href="Tasks">Healthcare assistance</a></li>
                        <li><a href="Tasks">Medical administration help</a></li>
                        <li><a href="Tasks">Patient support</a></li>
                        <li><a href="Tasks">Health education</a></li>
                        <li><a href="Tasks">Research assistance</a></li>
                        <li><a href="Tasks">Wellness Support</a></li>
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
                        <li><a href="Taks">Legal Research</a></li>
                        <li><a href="Tasks">Contract review (basic)</a></li>
                        <li><a href="Tasks">Document drafting</a></li>
                        <li><a href="Tasks">Compliance help</a></li>
                        <li><a href="Tasks">Case preparation</a></li>
                        <li><a href="Tasks">Legal translation</a></li>
                       </ul>
                       </Col>
                    <Col lg={true}>
                    <img className='img-fluid mb-4'
                        src={music}
                        alt="music and dance"
                      />  
                       <h4>Music and Dance</h4>
                        <ul className='p-0'>
                        <li><a href="Tasks">Music lessons</a></li>
                        <li><a href="Tasks">Dance lessons</a></li>
                        <li><a href="Tasks">Choreography</a></li>
                        <li><a href="Tasks">Instrument practice</a></li>
                        <li><a href="Tasks">Music Theory</a></li>
                        <li><a href="Tasks">Performance coaching</a></li>
                       </ul>
                       </Col>
                    <Col lg={true}>
                    <img className='img-fluid mb-4'
                        src={translation}
                        alt="translation"
                      />  
                       <h4>Translations</h4>
                        <ul className='p-0'>
                        <li><a href="Tasks">Document translation</a></li>
                        <li><a href="Tasks">Website translation</a></li>
                        <li><a href="Tasks">Proofreading</a></li>
                        <li><a href="Tasks">Localization</a></li>
                        <li><a href="Tasks">Academic translation</a></li>
                        <li><a href="Tasks">Business translation</a></li>
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
                        <li><a href="Tasks">Language tutoring</a></li>
                        <li><a href="Tasks">Math tutoring</a></li>
                        <li><a href="Tasks">Physics tutoring</a></li>
                        <li><a href="Tasks">Economics tutoring</a></li>
                        <li><a href="Tasks">Psychology tutoring</a></li>
                        <li><a href="Tasks">Exam Preparation</a></li>
                        
                       </ul>
                       
                       </Col>
                    <Col lg={true}>
                    <img className='img-fluid mb-4'
                        src={physiotherapy}
                        alt="physiotherapy"
                      />  
                       <h4>Physiotherapy (support only)</h4>
                        <ul className='p-0'>
                        <li><a href="Tasks">Exercise guidance</a></li>
                        <li><a href="Tasks">Rehabilitation support</a></li>
                        <li><a href="Tasks">Posture correction</a></li>
                        <li><a href="Tasks">Injury prevention</a></li>
                        <li><a href="Tasks">Stretching programs</a></li>
                        <li><a href="Tasks">Mobility Training</a></li>
                       </ul>
                       </Col>
                    <Col lg={true}>
                    <img className='img-fluid mb-4'
                        src={repairing}
                        alt="repairing"
                      />  
                       <h4>Repairing</h4>
                        <ul className='p-0'>
                        <li><a href="Tasks">Home repairs</a></li>
                        <li><a href="Tasks">Furniture assembly</a></li>
                        <li><a href="Tasks">Plumbing help (basic)</a></li>
                        <li><a href="Tasks">Painting & decoration</a></li>
                        <li><a href="Tasks">Installation help</a></li>
                         <li><a href="Tasks
                         ">Maintenance tasks</a></li>
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
                        <li><a href="Tasks">Device repair</a></li>
                        <li><a href="Tasks">Phone repair</a></li>
                        <li><a href="Tasks">Computer repair</a></li>
                        <li><a href="Tasks">Hardware Installation</a></li>
                        <li><a href="Tasks">Smart home setup</a></li>
                        <li><a href="Tasks">Electronics troubleshooting</a></li>
                       </ul>
                       </Col>
                    <Col lg={true}>
                    <img className='img-fluid mb-4'
                        src={art}
                        alt="art and design"
                      />  
                       <h4>Art and Design</h4>
                        <ul className='p-0'>
                        <li><a href="Tasks">Illustration</a></li>
                        <li><a href="Tasks">Digital art</a></li>
                        <li><a href="Tasks">Painting</a></li>
                        <li><a href="Tasks">UI design</a></li>
                        <li><a href="Tasks">UX design</a></li>
                        <li><a href="Thasks">Animation (basic)</a></li>
                       </ul>
                       </Col>
                    <Col lg={true}>
                    <img className='img-fluid mb-4'
                        src={graphicDesign}
                        alt="graphic design"
                      />  
                       <h4>Graphic design</h4>
                        <ul className='p-0'>
                        <li><a href="Tasks">Logo design</a></li>
                        <li><a href="Tasks">Social media graphics</a></li>
                        <li><a href="Tasks">Posters & flyers</a></li>
                        <li><a href="Tasks">Business cards</a></li>
                        <li><a href="Tasks">Presentations</a></li>
                        <li><a href="Thaks
                        ">Branding materials</a></li>
                       </ul>
                       </Col> 
                </Row>
            </Container>
        </div>
        </div>
    )
}