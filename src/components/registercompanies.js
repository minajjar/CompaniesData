import { React, useState } from 'react'; 
import firebase from './firebase';
import { Card, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
  
function Registercompanies (){ 
    
        const [companyName, setCompanyName] = useState('');
        const handleOnChange = (e) => {
            setCompanyName(e.target.value);
        };
        const createCompany = () => {
          const listingRef = firebase.database().ref('Companies');
          const company = {
            companyName,
          };
      
          listingRef.push(company);
        };

    return (
        <Card style={{ width: '30rem' }} className="text-center mt-2">
            <Card.Header>Companies Registration</Card.Header>
            <Card.Body>
                <h2 className="text-primary">Register your company!</h2>
                <Form> 
                    <Form.Group id="email">
                        <Form.Label>Enter your company name</Form.Label>
                        <Form.Control type="text" onChange={handleOnChange} id="companyNameInput" value={companyName} required />
                    </Form.Group>
                    <Button className="btn btn-sm" onClick={createCompany}>Rigester</Button>
                </Form>
            </Card.Body>
        </Card>   
    );
} 
  
export default Registercompanies; 