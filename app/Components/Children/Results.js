var React = require('react');

var Result = React.createClass({
  saveRecipeResults(){
    console.log("saveRecipeResults: #################################", );

    
    
  },
  saveRecipeClick(){
    console.log("CLICK");
    this.saveRecipeResults();
  }, 
  render: function(){
    return(
      <div className="col-xs-12 col-sm-6 col-md-4 clearfix">
  		  <li className="list-group-item">
            <h4>{this.props.article.title}</h4>
            <a href={this.props.article.spoonacularSourceUrl} target="_blank"> <img src={this.props.article.image} alt={this.props.article.title} height="200" width="300" /></a>
  			    <p>Cuisines: {this.props.article.cuisines}</p>
            <p>Ready In Minutes: {this.props.article.readyInMinutes}</p>
            <p>weightWatcherSmartPoints: {this.props.article.weightWatcherSmartPoints} </p>
            <div className="btn-group pull-top">
     	    	<button type="button" className="btn btn-primary" onClick={this.saveRecipeClick}>Save</button>
        	</div>
        	
        </li>
      </div>
    )
  }
});

module.exports = Result;
