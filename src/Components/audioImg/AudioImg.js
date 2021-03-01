import s from "../Canvas/Canvas.module.css";
import { soundOnImg } from "../../utils/audio-media";
import audioManager from "../../utils/audioManager";

const AudioImg = () => (
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
