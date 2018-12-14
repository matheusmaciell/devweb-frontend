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



class UserProfile extends Component {





  constructor(props){
    super(props);
    this.state = {
      estudante:[]
    }
  }


  componentWillMount = async() => {
    await this.recarrega();
}
 recarrega = async() => {

  Api.get('/user/5c13aaed7ced3a3e11da51ee')
  .then((response) => {
    this.setState({estudante:response.data});
    console.log(this.state.estudante)
  })
 }
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
                    <FormInputs
                      ncols={["col-md-5", "col-md-3", "col-md-4"]}
                      proprieties={[
                        {
                          label: "Escola (disabled)",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Escola",
                          defaultValue: "Panorama jovem.",
                          disabled: true
                        },
                        {
                          label: "Nome de usuário",
                          type: "text",
                          bsClass: "form-control",
                          value: this.state.estudante.UserName,
                          disabled: true
                        },
                        {
                          label: "Email",
                          type: "email",
                          bsClass: "form-control",
                          value: this.state.estudante.userEmail,
                          disabled: true
                        }
                      ]}
                    />
              
                    <FormInputs
                      ncols={["col-md-12"]}
                      proprieties={[
                        {
                          label: "Endereço",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Endereço",
                          value: this.state.estudante.address
                        }
                      ]}
                    />
                     <FormInputs
                      ncols={["col-md-12"]}
                      proprieties={[
                        {
                          label: "Cidade",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Cidade",
                          value: this.state.estudante.city
                        },
                      ]}
                    />
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
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Button bsStyle="info" pullRight fill type="submit">
                      Atualizar perfil
                    </Button>
                    <div className="clearfix" />
                  </form>
                }
              />
            </Col>
            <Col md={4}>
                <MyCard estudante={this.state.estudante}></MyCard>
                </Col>
          </Row>
        </Grid>>
      </div>
    );
  }
}

export default UserProfile;
