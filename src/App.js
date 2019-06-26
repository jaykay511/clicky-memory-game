import React, { Component } from "react";
import CharacterCard from "./components/CharacterCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Message from "./components/Message";
import Jumbotron from "./components/Jumbotron";
import characters from "./characters.json";

class App extends Component {
  // Setting this.state.characters to the characters json array
  state = {
    characters
  };

  handleCardClick = id => {

    this.setState({
      characters: this.shuffleCards(characters)
    });

    // check to see if card that is clicked has already been clicked on using id
    // push to new array if not clicked on
    // adjust score

  }

  shuffleCards (array) {
    array.sort(() => Math.random() - 0.5);

    return array;
  }

  // Map over this.state.characters and render a CharacterCard component for each object
  render() {
    return (
      <Wrapper>
        <Title>Clicky Memory Game</Title>
        <Message></Message>
        <Jumbotron></Jumbotron>
        {this.state.characters.map(character => (
          <CharacterCard
            id={character.id}
            key={character.id}
            image={character.image}
            handleClick={this.handleCardClick}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;