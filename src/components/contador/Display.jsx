import React from "react";

export default class Contador extends React.Component {
  render() {
    return (
      <>
        <div>
          <h4>Display: {this.props.value}</h4>
        </div>
      </>
    );
  }
}
