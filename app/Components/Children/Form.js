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

		//this.props.setTerm(this.state.term);
		var queryURL ="/search?key=119e99ed960f27a6545bf45ad0506cdb&q=chicken";
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
*/
		var searchQuery = axios.create({
			baseURL: 'http://food2fork.com/api/',
			timeout: 1000
		});
		searchQuery.get(queryURL).then(function (response) {
    		console.log(response);
  		})


	}

	render(){

		return(

			<div className="panel panel-default">
				<div className="panel-heading">
					<h2 className="panel-title text-center"><strong>Ingredient</strong></h2>				</div>
				<div className="panel-body text-center">

						<form>
							<div className="form-group">
								<h4 className="text-center">
									<em>
										Enter an ingredient to search for a recipe (ex: "banana").
									</em>
								</h4>
				
								{/*Note how each of the form elements has an id that matches the state. This is not necessary but it is convenient.
									Also note how each has an onChange event associated with our handleChange event. 
								*/}
								<input type="text" className="form-control text-center" id="term" onChange= {this.handleChange} required/>
								<br />
								<button type="button" className="btn btn-primary" onClick={this.handleClick}>Submit</button>
							</div>

						</form>
				</div>
			</div>

		)
	}
}

export default Form;

