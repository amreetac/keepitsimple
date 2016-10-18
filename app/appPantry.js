// Include the Main React Dependencies
import React from 'react';
import ReactDOM from 'react-dom';
// Include the Main Component
import PantryForm from './Components/Pantry/PantryForm';
// Include the Main Component
// import Main from './Components/Main';
import Router from './router';

// This code here allows us to render our main component (in this case "Main")
ReactDOM.render(

	<PantryForm />,
	document.getElementById('appPantry')
)