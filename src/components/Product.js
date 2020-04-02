import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {Col, Card} from 'react-bootstrap';
import './Product.css';

class Product extends Component {

    state = { product : null };

    constructor(props){
        super(props);

        this.state.product=props.product;
    }

    render() {
        return (        
         <Col lg="3" md="4" sm="6" xs="8">
                <Card className="card">
                    <h4
                    className="ellipsis"
                    title={this.state.product.Name}>
                    <a href="#">
                        {this.state.product.Name}
                    </a>
                    </h4>

                    <h5
                    className="ellipsis product-brand-name"
                    title={this.state.product.Brand}>
                    {`by ${this.state.product.Brand}`}
                    </h5>
                    <h5
                    className="ellipsis product-brand-name"
                    title={this.state.product.Market}>
                    {this.state.product.Market}
                    </h5>

                    <div className="pull-right h4 product-price">
                    {`${this.state.product.Price}$`}
                    </div>
                </Card>
            </Col>
        );
    }
}

 Product.propTypes = {
    product: PropTypes.object.isRequired
};

export default Product;