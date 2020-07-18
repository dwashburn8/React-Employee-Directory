import React from "react";
import Navbar from "react-bootstrap/Navbar"
// import Row from "react-bootstrap/Row"
// import Col from "react-bootstrap/Col"
import "./NavBar.css"

class NavBar extends React.Component {
    // constructor(props) {
    //     super(props);

    // }

    render() {
        return (
            <Navbar id="navBar" bg="dark"  >
            
        <img
                src="https://fontmeme.com/permalink/200715/525a5cac62bec2e4cf7ceb3b80042fe2.png"
                
                className="headerImage"
                alt="Simpsons logo"
              />
            
          </Navbar>

        )
    }
}

export default NavBar;