// Ingredient
import React, {Component, PropTypes} from 'react'
import RichTextEditor from 'react-rte';

class InstructionEditor extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: RichTextEditor.createEmptyValue()
    }
  }
 
  onChange(value) {
    this.setState({value});
    if (this.props.onChange) {
      // Send the changes up to the parent component as an HTML string. 
      // This is here to demonstrate using `.toString()` but in a real app it 
      // would be better to avoid generating a string on each change. 
      this.props.onChange(
        value.toString('html')
      );
    }
  }

  componentWillMount() {
    this.setState({width:1000,height:500});
    console.log("editor onLoad")
  }

  render() {
    return (
      <RichTextEditor 
        value = {this.state.value}
        onChange = {this.onChange.bind(this)}
      />
    );
  }
 
}

export default InstructionEditor;