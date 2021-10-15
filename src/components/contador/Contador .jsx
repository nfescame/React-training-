import React from "react";
import Display from "./Display";
import Button from "./Buttons";
import "./button.css";

export default class Contador extends React.Component {
  state = {
    num: this.props.valueInitial || 0,
  };

  almentar = () => {
    this.setState({ num: this.state.num + 1 });
  };

  diminuir = () => {
    this.setState({ num: this.state.num - 1 });
  };

  render() {
    return (
      <div>
        <h2>Contador</h2>
        <Display value={this.state.num}></Display>

        <div className='Btn'>
          <Button soma='+' Almentar={this.almentar}></Button>
          <Button subtrai='-' Diminuir={this.diminuir}></Button>
        </div>
      </div>
    );
  }
}
