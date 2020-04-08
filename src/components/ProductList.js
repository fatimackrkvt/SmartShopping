import React, { Component } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {Container} from 'react-bootstrap';
import products from '../tempdata/ProductList.json';
import Product from './Product.js';
import './ProductList.css';

class ProductList extends Component {
 
    state = { products: [] };

    filterProductList = (searchCriteria) => {
        
        if( searchCriteria != null && searchCriteria != undefined && searchCriteria != '')
        {
             let currentPoductList = products.ProductList.filter(function (item,index){
                return item.Name==searchCriteria;
             });
             this.setState({products : currentPoductList});
         }
        else this.setState({products : products.ProductList});
    }

    componentWillMount() {
        let searchCriteria = this.props.match.params.searchCriteria;
        this.filterProductList(searchCriteria);
    }

    componentDidUpdate(prevProps) {
        // Typical usage (don't forget to compare props):
        let searchCriteria = this.props.match.params.searchCriteria;
        let searchCriteriaOld = prevProps.match.params.searchCriteria;
        if (searchCriteria !== searchCriteriaOld) {
          this.filterProductList(searchCriteria);
        }
    }    

    render() {
        const searchCriteria = this.props.match.params.searchCriteria;

        //todo:come here with url prms (from tree navigation &/ search) and get product list from API
        return (
            <div className="container" >
                    {this.state.products.map(product => { return ( <Product key={product.id}
                                                                            product={product} />);
                    } ) }
            </div>
        );
    }
}

export default ProductList;