import React from 'react';
import './HelperModule.scss';

// ES6 class syntax; 'export' makes this symbol public
export class PersonComponent extends React.Component {
  render() {
    return (
      <div>
        <span className="test">Name: {this.props.myName}</span>
        <span>Age: {this.props.myAge}</span>
          <span className="fa fa-rocket"></span>
      </div>
    );
  }
}
