const GameOver = ({ s, img }) => (
  <div id={s.gameover}>
    <img src={img} alt="" id={s.youlose} />
    <p
      id={s.restart}
      onClick={() => {
        window.location.reload();
      }}
    >
      Play Again!
    </p>
  </div>
);

export default GameOver;
