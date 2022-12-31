
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom'
import './style.css';
import {marked} from 'marked'


//Wrapper
class Wrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "# h1 element \r ## h2 element \r### this could go on and on...\r this is code between two backticks `<div></div>`\r```\r//this is multiline code:\rfunction hello() {\r console.log('hello'+'world')\r}\r```\r You can make text **bold**, _italic_, or _**both**_\r If u don't like it ~~you cross it~~.\r Your [links](https://www.freecodecamp.org)\r\r >  Block Quotes!\r\r - And of course there are lists.\r-- Some are bulleted.\r\r1. lists?\r1. two\r1. or three?\r What about a cat photo?\r![cat-photo](https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)"
    }
  this.handleChange = this.handleChange.bind(this)
  };
    handleChange(event) {
      this.setState({
        text:event.target.value
      })
    }

     getMarkdownText() {
    var rawMarkup = marked.parse(this.state.text);
    return { __html: rawMarkup };
  }


  
 
  render() {
  
    return (  
      <div id="main">
      <div>
        <div className="blue"><h3>editor</h3></div>
        <textarea id="editor" value={this.state.text} onChange={this.handleChange}>
        </textarea>
        </div>
        <div className="blue prev"><h3>preview</h3></div>
          <div id="preview" dangerouslySetInnerHTML={this.getMarkdownText()}  >
        </div>
        </div>
     )
  }
}

ReactDOM.render(<Wrapper/>, document.getElementById("root"))