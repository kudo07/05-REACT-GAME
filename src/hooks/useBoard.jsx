import { useState } from 'react';
import { builtBoard } from '../BoardManage/BoardManage';
const useBoard = ({ rows, columns }) => {
  const [board] = useState(builtBoard({ rows, columns }));
  return [board];
};

export default useBoard;
