import React, { Component } from "react";
import {
  Grid,
  Row,
  Col,
  FormGroup,
  ControlLabel,
  FormControl
} from "react-bootstrap";

import { Card } from "../../components/Card/Card.jsx";
import { FormInputs } from "../../components/FormInputs/FormInputs.jsx";
import MyCard from "../UserProfile/User.jsx"
import Button from "../../components/CustomButton/CustomButton.jsx";



import {Api} from "../../service/Api.js";



class Register extends Component {





  constructor(props){
    super(props);
    this.state = {
      estudante: {
        UserName: "",
        password: "123456",
        userEmail: "",
        about: "",
        city: "",
        address: "",
        
      }
    }
  }





 reset = () => {
  this.setState({
   
    estudante: {
      UserName: "",
      password: "123456",
      userEmail: "",
      about: "",
      city: "",
      address: "",
      
    }
  });
};


 submit = () => {
 console.log(this.state.estudante)
  Api.post("/user", this.state.estudante).then(
    response => {
      if (this.props.newEstudante) {
        this.props.new(this.state.estudante);
      }
    }
  );
  this.reset();
};
handleInputChange = text => event => {
  this.setState({
    estudante: { ...this.state.estudante, [text]: event.target.value }
  });
};



  render() {
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={8}>
              <Card
                title="Editar perfil"
                content={
                  <form>
                   <Row>
                      <Col md={12}>
                        <FormGroup controlId="formControlsTextarea">
                          <ControlLabel>NOME DE USUÁRIO</ControlLabel>
                          <FormControl
                            rows="1"
                            componentClass="textarea"
                            bsClass="form-control"
                          
                            value={this.state.estudante.UserName}
                            onChange={this.handleInputChange("UserName")}
                          />
                            
                        </FormGroup>
                      
                      </Col>
                    </Row>
                    <Row>
                      <Col md={12}>
                        <FormGroup controlId="formControlsTextarea">
                          <ControlLabel>EMAIL</ControlLabel>
                          <FormControl
                            rows="1"
                            componentClass="textarea"
                            bsClass="form-control"
                          
                            value={this.state.estudante.userEmail}
                            onChange={this.handleInputChange("userEmail")}
                          />
                            
                        </FormGroup>
                      
                      </Col>
                    </Row>
              
              <Row>
                      <Col md={12}>
                        <FormGroup controlId="formControlsTextarea">
                          <ControlLabel>Endereço</ControlLabel>
                          <FormControl
                            rows="1"
                            componentClass="textarea"
                            bsClass="form-control"
                          
                            value={this.state.estudante.address}
                            onChange={this.handleInputChange("address")}
                          />
                            
                        </FormGroup>
                      
                      </Col>
                    </Row>
                    <Row>
                      <Col md={12}>
                        <FormGroup controlId="formControlsTextarea">
                          <ControlLabel>cidade</ControlLabel>
                          <FormControl
                            rows="1"
                            componentClass="textarea"
                            bsClass="form-control"
                           
                            value={this.state.estudante.city}
                            onChange={this.handleInputChange("city")}
                          />
                            
                        </FormGroup>
                      
                      </Col>
                    </Row>
                     <Row>
                      <Col md={12}>
                        <FormGroup controlId="formControlsTextarea">
                          <ControlLabel>SObre mim</ControlLabel>
                          <FormControl
                            rows="5"
                            componentClass="textarea"
                            bsClass="form-control"
                            placeholder="Aqui você pode colocar uma descrição sobre você"
                            value={this.state.estudante.about}
                            onChange={this.handleInputChange("about")}
                          />
                            
                        </FormGroup>
                      
                      </Col>
                    </Row>
                      
                    <Button onClick={this.submit} bsStyle="info" pullRight fill type="submit">
                      Criar perfil
                    </Button>
                    <div className="clearfix" />
                  </form>
                }
              />
            </Col>
            
          </Row>
        </Grid>>
      </div>
    );
  }
}

export default Register;
