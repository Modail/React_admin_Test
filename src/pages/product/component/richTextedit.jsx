import React, { Component } from "react";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

export default class RichTextEditor extends Component {
  state = {
    editorState: undefined,
  };

  onEditorStateChange = (editorState) => {
    this.setState({
      editorState,
    });
  };

  render() {
    return (
      <Editor
        wrapperClassName="demo-wrapper"
        editorClassName="demo-editor"
        editorStyle={{ border: "1px solid black", minHeight: 200 }}
        onEditorStateChange={this.onEditorStateChange}
      />
    );
  }
}
