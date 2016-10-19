// Recipe Name
import React from 'react';

class RecipeName extends React.Component {

	handleChange(e){
		console.log("RecipeName.handleChange(e): ", e.target.value);
		console.log("this: ", this);
		this.props.handleChange(e.target.value);
	}

	render() {
		console.log("RecipeName.render()")
		return(
		  	<div className = "recipeName">
   				<label htmlFor="recipe-name">Recipe Name</label>
				<input type="text" 
					name="recipe-name" 
					id="recipe-name" 
					className="form-control" 
					placeholder="ex: Green Power Smoothie"
					onChange={this.handleChange.bind(this)} 
					required autofocus />
				{/*<label>Name:</label>*/}
				{/*<input type="text" onChange={this.handleChange.bind(this)} />*/}
			</div>
		)
	}
}

module.exports = RecipeName;