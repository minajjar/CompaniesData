import { React, useState, useEffect } from 'react'; 
import { Card, ListGroup } from 'react-bootstrap';
import firebase from './firebase';
import 'bootstrap/dist/css/bootstrap.min.css';
  
function Companies (){ 

    const [companiesList, setCompaniesList] = useState();

  useEffect(() => {
    const companiesRef = firebase.database().ref('Companies');
    companiesRef.on('value', (snapshot) => {
      const companies = snapshot.val();
      const companiesList = [];
      for (let id in companies) {
        companiesList.push({ id, ...companies[id] });
      }
      setCompaniesList(companiesList);
    });
  }, []);

    return (
        <Card>
            <Card.Header>
                <h3 className="text-primary">Companies list</h3>
            </Card.Header>
            <Card.Body>
                
                <ListGroup>
                    {companiesList ? companiesList.map((company, index) => 
                        <ListGroup.Item key={index}>
                            <span className={company.index}>{company.companyName} </span>
                        </ListGroup.Item>
                            ) : ""}
                </ListGroup>
            </Card.Body>
        </Card>
        );
} 
  
export default Companies; 