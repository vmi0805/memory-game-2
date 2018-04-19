import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import characters from "./cards_JSON.json";
import Cards from "./components/Cards"
import "./App.css";


class App extends Component {
  state = {
    characters,
    highScore,
    lowScore,
    currentScore
  };

  render() {
    return (
        <Title topScore = "state.topScore" currentScore= "state.currentScore"/>
        <Wrapper>
          {this.state.characters.map(function(character){
              <Cards 
                  shuffle = {this.suffle}
                  key = {friend.id}
                  alt = {friend.name}
                  src = {friend.image}
              />
          })}
        </Wrapper>     


// one of the props is handlefriend
// need to create a handlefriend function
// need to compare (recall the usage of : ? - ternaries)
// used .sort method with mathrandom + 0.5


    );
  }
}

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }

export default App;
