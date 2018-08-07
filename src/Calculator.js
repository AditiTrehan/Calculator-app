import React, { Component } from 'react';
import styled from 'styled-components';
import Buttons from './Buttons.js';

const Wrapper = styled.section`
    border:1px solid #000;
    height:521px;
    width:30%;
    margin:auto;
    margin-top:8%;
`;

const Display = styled.section`
      height:100px;
      width:100%;
      border-bottom:1px solid #000;
      background:#000;
      color:#fff;
      font-size:2em;
`;

<div>
  <Buttons />
</div>

const DisplayWindow = (props) => {
  return (
    <Display type="text" value={props.expression}>{props.expression}</Display>
  );
}

class Calculator extends Component {
  constructor() {
    super();

    this.state = {
      expression: '',
    }
  }

  onKeyPressed = (text) => {
    this.setState(
      (prev) => ({ expression: prev.expression + text })
    );
  }

  onEvaluatePressed = () => {
    let result = eval(this.state.expression);
    this.setState(
      { expression: result.toString() }
    );
  }

  onDeletePressed = () => {
    this.setState(
      (prev) => (
        { expression: prev.expression.length <= 1 ? ' ' : prev.expression.slice(0 , - 1) }
      )
    );
  }

  render() {
    let numberKeys = [];
    for (let i = 0; i < 10; i++) {
      numberKeys.push(
        <Buttons text={i} onKeyPressed={this.onKeyPressed}></Buttons>
      )
    }

    return (
      <Wrapper>
        <DisplayWindow
          expression={this.state.expression}>
        </DisplayWindow>

        <Buttons primary
          onKeyPressed={this.onDeletePressed}
          text="C">
        </Buttons>

        <Buttons
          onKeyPressed={this.onKeyPressed}
          text="/">
        </Buttons>

        <Buttons
          onKeyPressed={this.onKeyPressed}
          text="-">
        </Buttons>

        <Buttons
          onKeyPressed={this.onKeyPressed}
          text="+">
        </Buttons>

        <Buttons
          onKeyPressed={this.onKeyPressed}
          text="*">
        </Buttons>

        <Buttons
          onKeyPressed={this.onEvaluatePressed}
          text="=">
        </Buttons>

        <Buttons
          onKeyPressed={this.onKeyPressed}
          text="%">
        </Buttons>

        <Buttons
          onKeyPressed={this.onKeyPressed}
          text=".">
        </Buttons>

        {numberKeys}

      </Wrapper>

    );
  }
}

export default Calculator;