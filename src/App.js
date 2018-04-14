import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import cards from "./cards.json";
import "./App.css";


class App extends Component {
  state = {
    cards
  };

  render() {
    return (
      <Wrapper>
        <Title>
            <div class = "navbar">
                <ul>
                  <li class = "brand">
                    <a href = "/">Clicky game</a>
                  </li>
                  <li>
                    <p>hi</p>
                  </li>
                </ul>
            </div>
            <div class = "header">
              <h1>Clicky game</h1>
              <h2>Click on an image to earn points but do not click on any image more than once!</h2>
            </div>
        </Title>
      </Wrapper>

        // {this.state.friends.map(friend => (
        //   <FriendCard
        //     removeFriend={this.removeFriend}
        //     id={friend.id}
        //     key={friend.id}
        //     name={friend.name}
        //     image={friend.image}
        //     occupation={friend.occupation}
        //     location={friend.location}
        //   />
        // ))}
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
