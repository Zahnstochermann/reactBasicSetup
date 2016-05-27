import React from 'react';

import './TaskItem.scss';

export class TaskItem extends React.Component {

	handleButtonClick(){
		this.props.deleteCallback(this.props.index);
	}

	render() {
  	let {title} = this.props;

  	return (
			<div className="list-item">
				<button className="deleteButton btn-floating waves-effect waves-light btn" type="button" onClick={this.handleButtonClick.bind(this)}>-</button>
				<span className="list-item-content">{title}</span>
			</div>
		);
  }
}
