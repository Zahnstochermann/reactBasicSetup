import React from 'react';

import './TaskForm.scss';

export class TaskForm extends React.Component {
  constructor(props) {
  	super(props);
    this.state = {inputText:""};
	}

  handleChange(event){
  	this.setState({inputText: event.target.value});
  }

  handleButtonClick(){
    this.props.addCallback(this.state.inputText);
  	this.setState({inputText: ""});
  }

  render() {
    let {inputText} = this.state;
    return(
      <div className="row">
        <div className="col s12">
          <div className="form-container">
          	<form>
            	<div className="input-field col s6">
                <input className="validate" type="text" name="firstname" placeholder="add item" value={inputText} onChange={this.handleChange.bind(this)} />
              </div>
              <button className="waves-effect waves-light btn" type="button" onClick={this.handleButtonClick.bind(this)}>Add</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
