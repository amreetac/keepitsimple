// Ingredient
import React from 'react';
import {Editor, EditorState} from 'draft-js';

class Instruction extends React.Component {
  constructor(props) {
    super(props);
    this.state = {editorState: EditorState.createEmpty()};
    this.onChange = (editorState) => this.setState({editorState});
  }
  render() {
    const {editorState} = this.state;
    return(
		// Instruction List
		<div className="panel panel-default">
			<div className="panel-heading">
				<h2 className="panel-title"><strong>Instructions</strong></h2>
			</div>
			<div className="DraftEditor-editorContainer"><Editor editorState={editorState} onChange={this.onChange} />
			</div>
		</div>
    )
  }
}

module.exports = Instruction;