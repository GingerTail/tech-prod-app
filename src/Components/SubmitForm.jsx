import React, { Component } from "react";
import "../stylesheet/submitform.css";
import { InputGroup, InputGroupAddon, InputGroupText, Input } from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {Button } from 'reactstrap';

export default class SubmitForm extends Component {
    constructor(props){
      super(props);
      this.state={
        email:""
      }
    }

SubmitEmail= async() =>{

  var response= await fetch("https://sorace-techprod.herokuapp.com/users", {
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify({
      email: this.state.email
    })
  })
  if(response.ok){
    console.log("response ok")
    var result= await response.json()
    console.log(result)
  }else{
    console.log("error")
  }
}

  render() {
    return (
      <>
        <div className="container-fluid form-container">
          <div className="row">
            <div className="col-12">
              <div className="text-center input-email">
                <h3>Stay up to date</h3>
              <h1>Register Now</h1>
              <InputGroup>
                <InputGroupAddon addonType="prepend"><FontAwesomeIcon icon="envelope" size="2x" /></InputGroupAddon>
                <Input value={this.state.email} onChange={(event) => this.setState({email: event.currentTarget.value})} placeholder="text@example.it" />
              </InputGroup>
              <Button onClick={this.SubmitEmail} className="mt-3 submit-btn" color="info" size="lg">Submit</Button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
