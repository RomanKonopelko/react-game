const WinScreen = ({ s, img }) => (
  <div id={s.gameover}>
    <p className={s.grats}>Congratulations! You have won!</p>
    <img src={img} alt="" id={s.youwon} />
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

export default WinScreen;
