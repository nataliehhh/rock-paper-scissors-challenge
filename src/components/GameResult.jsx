export default function GameResult({result}) {
    return (
        <div className="result">
            <p>The winner is...</p>
        {result === 0 && <h2>Draw!</h2>}
        {result === 1 && <h2>Player 1!</h2>}
        {result === 2 && <h2>Player 2!</h2>}
        </div>
    )
};
