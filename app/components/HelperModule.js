import React from 'react';
import './HelperModule.scss';

// ES6 class syntax; 'export' makes this symbol public
export class PersonComponent extends React.Component {
  render() {
    return (
      <div>
        <div className="test">Name: {this.props.myName}</div>
        <div>Age: {this.props.myAge}</div>
        <i className="fa fa-rocket"></i>
      </div>
    );
  }
}
