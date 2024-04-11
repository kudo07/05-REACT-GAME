import { useCallback, useState } from 'react';
import { randomTetromino } from '../BoardManage/Tetrominoes';

const buildPalyer = (previous) => {
  let tetrominoes;
  if (previous) {
    tetrominoes = [...previous.tetrominoes];
    tetrominoes.unshift(randomTetromino());
  } else {
    tetrominoes = Array(5)
      .fill(0)
      .map((_) => randomTetromino());
  }
  return {
    collided: false,
    isFastDropping: false,
    position: { row: 0, column: 4 },
    tetrominoes,
    tetromino: tetrominoes.pop(),
    // current one
  };
};
export const usePlayer = () => {
  const [player, setPlayer] = useState(buildPalyer());
  const resetPlayer = useCallback(() => {
    setPlayer((prev) => buildPalyer(prev));
  }, []);
  return [player, setPlayer, resetPlayer];
};
