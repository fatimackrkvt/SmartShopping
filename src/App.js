import React from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import logo from './logo.svg';
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

function App() {
  return (
    <Router>
        <div>
        <Header></Header>
        <Row> <Col md={1}  className="navigation" style={{height: '100%'}}> <Navigation></Navigation> </Col>
              <Col md={11}> 
              <Switch>
              <Route exact path="/" component={Home}></Route>
              <Route  path="/about" component={About}></Route>
              <Route  path="/contact" component={Contact}></Route>
              <Route  path="/products" component={ProductList}></Route>
              </Switch>
              
              </Col>
        </Row>  

        </div>
    </Router>
    
  );
}



export default App;
