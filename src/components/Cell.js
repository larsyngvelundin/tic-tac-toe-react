const Cell = ({ id, cell, setCells, turn, setTurn, cells, winningMessage }) => {
    const handleClick = (e) => {
        const taken = e.target.firstChild.classList.contains("circle") ||
            e.target.firstChild.classList.contains("cross");
        if (!taken) {
            e.target.firstChild.classList.add(turn);
            changeCell(turn);
            if (turn === "circle") {
                setTurn("cross");
            }
            else {
                setTurn("circle");
            }
        }
    }

    const changeCell = (className) => {
        const nextCells = cells.map((cell, index) => {
            if (index === id) {
                return className
            } else {
                return cell
            }
        })
        setCells(nextCells);
    }

    return (
        <div className="cell" id={id} onClick={!winningMessage ? handleClick : undefined}>
            <div className={cell}></div>
        </div >
    )
}

export default Cell