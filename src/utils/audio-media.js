/////// LOAD IMAGES ////////
import s from "../Components/Canvas/Canvas.module.css";
import soundOnImg from "../img/SOUND_ON.png";
import paddleHit from "../sounds/paddle_hit.wav";
import wallHit from "../sounds/wall.wav";
import brickHit from "../sounds/brick_hit.wav";
import lifeLost from "../sounds/life_lost.wav";
import brickImg from "../PNG/01-Breakout-Tiles.png";
import ballImg from "../PNG/ball.png";
// LOAD BG IMAGE
const BG_IMG = new Image();
BG_IMG.src = "img/bg.jpg";

const BALL_IMG = new Image();
BALL_IMG.src = ballImg;
const LEVEL_IMG = new Image();
LEVEL_IMG.src = "img/level.png";

const LIFE_IMG = new Image();
LIFE_IMG.src = "img/life.png";

const SCORE_IMG = new Image();
SCORE_IMG.src = "img/score.png";

const SOUND_OFF_IMG = new Image();
SOUND_OFF_IMG.src = "img/SOUND_OFF.png";

const SOUND_ON_IMG = new Image();
SOUND_ON_IMG.src = soundOnImg;

const BRICK_IMG = new Image();
BRICK_IMG.src = brickImg;
/////// END LOAD IMAGES ////////

// ************************ //

/////// LOAD SOUNDS ////////

const WALL_HIT = new Audio(wallHit);

const LIFE_LOST = new Audio(lifeLost);

const PADDLE_HIT = new Audio(paddleHit);

const WIN = new Audio();
WIN.src = "../sounds/win.mp3";

const BRICK_HIT = new Audio(brickHit);

export {
  LEVEL_IMG,
  LIFE_IMG,
  SCORE_IMG,
  WALL_HIT,
  LIFE_LOST,
  PADDLE_HIT,
  WIN,
  BRICK_HIT,
  SOUND_OFF_IMG,
  SOUND_ON_IMG,
  BRICK_IMG,
  BALL_IMG,
};
/////// END LOAD SOUNDS ////////
