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

  shuffleAndcompare = id => {

    this.setState({
       characters: this.state.characters.sort(function(a, b){return 0.5 - Math.random()})
     })

    console.log(id)

    console.log(this.state.characters[0][0])

  }

  render() {
    return (
      <div>
          <Title topScore = {this.state.topScore} currentScore = {this.state.currentScore} />
          <Wrapper>
            {this.state.characters.map((character) => {
                console.log(character)
                return <Cards 
                    shuffleAndcompare = {this.shuffleAndcompare}
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

    // // Filter this.state.friends for friends with an id not equal to the id being removed
    // const friends = this.state.friends.filter(friend => friend.id !== id);
    // // Set this.state.friends equal to the new friends array
    // this.setState({ friends });

export default App;
