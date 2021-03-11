import { 
  BrowserRouter as Router, 
  Route, 
  Link, 
  Switch 
} from 'react-router-dom';
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/home';
import Companies from './components/companies';
import Persons from './components/persons';
import Registercompanies from './components/registercompanies';
import Registerpersons from './components/registerpersons';
import Companieslink from './components/companieslink';

import './App.css';

function App() {
  return (
      <Router> 
        <Card>
          <Card.Body className="text-center">
            <div className="btn-group btn-group-toggle" data-toggle="buttons">
              <label className="btn btn-secondary">
                <Link to="/" className="text-white">Home</Link> 
              </label>
              <label className="btn btn-secondary">
                <Link to="/companies" className="text-white">Companies list</Link> 
              </label>
              <label className="btn btn-secondary">
                <Link to="/persons" className="text-white">Persons list</Link> 
              </label>
              <label className="btn btn-secondary">
                <Link to="/registercompanies" className="text-white">Comapnies registration</Link> 
              </label>
              <label className="btn btn-secondary">
                <Link to="/registerpersons" className="text-white">Persons registration</Link> 
              </label>
            </div>          
          </Card.Body>
        </Card> 
            <Switch>
              <Route exact path='/' component={Home}></Route> 
              <Route exact path='/companies' component={Companies}></Route> 
              <Route exact path='/persons' component={Persons}></Route> 
              <Route exact path='/registercompanies' component={Registercompanies}></Route> 
              <Route exact path='/registerpersons' component={Registerpersons}></Route>
              <Route exact path='/companieslink' component={Companieslink}></Route> 
            </Switch>
        </Router> 
  );
}

export default App;
