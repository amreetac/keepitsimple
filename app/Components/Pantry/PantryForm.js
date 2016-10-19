import React from 'react';
// import React.Bootstrap from 'react-bootstrap';
// import React.Bootstrap.Select from 'react-bootstrap-select';
import Navbar from '../Children/Navbar';
import Footer from '../Children/Footer';
import PantryIngredient from './PantryIngredient'
// class PantryForm
class PantryForm extends React.Component{
	constructor(props){
		super(props);

		this.state = {
			results:[]
		}
	}
	setResults(results){
		this.setState({
			results: results
		})
	}
	componentWillMount() {
		
	
		console.log("getIngredientResults: ", this.state.term);
		var self = this;
		var currentURL = window.location.origin;
		console.log(currentURL+ "/allIngredients")

		$.get( currentURL + "/allIngredients", function( data ) {
			console.log('componentWillMount*************data**************');
			// if(data == false){
			// 	$("#name").text(" No Ingredients Found ");
			// 	$("#stats").hide();
			// }
			// else {
			// 	$("#stats").show();
				self.setState({
              		results: data
            	})
            	console.log('self.state.results', self.state.results);
			// }
			
		})
	}
	render(){
		return(
			<div>
			<Navbar />
			<div className="panel panel-default">
				<div className="panel-heading">
					<div >
						<h1>Select Ingredients</h1>
						<div className="panel-body" id="ingredients">
							

							<form id="show-ingredient"  method='GET'>
								<ul className="recipe-list">
									{this.state.results.map(function(result){
										return(
											<PantryIngredient  key={result.foodid} ingredient={result}/>
										)
									})}
								</ul>
							</form>
							</div>	
						</div>
					</div>
					<div className="panel-body text-center">
					</div>
				</div>
			<Footer />
		</div>
		)
	}
}

export default PantryForm;