import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import Header from './components/layout/Header.js';
import Navigation from './components/layout/Navigation.js';
import Home from './components/Home.js';
import About from './components/About.js';
import Contact from './components/Contact.js';
import ProductList from './components/ProductList.js';
import Temp from './components/Temp.js';
import SearchForm from './components/SearchForm.js';

class App extends Component {

  render(){
  return (
    <Router>
        <div>
        <Header></Header>
        <SearchForm></SearchForm>
        <Row> <Col md={2}  className="navigation" style={{height: '100%'}}> <Navigation></Navigation> </Col>
              <Col md={10}> 
              <Switch>
              <Route exact path="/" component={Home}></Route>
              <Route  path="/about" component={About}></Route>
              <Route  path="/contact" component={Contact}></Route>
              <Route  path="/products/:searchCriteria"  component={ProductList}/>
              <Route  path="/temp/:id" component={Temp}></Route> 
              </Switch> 
              </Col>
        </Row>
        </div>
    </Router>
    
  );
}
}

export default App;
