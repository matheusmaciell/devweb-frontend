import React, { Component } from "react";
import { Grid, Row, Col, Table } from "react-bootstrap";

import Card from "../../components/Card/Card.jsx";
import { DisArray, NotasArray } from "../../variables/Variables.jsx";

class UserGrades extends Component {
  render() {
    return (
     
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={12}>
              <Card
                title="Notas"
                //category="Aqui pode botar uma descrição"
                ctTableFullWidth
                ctTableResponsive
                content={
                  <Table striped hover>
                    <thead>
                      <tr>
                        {DisArray.map((prop, key) => {
                          return <th key={key}>{prop}</th>;
                        })}
                      </tr>
                    </thead>
                    <tbody>
                      {NotasArray.map((prop, key) => {
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

export default UserGrades;