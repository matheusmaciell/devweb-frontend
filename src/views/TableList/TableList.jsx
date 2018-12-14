import React, { Component } from "react";
import { Grid, Row, Col, Table } from "react-bootstrap";

import Card from "../../components/Card/Card.jsx";
import { thArray, tdArray } from "../../variables/Variables.jsx";
//import axios from 'axios';

import {Api} from "../../service/Api.js";




class TableList extends Component {
 
  constructor(props){
    super(props);
    this.state = {
      estudantes:[]
    }
  }


  componentWillMount = async() => {
      await this.recarrega();

}
   recarrega = async() => {
    //console.log('asdasd')
    Api.get('/user')
    .then((response) => {
     // console.log("deu certo")
     // console.log(response.data);
    
      this.setState({estudantes:response.data});
      
    })
   
  }
  
  render() {
    //console.log(this.state)
    return (
      
      <div className="content">
        <Grid fluid>
        
          <Row>
            <Col md={12}>
              <Card
                title="Alunos Matriculados"
                //category="Aqui pode botar uma descrição"
                ctTableFullWidth
                ctTableResponsive
                content={
                  <Table striped hover>
                    <thead>
                      <tr>
                        {thArray.map((prop, key) => {
                          return <th key={key}>{prop}</th>;
                        })}
                      </tr>
                    </thead>
                    <tbody>
                    {this.state.estudantes.map((prop, key) => {
                      console.log(prop);
                        return (
                          <tr key={key}>
                              <td key={key}>{prop.UserName}</td>
                              <td key={key}>{prop.UserName}</td>
                              <td key={key}>{prop.userEmail}</td>
                          
                          </tr>
                        );
                      })}
                    </tbody>
                  </Table>
                }
              />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default TableList;