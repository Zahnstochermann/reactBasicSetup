import React from 'react';
import {TaskForm} from './TaskForm';
import {TaskItem} from './TaskItem';

import './TaskList.scss';

export class TaskWidget extends React.Component {
	constructor(props) {
  	super(props);
    this.state = {tasks: []};
		//  this-.functionname = this.functionname.bind(this)
	}

	loadLocalStorage() {
		console.log("hello!!");
	}

  componentDidMount() {
		this.loadLocalStorage();
		if(typeof(Storage) !== "undefined") {

			if (localStorage.myTasks) {
				console.log("storage exists " + localStorage.myTasks);

				var jsonObj = JSON.parse(localStorage.myTasks)
				console.log(jsonObj)
				this.setState(jsonObj)
				console.log(localStorage.getItem("title"))
			}
			else {
			}

		}
		else {
			console.log("sry, nothing in localstorage ");
		}
  }

  addTask(inputText){
    let newTasks = this.state.tasks;
 	  newTasks.push({title:inputText});
  	this.setState({tasks:newTasks});
		localStorage.setItem('myTasks', JSON.stringify({tasks:newTasks}));
  }

	deleteTask(index){
		let newArray = this.state.tasks;
		newArray.splice(index, 1);
		this.setState({tasks:newArray});
		localStorage.setItem('myTasks', JSON.stringify({tasks:newArray}));
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
