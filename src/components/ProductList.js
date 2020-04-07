import React, { Component } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {Container} from 'react-bootstrap';
import products from '../tempdata/ProductList.json';
import Product from './Product.js';
import './ProductList.css';
import {Link} from 'react-router-dom';

class ProductList extends Component {

    state = {  products: [], users:[] };

    constructor(props) {
        super(props);

        if(props.match.params.searchCriteria != null && props.match.params.searchCriteria != undefined && 
            props.match.params.searchCriteria != '')
         {
             products.ProductList = products.ProductList.filter(function (item,index){
                return item.Name==props.match.params.searchCriteria;
             });
         }

        this.state.products = products.ProductList;
    }

    componentWillMount() {
        this.fetchUserList();
    }

    fetchUserList = async () => {
        const data = await fetch('https://jsonplaceholder.typicode.com/users');
        var userList =  await data.json();
        this.setState({users:userList });
    }

    render() {
        const searchCriteria = this.props.match.params.searchCriteria;
        const msg="Mesaj";
        console.log(msg+searchCriteria);
        //todo:come here with url prms (from tree navigation &/ search) and get product list from API
        return (
            <div>
                ProductList component will consist of Product Components
                <div className="container" >
                    {this.state.products.map(product => ( <Product key={product.id}
                                                            product={product} />
                    ))
                   }
                </div>
                Use Link with parameter
                <div>
                    {this.state.users.map(user => ( 
                    <Link to={`/temp/${user.id}`} key={user.id} >{user.name} <span> | </span> </Link>
                    ))
                   }
                   
                </div>
            </div>
            
        );
    }
}

export default ProductList;