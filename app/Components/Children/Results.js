var React = require('react');

var Result = React.createClass({
  render: function(){
    return(
      <div className="col-xs-12 col-sm-6 col-md-4">
  		  <li className="list-group-item">
          <h4>{this.props.article.title}</h4>
          <img src={this.props.article.image} alt={this.props.article.title} height="100" width="100" />
  			 <div className="btn-group pull-right">
     	    	<button type="button" className="btn btn-primary">Save</button>
        	</div>
        	
        </li>
      </div>
    )
  }
});

module.exports = Result;