import React from 'react';
import { Jumbotron, Button } from 'reactstrap';
import "../stylesheet/jumbotron.css"
const JumbHeader = (props) => {
  return (
        <div className="contaniner-fluid">
      <Jumbotron>
        <h5 className="display-3">HEADER</h5>
        <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <p className="lead">
          <Button color="info">Learn More</Button>
        </p>
      </Jumbotron>
        </div>
  );
};

export default JumbHeader;
