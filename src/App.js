import React, { Component } from 'react';
import './App.css';

const  marked = require('marked');

class App extends Component {
    state = {
        markdown : ""
    }
  render() {
    return (
      <div className="container">
          <h1 className="text-center">Markdown previewer</h1>
          <div className="row">
               <div className="col-sm-6">
                   <div className="form-group">
                       <textarea className="form-control" placeholder="Enter Mark down" value={this.state.markdown} onChange={(e) => this.setState({markdown : e.target.value})}></textarea>
                   </div>
               </div>
               <div className="col-sm-6">
                    <h2>Mark down output</h2>
                    <div dangerouslySetInnerHTML = {{__html: marked(this.state.markdown)}}></div>
               </div>
          </div>
      </div>
    );
  }
}

export default App;
