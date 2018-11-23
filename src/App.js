import React, { Component } from 'react';
import NavBar from "./components/navbar/NavBar";
import SearchResults from "./components/searchresults/SearchResults";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

class App extends Component {
  render() {
    return (        
<MuiThemeProvider>
    <div>
     
     <NavBar/> 
     <SearchResults/>
    
    </div> 
</MuiThemeProvider>
    );
  }
}

export default App;
