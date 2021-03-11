import { React, useState } from 'react'; 
import firebase from './firebase';
import { Card, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Registerpersons (){ 

    const [personName, setPersonName] = useState('');
    const handleOnChange = (e) => {
        setPersonName(e.target.value);
    };
    const createPerson = () => {
      const listingRef = firebase.database().ref('Persons');
      const person = {
        personName,
        company: false,
      };
  
      listingRef.push(person);
    };
    
    return (
        <Card style={{ width: '30rem' }} className="text-center mt-2">
            <Card.Header>Employees Registration</Card.Header>
            <Card.Body>
                <h2 className="text-primary">Register yourself!</h2>
                <Form> 
                    <Form.Group id="email">
                        <Form.Label>Enter your name</Form.Label>
                        <Form.Control type="text" onChange={handleOnChange} id="personNameInput" value={personName} required />
                    </Form.Group>
                    <Button className="btn btn-sm" onClick={createPerson}>Rigester</Button>
                </Form>
            </Card.Body>
        </Card>   
    );
} 
  
export default Registerpersons; 