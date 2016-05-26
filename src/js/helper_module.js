import React from 'react';

// ES6 class syntax; 'export' makes this symbol public
export class PersonComponent extends React.Component {
  render() {
    return (
      <div>
        <div>Name: {this.props.myName}</div>
        <div>Age: {this.props.myAge}</div>
      </div>
    );
  }
}
