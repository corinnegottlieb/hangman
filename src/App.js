import React, { Component } from 'react';
import './App.css';
import Solution from './components/Solution'
import Score from './components/Score'
import Letters from './components/Letters'
import Endgame from './components/Endgame';


const games = [
  { word: `DOG`, hint: `Meow` },
  { word: `CAT`, hint: `WOOF!` },
  { word: `SUN`, hint: `Center of our solar system` }
]


class App extends Component {
  constructor() {
    super()
    this.state = {
      letterStatus: this.generateLetterStatuses(),
      index: 0,
      solution: games[0],
      score: 100,

    }
  }
  // generateSolution(){
  // let solution = {}
  // console.log(this.state.games)
  // let i = Math.floor(Math.random()*3)
  // solution = this.state.games[i] 
  // return solution
  // }
  newGame = () => {
    this.setState({
      index: this.state.index + 1,
      solution: games[this.state.index + 1],
      letterStatus: this.generateLetterStatuses()
    })
  }

  selectLetter = letter => {
    let letterStatus = { ...this.state.letterStatus }
    letterStatus[letter] = true
    if (this.state.solution.word.indexOf(letter) >= 0) {
      this.setState({
        letterStatus,
        score: this.state.score + 5
      })
    }
    else {
      this.setState({
        letterStatus,
        score: this.state.score - 20
      })
    }
  }

  generateLetterStatuses() {
    let letterStatus = {}
    for (let i = 65; i < 91; i++) {
      letterStatus[String.fromCharCode(i)] = false
    }
    return letterStatus
  }

  render() {
    return (<div>
      <h1>HANGMAN : The Game</h1>
      <Score score={this.state.score} />
      <Solution letterStatus={this.state.letterStatus} solution={this.state.solution} />
      <Letters selectLetter={this.selectLetter} letterStatus={this.state.letterStatus} />
      <Endgame score={this.state.score} letterStatus={this.state.letterStatus} solution={this.state.solution} newGame={this.newGame} />
    </div>

    )

  }
}

export default App;
