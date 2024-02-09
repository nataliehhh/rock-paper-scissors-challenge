import { useState, useEffect } from 'react'
import PlayButtons from "./components/PlayButtons"
import PlayerOnePlay from "./components/PlayerOnePlay"
import PlayerTwoPlay from "./components/PlayerTwoPlay"
import GameResult from "./components/GameResult"
import ScoreArea from "./components/ScoreArea"

import './App.css'

export default function App() {
  const [playerOnePlay, setPlayerOnePlay] = useState("")
  const [playerTwoPlay, setPlayerTwoPlay] = useState("")
  const [bothPlayed, setbothPlayed] = useState(false)
  const [result, setResult] = useState(0)
  const [playerOneScore, setPlayerOneScore] = useState(0)
  const [playerTwoScore, setPlayerTwoScore] = useState(0)

  const playOptions = ["rock", "paper", "scissors"]

  useEffect(() => {
    if (bothPlayed === true) {
    // console.log("player one set", playerOnePlay)
    // console.log("player two set", playerTwoPlay)
    setTimeout(() => {
      checkGame()
      setbothPlayed(false)
    }, 300)
    console.log("result", result)
}}, [bothPlayed])

  function checkGame() {
    if (bothPlayed === true) {
    if (playerOnePlay === playerTwoPlay) {
      setResult(0)
      return result
    }
    // player 1 wins - 1 rock vs 2 scis / 1 scis vs 2 paper / 1 paper vs 2 rock
    if ((playerOnePlay === playOptions[0] && playerTwoPlay === playOptions[2]) || (playerOnePlay === playOptions[2] && playerTwoPlay === playOptions[1]) || (playerOnePlay === playOptions[1] && playerTwoPlay === playOptions[0])) {
      setResult(1)
      setPlayerOneScore(playerOneScore + 1)
    }
    // player 2 wins - 1 scis vs 2 rock / 1 paper vs 2 scis / 1 rock vs 2 paper
    if ((playerOnePlay === playOptions[2] && playerTwoPlay === playOptions[0]) || (playerOnePlay === playOptions[1] && playerTwoPlay === playOptions[2]) || (playerOnePlay === playOptions[0] && playerTwoPlay === playOptions[1])) {
        setResult(2)
        setPlayerTwoScore(playerTwoScore +1)
      }
    }}

  function randomPlaySelect() {
    const randomPlay = playOptions[(Math.floor(Math.random() * playOptions.length))]
    setPlayerTwoPlay(randomPlay)
    }
   
  function handleClick(value) {
    setPlayerOnePlay(value)
    randomPlaySelect()
    setTimeout(() => {
      setbothPlayed(true)
    }, 200)
  }

  function handleReset() {
    setPlayerOneScore(0)
    setPlayerTwoScore(0)
    setResult(0)
  }

  return (
    <> 
      <h1>Rock 🪨 Paper 🫲 Scissors ✂️</h1>
    
      <div className="playArea">
        <PlayerOnePlay playerOnePlay={playerOnePlay} playOptions={playOptions} />
        <GameResult  result={result} />
        <PlayerTwoPlay playerTwoPlay={playerTwoPlay} playOptions={playOptions} />
      </div>

      <PlayButtons handleClick={handleClick} playOptions={playOptions} /> 
      <ScoreArea handleReset={handleReset} playerOneScore={playerOneScore} playerTwoScore={playerTwoScore} />

    </>
  )
}

// play against the computer
// play area for player 
// cards with 3 options to select and update state with option
// computer selects option at random at same time play option set
// render both plays to the play area
// set logic for the different outcomes - eg. if rock vs paper, paper wins
// conditional rendering to show result of the game on the screen
// store number of wins for each player in seperate states

