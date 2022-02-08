import { React, useState, useEffect, Component } from 'react'; 
import { Card, ListGroup } from 'react-bootstrap';
import firebase from './firebase';
import 'bootstrap/dist/css/bootstrap.min.css';
  
function Companieslink (state){ 

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
                            <button onClick={() => assignToPerson(company.companyName)}>
                                {company.companyName}</button>
                        </ListGroup.Item>
                            ) : ""}
                </ListGroup>
            </Card.Body>
        </Card>
        );

        function assignToPerson(companyName){
          const personsRef = firebase.database().ref('Persons').child(state.location.state.pid);
          personsRef.update({
              company: companyName,
            });
            window.location = '/persons'; 
        }
} 
  
export default Companieslink; 