// Use ES6 import syntax ...

// Webpack will find these files in node_modules/
import React from 'react';
import ReactDOM from 'react-dom';

// Webpack will find this file in src/helper_module.js
import {PersonComponent} from './components/HelperModule';

import './application.scss';

// Use React JSX syntax:
ReactDOM.render(
<div>
  <PersonComponent myName={"Heino"} myAge={89} />
</div>
,
  document.getElementById("exampleDiv")
);
