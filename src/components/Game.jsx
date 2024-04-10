import useGameOver from '../hooks/useGameOver';
import Menu from './Menu';
import Tetris from './Tetris';

const Game = ({ rows, columns }) => {
  const [gameOver, setGameOver, resetGameOver] = useGameOver();
  const start = () => {
    resetGameOver();
    console.log(`Start gameOver is ${gameOver}`);
  };
  return (
    <div className="Game">
      {gameOver ? (
        <Menu onClick={start} />
      ) : (
        <Tetris
          rows={rows}
          columns={columns}
          gameOver={gameOver}
          setGameOver={setGameOver}
        />
      )}
    </div>
  );
};

export default Game;
