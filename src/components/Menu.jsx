import './style/Menu.css';
const Menu = ({ onClick }) => {
  return (
    <div className="MenuItem">
      <button className="button" onClick={onClick}>
        Play Tetris
      </button>
    </div>
  );
};

export default Menu;
