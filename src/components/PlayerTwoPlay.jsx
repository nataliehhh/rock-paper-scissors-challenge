export default function PlayerTwoPlay({playerTwoPlay, playOptions}) {
    return (
        <div className="playTwoDisplay">
            <p>Player 2</p>
            {playerTwoPlay === playOptions[0] && <h1>🪨</h1>}
            {playerTwoPlay === playOptions[1] && <h1>🫲</h1>}
            {playerTwoPlay === playOptions[2] && <h1>✂️</h1>}
        </div>
    )
};