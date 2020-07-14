import React from "react";
import "./EmployeeCard.css"


function EmployeeCard(props) {
    return (
      <div className="card">
        <div className="img-container">
          <img alt={props.name} src={props.image} />
        </div>
        <div className="content">
          <ul>
            <li>
              <strong>Name:</strong> {props.name}
            </li>
            <li>
              <strong>Age:</strong> {props.age}
            </li>
            <li>
              <strong>Occupation:</strong> {props.occupation}
            </li>
          </ul>
        </div>

      </div>
    );
  }


export default EmployeeCard;


// <Container>
//                     <Row>
//                         <Col>
//                             <Card style={{ width: '18rem' }}>
//                                 <Card.Img variant="top" src="holder.js/100px180" />
//                                 <Card.Body>
//                                     <Card.Title>Card Title</Card.Title>
//                                     <Card.Text>
//                                         Some quick example text to build on the card title and make up the bulk of
//                                         the card's content.
//     </Card.Text>
//                                 </Card.Body>
//                             </Card>
//                         </Col>
//                         <Col><Card style={{ width: '18rem' }}>
//                             <Card.Img variant="top" src="holder.js/100px180" />
//                             <Card.Body>
//                                 <Card.Title>Card Title</Card.Title>
//                                 <Card.Text>
//                                     Some quick example text to build on the card title and make up the bulk of
//                                     the card's content.
//     </Card.Text>
//                             </Card.Body>
//                         </Card>

//                         </Col>
//                         <Col>
//                             <Card style={{ width: '18rem' }}>
//                                 <Card.Img variant="top" src="holder.js/100px180" />
//                                 <Card.Body>
//                                     <Card.Title>Card Title</Card.Title>
//                                     <Card.Text>
//                                         Some quick example text to build on the card title and make up the bulk of
//                                         the card's content.
//     </Card.Text>
//                                 </Card.Body>
//                             </Card>

//                         </Col>
//                     </Row>

//                 </Container>