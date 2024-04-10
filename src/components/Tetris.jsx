import './style/Tetris.css';
import Board from './Board';
import useBoard from '../hooks/useBoard';
import GameStats from './GameStats';
import useGameStats from '../hooks/useGameStats';

const Tetris = ({ rows, columns, gameOver, setGameOver }) => {
  const [board, setBoard] = useBoard({ rows, columns });
  const [gameStats, addLinesCleared] = useGameStats();
  const handleClick = () => {
    setGameOver(!gameOver);
  };
  return (
    <>
      <button className="button-return" onClick={handleClick}>
        Home
      </button>
      <Board board={board} />
      <GameStats gameStats={gameStats} />
    </>
  );
};

export default Tetris;
