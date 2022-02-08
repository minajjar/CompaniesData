import { React } from 'react'; 
import { Link } from 'react-router-dom';
import firebase from './firebase';
import { ListGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Personsactions ({person}){ 

    const unlinkPerson = () => {
        const personsRef = firebase.database().ref('Persons').child(person.id);
        personsRef.update({
            company: false,
          });
      };

    return ( 
        <div>
        <ListGroup.Item>
            <span className={person.index}>{person.personName}</span>
            <span className="text-primary sm"> {person.company} </span>
            {
                person.company ?  <button onClick={unlinkPerson}>Unlink from the company</button> : 
                <small className="text-info">
                    <Link
                        to={{
                            pathname: "/companieslink",
                            state: {
                                pid: person.id,
                                pName: person.personName
                            }
                        }}
                        >Link to a company</Link>
                    </small>
            }
        </ListGroup.Item>
        </div>
        
        );

} 
  
export default Personsactions; 