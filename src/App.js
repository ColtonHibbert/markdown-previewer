import React, { Component } from 'react';
import Previewer from './components/previewer/Previewer.js';
import Editor from './components/editor/Editor.js';
import 'tachyons';
import marked from 'marked';

const text = `
# My Heading  
## My Subheading 
here's a cool \`push()\` method 


 - list item 
 
 
 **nifty looking bold text** 
 
 Here's a [wiki link](https://en.wikipedia.org/wiki/The_Legend_of_Zelda) for this > blockquote!

 > The Legend of Zelda[a] is a fantasy action-adventure video game franchise created by Japanese game designers Shigeru Miyamoto and Takashi Tezuka.
 It is primarily developed and published by Nintendo, although some portable installments and re-releases have been outsourced to Capcom, Vanpool, and Grezzo.
 The series' gameplay incorporates action-adventure and elements of action RPG games
\`\`\`
function go() {
  console.log("go go go");
}
\`\`\`
Cool Zelda Game Title Picture 

![Random Quote Machine](https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Zelda_Logo.svg/375px-Zelda_Logo.svg.png)

 `
class App extends Component {
  constructor() {
    super();
    this.state={
      editorText: text,
    }
    this.appendToMarkdownString = this.appendToMarkdownString.bind(this);
    this.getMarkdownText = this.getMarkdownText.bind(this);
  }
  getMarkdownText() {
    let rawMarkup = marked(this.state.editorText, {sanitize: true, gfm: true, breaks: true});
    return { __html: rawMarkup };
  }
  appendToMarkdownString = (event) => {
    this.setState({editorText: event.target.value});
  }
  render() {
    return (
      <div 
        className="
        w-100 min-vh-100 bg-lightest-blue flex flex-column items-center pb5"
      >
        <h1>Welcome to My Awesome Markdown Previewer</h1>
        <p>Enter your text in markdown format in the editor section, it will display similar to how HTML renders.</p>
        <Editor 
          appendToMarkdownString={this.appendToMarkdownString}
          editorText={this.state.editorText}
         
        /> 
        <Previewer 
          getMarkdownText={this.getMarkdownText}
        />  
      </div>
    );
  }
}

export default App;
