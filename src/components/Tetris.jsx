import './style/Tetris.css';
import Board from './Board';
import useBoard from '../hooks/useBoard';
import GameStats from './GameStats';
import useGameStats from '../hooks/useGameStats';
import Previews from './Previews';
import { usePlayer } from '../hooks/usePlayer';

const Tetris = ({ rows, columns, gameOver, setGameOver }) => {
  const [board, setBoard] = useBoard({ rows, columns });
  const [gameStats, addLinesCleared] = useGameStats();
  const [player, setPlayer, resetPlayer] = usePlayer();

  const handleClick = () => {
    setGameOver(!gameOver);
  };
  // const player = { tetrominoes: [] };
  return (
    <div className="Tetris">
      <button className="button-return" onClick={handleClick}>
        Home
      </button>
      <Board board={board} />
      <GameStats gameStats={gameStats} />
      <Previews tetrominoes={player.tetrominoes} />
    </div>
  );
};

export default Tetris;
