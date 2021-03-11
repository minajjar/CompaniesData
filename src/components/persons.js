import { React, useState, useEffect } from 'react'; 
import firebase from './firebase';
import { Card, ListGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Personsactions from './personsactions';

function Persons (){ 

    const [personsList, setPersonsList] = useState();

    useEffect(() => {
      const personsRef = firebase.database().ref('Persons').orderByChild('company');
      personsRef.on('value', (snapshot) => {
        const persons = snapshot.val();
        const personsList = [];
        for (let id in persons) {
          personsList.push({ id, ...persons[id] });
        }
        setPersonsList(personsList);
      });
    }, []);
  
    return (
        <Card>
            <Card.Header>
                <h3 className="text-primary">Employees list</h3>
            </Card.Header>
            <Card.Body>
            <ListGroup>
                {personsList
                  ? personsList.map((person, index) => <Personsactions person={person} key={index} />)
                  : ''}
                </ListGroup>
            </Card.Body>
        </Card>
        );

} 
  
export default Persons; 