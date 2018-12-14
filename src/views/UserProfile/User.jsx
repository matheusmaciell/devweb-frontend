
import React, {Component} from 'react'
import avatar from "../../assets/img/faces/paulovillar.png";
import { UserCard } from "../../components/UserCard/UserCard.jsx";
import {Col} from "react-bootstrap";
class MyCard extends Component {

  constructor(props) {
      super(props);
      
  }

  render() {
    console.log(this.props.estudante)
    return (
       
              <UserCard
                bgImage="https://ununsplash.imgix.net/photo-1431578500526-4d9613015464?fit=crop&fm=jpg&h=300&q=75&w=400"
                avatar={avatar}
                name={this.props.estudante.userName}
                userName= {this.props.estudante.userEmail}
               
                description={ this.props.estudante.about }
               
              />
           
    )

  }


}

export default MyCard;