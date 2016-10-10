var React = require('react');

var Result = React.createClass({
  render: function(){
    return(
      <div>
  		<li className="list-group-item">
  			<a href={this.props.article.image} target="_blank">{this.props.article.title}</a>
     	    <div className="btn-group pull-right">
     	    	<button type="button" className="btn btn-primary">Save</button>
        	</div>
        	
        </li>
      </div>
    )
  }
});

module.exports = Result;