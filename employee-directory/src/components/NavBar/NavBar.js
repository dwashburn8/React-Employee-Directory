import React from "react";
import Navbar from "react-bootstrap/Navbar"

class NavBar extends React.Component {
    // constructor(props) {
    //     super(props);

    // }

    render() {
        return (
            <Navbar bg="dark">
            <Navbar.Brand href="#home">
              <img
                src="/img/simpsons logo.png"
                width="200"
                height="100"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
              />
            </Navbar.Brand>
          </Navbar>

        )
    }
}

export default NavBar;