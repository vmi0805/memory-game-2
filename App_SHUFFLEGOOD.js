import React, { Component } from "react";
import Wrapper from "./Components/Wrapper";
import Title from "./Components/Title";
import Cards from "./Components/Cards"
import characters from "./cards_JSON.json";
import "./App.css";


class App extends Component {
  state = {
    characters,
    highScore: 0,
    topScore: 0,
    currentScore: 0
  };

  shuffle = () => {

      this.setState(
         {characters: this.state.characters.sort(function(a, b){return 0.5 - Math.random()})})

  }

  render() {
    return (
      <div>
          <Title topScore = {this.state.topScore} currentScore = {this.state.currentScore} />
          <Wrapper>
            {this.state.characters.map((character) => {
                console.log(character)
                return <Cards 
                    shuffle = {this.shuffle}
                    key = {character.id}
                    alt = {character.name}
                    src = {character.image}
                />
            })}
          </Wrapper>   
      </div>  
    );
  }
}

export default App;
