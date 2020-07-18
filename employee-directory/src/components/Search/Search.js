import React from "react";
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
// import employees from "./employees.json"



const Search =(props) => {

        return (
            <Container>
                <Row>
                    <Col>
                        <form>
                            <label>
                                Search By Name or Occupation:
                        <input
                                    value={props.search}
                                    onChange={props.handleInputChange}
                                    type="text"
                                    name="name"
                                    placeholder="Homer">
                                </input>
                            </label>

                            {/* <button onClick={this.searchEmployees}>Submit</button> */}
                        </form>
                    </Col>
                    <Col>

                    </Col>
                </Row>
            </Container>

        );
    }



export default Search;

// constructor(props) {
//     super(props);

//     // this.handleSubmit = this.handleSubmit.bind(this);

//     this.state = {
//         name: ""
//     };
// };

// handleInputChange = (event) => {
//     const { name, value } = event.target

//     this.setState({
//         [name]: value
//     });
// }

// handleSubmit = (event) => {
//     event.preventDefault();

//     this.setState({
//         name: ""
//     })
// }