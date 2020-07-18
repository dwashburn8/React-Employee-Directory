import React, { Component } from 'react';
import NavBar from "./components/NavBar/NavBar"
import 'bootstrap/dist/css/bootstrap.min.css';

import SearchContainer from "./SearchContainer"

class App extends Component {




  render()  {
    return(
      <>
        < NavBar />
        <SearchContainer />
          
      </>
    );
  }
}

export default App;

