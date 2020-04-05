import React from 'react';
import {NavLink} from 'react-router-dom';

class SearchForm extends React.Component{
    state = {
        searchCriteria :''
    }

    setSearchCriteria = (evt) => {
        this.setState({searchCriteria : evt.target.value});
    }

     render(){
         return (
         <div>
             <input type="text" name="searchCriteria" onChange={this.setSearchCriteria}></input>

             <NavLink style={searchStyle} to={`/products/${this.state.searchCriteria}`}> Search</NavLink>
         </div>
         )
     }
}


const searchStyle = {
    backgroundColor: 'lightgrey',
    border:10
}

export default SearchForm;