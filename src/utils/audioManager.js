import { WALL_HIT, PADDLE_HIT, BRICK_HIT, WIN, LIFE_LOST, soundOnImg, soundOffImg } from "../utils/audio-media";

function audioManager(e) {
  // CHANGE IMAGE SOUND_ON/OFF
  let imgSrc = e.target.getAttribute("src");
  let SOUND_IMG = imgSrc == soundOnImg ? soundOffImg : soundOnImg;

  e.target.setAttribute("src", SOUND_IMG);

  // MUTE AND UNMUTE SOUNDS
  WALL_HIT.muted = WALL_HIT.muted ? false : true;
  PADDLE_HIT.muted = PADDLE_HIT.muted ? false : true;
  BRICK_HIT.muted = BRICK_HIT.muted ? false : true;
  WIN.muted = WIN.muted ? false : true;
  LIFE_LOST.muted = LIFE_LOST.muted ? false : true;
}

export default audioManager;
