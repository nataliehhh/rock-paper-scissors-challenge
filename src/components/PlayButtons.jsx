export default function PlayButtons({handleClick, playOptions}) {
    return (
        <>
            <button onClick={() => handleClick(playOptions[0])}>🪨</button>
            <button onClick={() => handleClick(playOptions[1])}>🫲</button>
            <button onClick={() => handleClick(playOptions[2])}>✂️</button>
        </>
    )
};
