import React from 'react';
import axios from 'axios';
class Form extends React.Component{
	constructor(props){
		super(props);

		this.state = {
			term: ""
		}

		this.handleChange = this.handleChange.bind(this);
		this.handleClick = this.handleClick.bind(this);
	}

	handleChange(event){
		var newState = {};
		newState[event.target.id] = event.target.value;
		this.setState(newState);
	}

	handleClick(){
		console.log("CLICK");
		console.log(this.state.term);

		this.props.setTerm(this.state.term);
		//var queryURL ="/search?key=119e99ed960f27a6545bf45ad0506cdb&q=chicken";
		/*		
		var instance = axios.create({
			baseURL: 'https://some-domain.com/api/',
			timeout: 1000,
			headers: {'X-Custom-Header': 'foobar'}
		});

// These code snippets use an open-source library. http://unirest.io/nodejs
unirest.get("https://community-food2fork.p.mashape.com/get?key=&rId=37859")
.header("X-Mashape-Key", "RsW6ifPSUUmshG6tH3UMXZUc9MGip1qU31IjsnAqvX1SjGB2vA")
.header("Accept", "application/json")
.end(function (result) {
  console.log(result.status, result.headers, result.body);
});
// */
// 		var searchQuery = axios.create({
// 			baseURL: 'http://food2fork.com/api/',
// 			timeout: 1000
// 		});
// 		searchQuery.get(queryURL).then(function (response) {
//     		console.log(response);
//   		})

  		var searchedRecipe = $("#term").val().trim();

			searchedRecipe = searchedRecipe.replace(/\s+/g, '').toLowerCase();

			var currentURL = window.location.origin;

			$.get( currentURL + "/api/" + searchedRecipe, function( data ) {

				console.log(data);
				if(data == false){
					$("#name").text("The force is not strong with this one. Your character was not found. ");
					$("#stats").hide();
				}
				else {
					$("#stats").show();
					$("#title").text(data.title);
					$("#source_url").attr("href", data.source_url);
					$("#image_url").attr("src", data.image_url);
				}

			});
}

	

	render(){

		return(
			<div>
				<div className="panel panel-default">
					<div className="panel-heading">
						<h2 className="panel-title text-center"><strong>Ingredient</strong></h2>
					</div>
					<div className="panel-body text-center">

							<form>
								<div className="form-group">
									<h4 className="text-center">
										<em>
											Enter an ingredient to search for a recipe (ex: "banana").
										</em>
									</h4>
					
									<input type="text" className="form-control text-center" id="term" onChange= {this.handleChange} required/>
									<br />
									<button type="button" className="btn btn-primary" onClick={this.handleClick}>Submit</button>
								</div>

							</form>
					</div>
				</div>
				<div className="panel panel-default">
					<div className="panel-heading">
						<h3 className="panel-title"><strong>Recipe Result</strong></h3>
					</div>
					<div className="panel-body">
						<div className="well">
							<h2 id="title">All Recipes</h2>
							<div id="stats">
								<h3><strong>Source:</strong> <span ><a id="source_url" target="_blank" href="http://allrecipes.com/Recipe/Slow-Cooker-Chicken-Tortilla-Soup/Detail.aspx">Recipe</a></span></h3>
								<h3><strong>Image:</strong> <span ><image id="image_url" src="http://static.food2fork.com/19321150c4.jpg" /></span></h3>
							</div>
						</div>
					</div>
				</div>
			</div>

		)
	}
}

export default Form;

