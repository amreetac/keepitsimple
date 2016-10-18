import React from 'react';
import Api from '../../utils/api';

class Result extends React.Component{
  constructor() {
    super();
    this.state = { saved: false };
  }
  handleClick(){

    Api.newRecipe(this.props.article).then(res => {
      
      console.log('result handle click', res);
      this.setState({ saved: true });
    })
      .catch(err => {
        console.log(err)
      })

    // Api.getRecipes().then
  } 
  render(){
    return(
      <div className="col-xs-12 col-sm-6 col-md-4 clearfix">
        <li className="list-group-item">
        <h4>{this.props.article.title}</h4>
            <a href={this.props.article.spoonacularSourceUrl} target="_blank"> <img src={this.props.article.image} alt={this.props.article.title} height="200" width="300" /></a>
            <p>Cuisines: {this.props.article.cuisines}</p>
            <p>Ready In Minutes: {this.props.article.readyInMinutes}</p>
            <p>weightWatcherSmartPoints: {this.props.article.weightWatcherSmartPoints} </p>
            {this.renderButton()}      
        </li>
      </div>
    )
  }
  renderButton(){
    if (this.state.saved) {
      return (
        <button type="button" className="btn btn-default disabled">Recipe Saved!</button> 
      );
    } else {
      return (
        <button type="button" className="btn btn-primary" onClick={this.handleClick.bind(this)}>Save</button> 
      )
    }

  }
};

export default Result;