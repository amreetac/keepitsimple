// Ingredient
import React from 'react';

class PantryIngredient extends React.Component {
  constructor(props) {
    super(props);
//    this.onChange = (value) => this.setState({value});
  }

  render() {
    return  (
      <div>
        <img src= {this.props.ingredient.foodimg} />
      </div>
    )
  //     value: this.state.value,
  //     onChange: this.onChange
  //   });
  // }
 
  // onChange(value) {
  //   this.setState({value: value});
  //   if (this.props.onChange) {
  //     // Send the changes up to the parent component as an HTML string. 
  //     // This is here to demonstrate using `.toString()` but in a real app it 
  //     // would be better to avoid generating a string on each change. 
  //     this.props.onChange(
  //       value.toString('html')
  //     );
  //   }
  }
 
}

export default PantryIngredient;