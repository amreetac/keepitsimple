// Ingredient
import React from 'react';
import RichTextEditor from 'react-rte';

class InstructionEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: RichTextEditor.createEmptyValue()};
    this.onChange = (value) => this.setState({value});
  }

  render() {
    return React.createElement(RichTextEditor, {
      value: this.state.value,
      onChange: this.onChange
    });
  }
 
  onChange(value) {
    this.setState({value: value});
    if (this.props.onChange) {
      // Send the changes up to the parent component as an HTML string. 
      // This is here to demonstrate using `.toString()` but in a real app it 
      // would be better to avoid generating a string on each change. 
      this.props.onChange(
        value.toString('html')
      );
    }
  }
 
}

export default InstructionEditor;