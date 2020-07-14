import React, { Component } from 'react';
import NavBar from "./components/NavBar/NavBar"
import Wrapper from "./components/Wrapper/Wrapper"
import 'bootstrap/dist/css/bootstrap.min.css';
import EmployeeCard from "./components/EmployeeCard/EmployeeCard"
import Employees from "./employees.json"

class App extends Component {
  state = {
    Employees
  };

  removeFriend = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const Employees = this.state.Employees.filter(employee => employee.id !== id);
    // Set this.state.Employees equal to the new Employees array
    this.setState({ Employees });
  };

  render()  {
    return(
      <>
        < NavBar />
        <Wrapper>
        {this.state.Employees.map(employee => (
          <EmployeeCard
          
          id={employee.id}
          key={employee.id}
          name={employee.name}
          image={employee.image}
          age={employee.age}
          occupation={employee.occupation}
          />
        ))}
          </Wrapper>
      </>
    );
  }
}

export default App;
