import React, { Component } from "react";

class App extends Component {
  setMyStorage = () => {
    document.cookie = "Year=2021";
    localStorage.setItem("Paragon", "yes, but Arena first");
    sessionStorage.setItem("frontend", "React");
  };

  getMyStorage = () => {
    let cookie = {};
    document.cookie.split(";").forEach(function (el) {
      let [k, v] = el.split("=");
      cookie[k.trim()] = v;
    });
    const myCookieData = cookie["Year"];
    const myLocalStorageData = localStorage.getItem("Paragon");
    const mySessionStorageData = sessionStorage.getItem("frontend");
    return (myCookieData, myLocalStorageData, mySessionStorageData);
  };

  render() {
    return (
      <div className="App">
        <button onClick={this.setMyStorage}>ClickMe</button>
        <button onClick={this.getMyStorage}>ClickMeToo</button>
      </div>
    );
  }
}

export default App;
