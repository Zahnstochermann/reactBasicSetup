import React from 'react';
import {TaskForm} from './TaskForm';
import {TaskItem} from './TaskItem';

import './TaskList.scss';

export class TaskWidget extends React.Component {
	constructor(props) {
  	super(props);
    this.state = {tasks: []};
	}

  componentDidMount() {
  	// Simulate AJAX Call
    setTimeout(function(){
    	this.setState({tasks: [{title: "A"}, {title: "B"}]});
    }.bind(this), 100);
  }

  addTask(inputText){
    let newTasks = this.state.tasks;
 	  newTasks.push({title:inputText});
  	this.setState({tasks:newTasks});
  }

	deleteTask(index){
		let newArray = this.state.tasks;
		newArray.splice(index, 1);
		this.setState({tasks:newArray});
	}

  render() {
  	let {tasks} = this.state;

    let taskHtmlArray = [];
    tasks.forEach(function(item, index) {
    	taskHtmlArray.push(<TaskItem deleteCallback={this.deleteTask.bind(this)} title={item.title} index={index}/>);
    }.bind(this));

  	return (
    <div className="widget">
    	<TaskForm addCallback={this.addTask.bind(this)}/>
      <div className="row">
        <div className="col s12">
          <div className="list-container">{taskHtmlArray}</div>
        </div>
      </div>
    </div>
  )
  }
}
