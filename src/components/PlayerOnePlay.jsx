export default function PlayerOnePlay({playerOnePlay, playOptions}) {

    return (
        <div className="playerOneDisplay">
            <p>Player 1</p>
            {playerOnePlay === playOptions[0] && <h1>🪨</h1>}
            {playerOnePlay === playOptions[1] && <h1>🫲</h1>}
            {playerOnePlay === playOptions[2] && <h1>✂️</h1>}
        </div>
    )
};
