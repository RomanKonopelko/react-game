import { pauseImg } from "../../utils/audio-media";

const PauseScreen = ({ s }) => (
  <div id={s.gameover}>
    <p className={s.grats}>PAUSE</p>

    <img src={pauseImg} alt="" id={s.pause} />
    <p className={s.space}>Space to resume!</p>
  </div>
);

export default PauseScreen;
