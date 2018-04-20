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
    currentScore: 0,
    clicked: []
  };

  shuffle = id => {

    let newScore = 0;
    let gameOver = false;

    console.log(this.state.clicked)

        this.state.clicked.forEach(item => {

          console.log(item.id)

          if (this.state.currentScore > this.state.topScore){newScore = this.state.currentScore}

          if (id === item){
                alert("Game over. Refresh the page to retry.")
                this.setState({
                  currentScore: 0,
                  clicked: [],
                  topScore: newScore
                })
                gameOver = true  
          }
          })

          if (!gameOver){
              this.setState({
                  currentScore: this.state.currentScore + 1,
                  characters: this.state.characters.sort(function(a, b){return 0.5 - Math.random()}),
                  clicked: [...this.state.clicked, id]
              })
          }
        }

  render() {
    return (
      <div>
          <Title topScore = {this.state.topScore} currentScore = {this.state.currentScore} />
          <Wrapper>
            {this.state.characters.map(character => {
                return <Cards 
                    shuffle = {this.shuffle}
                    id = {character.id}
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