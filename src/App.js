import React, { Component } from "react";
import Header from "./Header";

class App extends Component {
  constructor() {
    super();
    this.pages = ['Home', 'About Me', 'Blog', 'Images', 'Links'];
    this.state = {
      currentPage: 0
    }
    this.setPage = this.setPage.bind(this)
  }
  setPage(newPageNum) {
    console.log(newPageNum)
    this.setState({currentPage: newPageNum})
  }

  render() {
    return (
      <div className="App container">
        <Header 
        pages= {this.pages}
        currentPage={this.state.currentPage}
        setPage={this.setPage}
        />
        
      </div>
    );
  }
}

export default App;

//super();
  //   this.austinName = "Austin";
  //   this.age = 23;

  //   this.state = {
  //     clicked: 0,
  //   };
  //   this.clickHandler = this.clickHandler.bind(this)
  // }
  // clickHandler (e){
  //   this.setState({ clicked: this.state.clicked + 1})
  // }
  // text="howdy" 
        // name={this.austinName} 
        // age={this.age} 
        // gardener
        // clicked={this.state.clicked}
        // parentState={this.state}
        // array={[1,2,3,4,5]}
        // clickHandler={this.clickHandler}
        
        /* App Layer Component
        <div>
        clicked: {this.state.clicked}
        </div>
        <div>
        <button 
        className='btn btn-primary' 
        onClick={this.clickHandler}>
        Click Me!</button>
        </div> */
