import React, { Component } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {Container} from 'react-bootstrap';
import products from '../tempdata/ProductList.json';
import Product from './Product.js';
import './ProductList.css';

class ProductList extends Component {

    //state = {  products: [] };

    constructor(props) {
        super(props);

        this.state = {
          products: products.ProductList
        };
      }

    render() {
        //console.log(this.state.products);
        //todo:come here with url prms (from tree navigation &/ search) and get product list from API
        return (
            <div>
                ProductList component will consist of Product Components
                <div className="container" >
                    {this.state.products.map(product => ( <Product
                                                            key={product.id}
                                                            product={product} />
                    ))
                   }
                </div>
            </div>
            
        );
    }
}

export default ProductList;