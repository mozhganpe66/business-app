import Button from 'react-bootstrap/Button';
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



export default function HomePage(){
   
    function handleClick(){
        alert("it works")
    }
    return (
        <div>
            <div>
            
            <Container>
                <Row>
                    <Col lg={true}>
                   <img className='img-fluid'
                        src={finance}
                        alt="finance"
                      />  
                       <Button onClick={handleClick}>Finance</Button>
                        <ul>
                        <li><a href="#">Budgeting</a></li>
                        <li><a href="#">Personal finance advice</a></li>
                        <li><a href="#">Financial planning</a></li>
                        <li><a href="#">Excel & spreadsheets</a></li>
                        <li><a href="#">Expense tracking</a></li>
                        <li><a href="#">Financial analysis (basic)</a></li>

                       </ul>
                    </Col>

                    <Col lg={true}>
                      <img className='img-fluid'
                        src={accounting}
                        alt="accounting"
                      />  
                       <Button onClick={handleClick}>Accounting</Button>
                        <ul>
                        <li><a href="#">Bookkeeping</a></li>
                        <li><a href="#">Tax reporting(basic)</a></li>
                        <li><a href="#">Invoicing</a></li>
                        <li><a href="#">Payroll(basic)</a></li>
                        <li><a href="#">Financial statements</a></li>
                        <li><a href="#">Startup accounting help</a></li>
                       </ul>
                    </Col>
                    
                    <Col lg={true}>
                      <img className='img-fluid'
                        src={IT}
                        alt="IT"
                      />  
                       <Button onClick={handleClick}>IT</Button> 
                        <ul>
                        <li><a href="#">IT support / troubleshooting</a></li>
                        <li><a href="Tasks">Web development</a></li>
                        <li><a href="#">App testing</a></li>
                        <li><a href="#">Basic programming help</a></li>
                        <li><a href="#">Data handling</a></li>
                        <li><a href="#">System setup</a></li>
                       </ul>
                    </Col> 
                </Row>
                <Row>
                    <Col lg={true}><img className='img-fluid'
                        src={cooking}
                        alt="cooking"
                      />  
                       <Button onClick={handleClick}>Cooking</Button>
                        <ul>
                        <li><a href="#">Home cooking</a></li>
                        <li><a href="#">Meal prep</a></li>
                        <li><a href="#">Baking</a></li>
                        <li><a href="#">Catering help</a></li>
                        <li><a href="#">Recipe development</a></li>
                        <li><a href="#">Cultural / international cuisine</a></li>
                       </ul>
                       </Col>
                    <Col lg={true}>
                    <img className='img-fluid'
                        src={media}
                        alt="media and Marketing"
                      />  
                       <Button onClick={handleClick}>Media and Marketing</Button>
                        <ul>
                        <li><a href="#">Social media management</a></li>
                        <li><a href="#">Content creation</a></li>
                        <li><a href="#">Copywriting</a></li>
                        <li><a href="#">SEO basics</a></li>
                        <li><a href="#">Email marketing</a></li>
                        <li><a href="#">Brand strategy (basic)</a></li>

                       </ul>
                       </Col>
                    <Col lg={true}>
                    <img className='img-fluid'
                        src={healthcare}
                        alt="healthcare"
                      />  
                       <Button onClick={handleClick}>Healthcare</Button>
                        <ul>
                        <li><a href="#">Healthcare assistance</a></li>
                        <li><a href="#">Medical administration help</a></li>
                        <li><a href="#">Patient support</a></li>
                        <li><a href="#">Health education</a></li>
                        <li><a href="#">Research assistance</a></li>
                        <li><a href="#">Wellness Support</a></li>
                       </ul>
                       </Col> 
                </Row>
                 <Row>
                    <Col lg={true}><img className='img-fluid'
                        src={law}
                        alt="law"
                      />  
                       <Button onClick={handleClick}>Law</Button>
                       <ul>
                        <li><a href="#">Legal Research</a></li>
                        <li><a href="#">Contract review (basic)</a></li>
                        <li><a href="#">Document drafting</a></li>
                        <li><a href="#">Compliance help</a></li>
                        <li><a href="#">Case preparation</a></li>
                        <li><a href="#">Legal translation</a></li>
                       </ul>
                       </Col>
                    <Col lg={true}>
                    <img className='img-fluid'
                        src={music}
                        alt="music and dance"
                      />  
                       <Button onClick={handleClick}>Music and Dance</Button>
                        <ul>
                        <li><a href="#">Music lessons</a></li>
                        <li><a href="#">Dance lessons</a></li>
                        <li><a href="#">Choreography</a></li>
                        <li><a href="#">Instrument practice</a></li>
                        <li><a href="#">Music Theory</a></li>
                        <li><a href="#">Performance coaching</a></li>
                       </ul>
                       </Col>
                    <Col lg={true}>
                    <img className='img-fluid'
                        src={translation}
                        alt="translation"
                      />  
                       <Button onClick={handleClick}>Translations</Button>
                        <ul>
                        <li><a href="#">Document translation</a></li>
                        <li><a href="#">Website translation</a></li>
                        <li><a href="#">Proofreading</a></li>
                        <li><a href="#">Localization</a></li>
                        <li><a href="#">Academic translation</a></li>
                        <li><a href="#">Business translation</a></li>
                       </ul>
                       </Col> 
                </Row> 
                <Row>
                    <Col lg={true}><img className='img-fluid'
                        src={tutoring}
                        alt="tuturing"
                      />  
                       <Button onClick={handleClick}>Tutoring</Button>
                       <ul>
                        <li><a href="#">Language tutoring</a></li>
                        <li><a href="#">Math tutoring</a></li>
                        <li><a href="#">Physics tutoring</a></li>
                        <li><a href="#">Economics tutoring</a></li>
                        <li><a href="#">Psychology tutoring</a></li>
                        <li><a href="#">Exam Preparation</a></li>
                        
                       </ul>
                       
                       </Col>
                    <Col lg={true}>
                    <img className='img-fluid'
                        src={physiotherapy}
                        alt="physiotherapy"
                      />  
                       <Button onClick={handleClick}>Physiotherapy (support only)</Button>
                        <ul>
                        <li><a href="#">Exercise guidance</a></li>
                        <li><a href="#">Rehabilitation support</a></li>
                        <li><a href="#">Posture correction</a></li>
                        <li><a href="#">Injury prevention</a></li>
                        <li><a href="#">Stretching programs</a></li>
                        <li><a href="#">Mobility Training</a></li>
                       </ul>
                       </Col>
                    <Col lg={true}>
                    <img className='img-fluid'
                        src={repairing}
                        alt="repairing"
                      />  
                       <Button onClick={handleClick}>Repairing</Button>
                        <ul>
                        <li><a href="#">Home repairs</a></li>
                        <li><a href="#">Furniture assembly</a></li>
                        <li><a href="#">Plumbing help (basic)</a></li>
                        <li><a href="#">Painting & decoration</a></li>
                        <li><a href="#">Installation help</a></li>
                         <li><a href="#">Maintenance tasks</a></li>
                       </ul>
                       </Col> 
                </Row>
                 <Row>
                    <Col lg={true}><img className='img-fluid'
                        src={electronics}
                        alt="electronics"
                      />  
                       <Button onClick={handleClick}>Electronics</Button>
                        <ul>
                        <li><a href="#">Device repair</a></li>
                        <li><a href="#">Phone repair</a></li>
                        <li><a href="#">Computer repair</a></li>
                        <li><a href="#">Hardware Installation</a></li>
                        <li><a href="#">Smart home setup</a></li>
                        <li><a href="#">Electronics troubleshooting</a></li>
                       </ul>
                       </Col>
                    <Col lg={true}>
                    <img className='img-fluid'
                        src={art}
                        alt="art and design"
                      />  
                       <Button onClick={handleClick}>Art and Design</Button>
                        <ul>
                        <li><a href="#">Illustration</a></li>
                        <li><a href="#">Digital art</a></li>
                        <li><a href="#">Painting</a></li>
                        <li><a href="#">UI design</a></li>
                        <li><a href="#">UX design</a></li>
                        <li><a href="#">Animation (basic)</a></li>
                       </ul>
                       </Col>
                    <Col lg={true}>
                    <img className='img-fluid'
                        src={graphicDesign}
                        alt="graphic design"
                      />  
                       <Button onClick={handleClick}>Graphic design</Button>
                        <ul>
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