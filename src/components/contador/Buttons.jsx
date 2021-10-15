import React from "react";

export default class Contador extends React.Component {
  render() {
    return (
      <>
        <div>
          <button
            onClick={
              this.props.soma ? this.props.Almentar : this.props.Diminuir
            }
          >
            {this.props.soma ? this.props.soma : this.props.subtrai}
          </button>
        </div>
      </>
    );
  }
}
