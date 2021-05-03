import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import Card from 'react-bootstrap/Card'
import Accordion from 'react-bootstrap/Accordion'
import Form from 'react-bootstrap/Form'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Badge from 'react-bootstrap/Badge'
import Alert from 'react-bootstrap/Alert'
import Image from 'react-bootstrap/Image'
import './App.css'



function App() {
  return (
    
    <div className="App">
      <div className='Nav'>
      <Navbar sticky="top"  bg="dark" variant="dark">
    <Navbar.Brand href="#home">REBELLIOUS.</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">News Feed</Nav.Link>
      <DropdownButton id="dropdown-basic-button" title="Community" variant="secondary">
  <Dropdown.Item href="#/action-1">Events</Dropdown.Item>
  <Dropdown.Item href="#/action-2">Slam Competitions</Dropdown.Item>
  <Dropdown.Item href="#/action-3">Records</Dropdown.Item>
</DropdownButton>
    </Nav>
    <Form inline>
      <Form.Control type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-info">Search</Button>
    </Form>
  </Navbar>
  <div className ='Title'> <h1>
    Join Our Community ! <Badge variant="secondary"> For free</Badge>
  </h1> </div>
  <Accordion className="Accordion">
  <Card className="Card">
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="0">
        Curious?
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="0">
      <Card.Body>Check out the latest Features On our Website!</Card.Body>
    </Accordion.Collapse>
  </Card>
  </Accordion>
</div>
<div className="Social-logos">
<Image type ="button" className="face-logo" src="https://findicons.com/files/icons/855/web_social/256/facebook.png" alt="facebook" roundedCircle />
<Image type ="button" className="twitter-logo" src="https://th.bing.com/th/id/R378f8d0e6a1f813408cb197f76ff5905?rik=qFCqXx9pIV0Olg&riu=http%3a%2f%2ficons.iconarchive.com%2ficons%2fampeross%2fsmooth%2f512%2fTwitter-icon.png&ehk=6RpELAirt9UnFZ7kuRmyEh28PMVhgijsMo83oJW39ws%3d&risl=&pid=ImgRaw" alt ="twitter" roundedCircle />
<Image type ="button" className="insta-logo" src="https://cdn2.iconfinder.com/data/icons/instagram-new/512/instagram-round-flat-512.png " alt="instagram"  roundedCircle />
<Image type ="button" className="whats-logo" src="https://th.bing.com/th/id/R41507294feb5cb11649216bcf655dc81?rik=tzE9q9LKNSDmIw&riu=http%3a%2f%2fpngimg.com%2fuploads%2fwhatsapp%2fwhatsapp_PNG3.png&ehk=0M8TXNL%2f%2fvtIDdpEr8HeP%2f5yhB1udCtDf%2fZMZcftCjE%3d&risl=&pid=ImgRaw" alt="whatsapp"  roundedCircle />
<Image type ="button" className="youtu-logo" src="https://icons.iconarchive.com/icons/social-media-icons/glossy-social/512/Youtube-icon.png" alt="youtube"  roundedCircle />

</div>
<div className="Form">
      <Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>

  <Button variant="primary" type="submit"  >
    Submit
  </Button>

      
</Form>
</div>
<div className="Alert">
<Alert  variant='light'>
    Welcome Abroad! You're free to express yourself and share your thoughts here, it's a safe community . No one can judge you !
  </Alert>
  </div>
    </div>
  );
}





export default App;
