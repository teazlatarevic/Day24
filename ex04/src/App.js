import React, { Component } from 'react';

class App extends Component {
  setLocalStorage = () => {
    localStorage.setItem('Arena', 'Selection Month');
  }

  getLocalStorage = () => {
    const myLocalStorageData = localStorage.getItem('Arena');
    return myLocalStorageData;
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.setLocalStorage}>Click Me</button>
        <button onClick={this.getLocalStorage}>Click Me Too</button>
      </div>
    )
  }
}

export default App;