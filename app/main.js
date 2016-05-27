// Use ES6 import syntax ...

// Webpack will find these files in node_modules/
import React from 'react';
import ReactDOM from 'react-dom'; 

// Webpack will find this file in src/helper_module.js
import {PersonComponent} from './components/HelperModule';
import {TaskWidget} from './components/TaskList';

import './application.scss';

// Use React JSX syntax:
ReactDOM.render(
<div className="container">
  <div className="row">
    <div className="col s12">
      <PersonComponent myName={"Heino"} myAge={89} />
    </div>
  </div>
  <div className="row">
    <div className="col s12">
      <TaskWidget />
    </div>
  </div>
</div>
,
  document.getElementById("react-entrypoint")
);
