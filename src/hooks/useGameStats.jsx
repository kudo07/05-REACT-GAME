import { useCallback, useState } from 'react';

const buildGamesStats = () => ({
  level: 1,
  linesCompleted: 0,
  linesPerLevel: 10,
  points: 0,
});

const useGameStats = () => {
  const [gameStats, setGameStats] = useState(buildGamesStats());
  const addlinesCleared = useCallback(() => {}, []);
  return [gameStats, addlinesCleared];
};

export default useGameStats;
