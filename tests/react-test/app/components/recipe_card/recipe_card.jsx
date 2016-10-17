// The RecipeCard form will allow the user to
// Create, Read, Update and Delete recipes
// from the user's recipe book
import React from 'react';

// The RecipeCard has the following components:
// * RecipeName - name of the recipe
// * Ingredients - list of ingredients for the recipe
console.log(1)
// * Instructions - list of instructions
import RecipeName from './recipe_name.jsx';
console.log(2)
import Ingredients from './ingredients.jsx';
console.log(3)
import Instructions from './instructions.jsx';
console.log(4)

class RecipeCard extends React.Component {
	constructor(props){
		super(props);

		this.state = {
			name: "",
			ingredients:[],
			instructions:[]
		}
		
		// this.handleChange = this.handleChange.bind(this);
		// this.handleKeyDown = this.handleKeyDown.bind(this);
		// this.handleClick = this.handleClick.bind(this);
		// this.handleSubmit = this.handleSubmit.bind(this);

	}

	setName(name){
		console.log("RecipeCard.setName(): ", name)
		this.setState({
			name: name
		})
	}

	setIngredients(ingredients){
		console.log("RecipeCard.setIngredients(): ", ingredients)
		this.setState({
			ingredients: ingredients
		})
	}

	setInstructions(instructions){
		console.log("RecipeCard.setInstructions(): ", instructions)
		this.setState({
			instructions: instructions
		})
	}

	// When a recipe card is submitted, create a new RecipeCard
	// model and insert it in the database.
	handleSubmit(){

		console.log("RecipeCard.handleSubmit(): ", this.state);

		console.log("Save Recipe In Database Here");

		console.log("Recipe Name: ", this.state.name);
		// var self = this;
		// var currentURL = window.location.origin;
		// console.log(currentURL+ "/recipe/" + this.state.term)

		// $.get( currentURL + "/recipe/" + this.state.term, function( data ) {
		// 	console.log('data', data);
		// 	if(data == false){
		// 		$("#name").text(" No Recipes Found ");
		// 		$("#stats").hide();
		// 	}
		// 	else {
		// 		$("#stats").show();
		// 		self.setState({
  		//      	results: data
  		//		})
  		//      console.log('self.state.results', self.state.results);
		// 	}
			
		// })
	}

	// Call the appropriate method depending on new state
	// handleChange(event){
	// 	console.log("RecipeCard.handleChange(event) event: ", event);
	// 	var newState = {};
	// 	newState[event.target.id] = event.target.value;
	// 	this.setState(newState);
		
	// }

	handleChange(name) {
		this.setName(name);
	}

	handleKeyDown(e) {
		console.log("KEY DOWN")
	// if (e.key === 'Enter'){
	// 	e.preventDefault()
	// 	if (this.state.term){
  	//     			this.getSearchResults();
  	//     		}
  	//   	}
  	}
	
	handleClick(){
		console.log("CLICK");
		if (this.state.term){
      			this.crea();
      		}	
	}	

	render(){
		return(
			<div>
				<div className="panel panel-default">
					<div className="panel-heading">
						<h2 className="panel-title text-center"><strong>Recipe Card</strong></h2>
					</div>
					<div className="panel-body text-center">

							<form id="recipe-card">

								<div className="form-group">
					
									<RecipeName type="text" className="form-control text-center" id="term" handleChange={this.handleChange.bind(this)} required/>

									<br />
								
									<Ingredients />
									
									<Instructions />

									<button type="button" className="btn btn-primary" onClick={this.handleSubmit.bind(this)}>Submit</button>
								</div>

							</form>
					</div>
				</div>


			</div>

		)
	}
}

export default RecipeCard;