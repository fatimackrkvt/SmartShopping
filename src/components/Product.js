import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {Col, Card} from 'react-bootstrap';
import './Product.css';

class Product extends Component {

    render() {

        let product = this.props.product;

        return (   
                 
         <Col lg="3" md="4" sm="6" xs="8">
                <Card className="card">
                    <h4
                    className="ellipsis"
                    title={product.Name}>
                    <a href="#">
                        {product.Name}
                    </a>
                    </h4>

                    <h5
                    className="ellipsis product-brand-name"
                    title={product.Brand}>
                    {`by ${product.Brand}`}
                    </h5>
                    <h5
                    className="ellipsis product-brand-name"
                    title={product.Market}>
                    {product.Market}
                    </h5>

                    <div className="pull-right h4 product-price">
                    {`${product.Price}$`}
                    </div>
                </Card>
            </Col>
        );
    }
}

 Product.propTypes = {
    key:PropTypes.string.isRequired,
    product: PropTypes.object.isRequired
};

export default Product;