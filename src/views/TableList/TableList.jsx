import React, { Component } from "react";
import { Grid, Row, Col, Table } from "react-bootstrap";

import Card from "../../components/Card/Card.jsx";
import { thArray, tdArray } from "../../variables/Variables.jsx";
import axios from 'axios';






class TableList extends Component {
  users() {
      }

  componentDidMount(){
    console.log('asdasd')
    axios.get('http://localhost:9000/user')
    .then(response => {
      console.log(response);
    })

  }
  
  render() {
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
                      {tdArray.map((prop, key) => {
                        return (
                          <tr key={key}>
                            {prop.map((prop, key) => {
                              return <td key={key}>{prop}</td>;
                            })}
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