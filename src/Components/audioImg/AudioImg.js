import s from "../Canvas/Canvas.module.css";
import { soundOnImg } from "../../utils/audio-media";
import audioManager from "../../utils/audioManager";
import fullscreenManager from "../../utils/fullscreenManager";
import { fullscreenImg } from "../../utils/audio-media";

const AudioImg = ({ canvas }) => (
  <>
    <img
      onClick={(e) => {
        audioManager(e);
      }}
      src={soundOnImg}
      alt=""
      id={s.sound}
    />
  </>
);

export default AudioImg;
