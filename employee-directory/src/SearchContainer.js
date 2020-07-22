import React, { Component } from "react";
import Search from "./components/Search/Search";
import Wrapper from "./components/Wrapper/Wrapper"
// import EmployeeCard from "./components/EmployeeCard/EmployeeCard";
import Employees from "./employees.json"
import "./components/SearchContainer/SearchContainer.css"

class SearchContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            search: null
        };

    };

    searchEmployees = (event) => {
        let results = event.target.value;
        this.setState({ search: results })
    };

    // handleInputChange = event => {
    //     const { name, value } = event.target;

    //     this.setState({
    //         [name]: value
    //     });
    // };

    // handleFormSubmit = event => {
    //     event.preventDefault();

    //     this.searchEmployees();
    // };

    // componentDidMount() {
    //     this.searchEmployees();
    // };

    render() {
        const list = Employees.filter((data) => {
            if (this.state.search === null) {
                return data
            } else if (data.name.toLowerCase().includes(this.state.search.toLowerCase()) || data.occupation.toLowerCase().includes(this.state.search.toLowerCase())) {
                return data
            }
        }).map((data) => {
            return (
                <div key={data.id} className="card">
                <div className="img-container">
                  <img alt={data.name} src={data.image} />
                </div>
                <div className="content">
                  <ul>
                    <li>
                      <strong>Name:</strong> {data.name}
                    </li>
                    <li>
                      <strong>Age:</strong> {data.age}
                    </li>
                    <li>
                      <strong>Occupation:</strong> {data.occupation}
                    </li>
                  </ul>
                </div>
        
              </div>
            )
        })
        return (
            <>
                <Search key={this.state.id} value={this.state.search} handleInputChange ={this.searchEmployees} />
                <Wrapper>
                    {list}
                </Wrapper>
            </>
        );
    };
};

export default SearchContainer;

/* <Wrapper>
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
  </Wrapper> */