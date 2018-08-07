import React, { Component } from "react";
import styled from 'styled-components';

const Button = styled.button`
      width: 33.3%;
      font-size:2em;
      height:70px;
      float:left;
      background:#fff
`;

class Buttons extends Component{
    constructor (props){
      super(props);
    }

    onClick=()=>{
      this.props.onKeyPressed(this.props.text);
    }

    render(){
      return(
        <Button onClick={this.onClick}>{this.props.text} </Button>
      );
    }
  }

export default Buttons;