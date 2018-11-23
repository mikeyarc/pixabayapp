import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import axios from 'axios';
import ImageResults from '../imageresults/ImageResults';




class SearchResults extends Component {
    state = {
        searchText : '',
        amount :5,
        apiUrl : 'https://pixabay.com/api/',

        apiKey : '10189988-ee0112abb81509e4148b4ef79',
        images : []
    };

OnTextChange = (e) => {
    this.setState ({[e.target.name]:e.target.value},()=>{
                   axios.get(`${this.state.apiUrl}/?key=${this.state.apiKey}&q=${this.state.searchText}&image_type=photo&per_page=${this.state.amount}&safesearch=true`)
        .then(res =>this.setState({images:res.data.hits}))
        .catch (err => console.log(err));    
    });
    
};


OnAmountChange = (e,index,value) => this.setState ({amount:value})


render(){
    console.log (this.state.images);
    return(
    <div>
    <TextField
        name  = 'searchText'
        value = {this.state.searchText}
        onChange= {this.OnTextChange}
        floatingLabelText = 'Search for images'
        fullWidth = {true}
        />
            
    {this.state.images.length > 0? (<ImageResults images = {this.state.images}/>) : null}
        </div>
        );
  }
}


export default SearchResults;