import { useState, useEffect } from 'react'

export default function ScoreArea({handleReset, playerOneScore, playerTwoScore}) {
    // const [playerOneScore, setPlayerOneScore] = useState(0)
    // const [playerTwoScore, setPlayerTwoScore] = useState(0)

    // useEffect(() => {
    //     if (result === 1) {
    //         setPlayerOneScore(playerOneScore + 1)
    //     }
    //     if (result === 2) {
    //         setPlayerTwoScore(playerTwoScore + 1)
    //     }
    // }, [result])

    return (
        <div className="scoreArea">
            <h2>Player 1 Score: {playerOneScore}</h2>
            <h2>Player 2 Score: {playerTwoScore}</h2>
            <button onClick={handleReset} className='resetButton'>Reset</button>
        </div>
    )
};
