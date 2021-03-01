/////// LOAD IMAGES ////////
import s from "../Components/Canvas/Canvas.module.css";
import soundOnImg from "../img/SOUND_ON.png";
import paddleHit from "../sounds/paddle_hit.wav";
import wallHit from "../sounds/wall.wav";
import brickHit from "../sounds/brick_hit.wav";
import lifeLost from "../sounds/life_lost.wav";
import winSound from "../sounds/win.wav";
import soundOffImg from "../img/SOUND_OFF.png";
import gameOverImg from "../img/gameover.png";
import levelImg from "../img/level.png";
import lifeImg from "../img/life.png";
import scoreImg from "../img/score.png";
import winImg from "../img/youwon.png";
import ballImg from "../PNG/ball.png";
import paddleImg from "../PNG/paddle.png";

const WIN_IMG = new Image();
WIN_IMG.src = winImg;

const PADDLE_IMG = new Image();
PADDLE_IMG.src = paddleImg;

const GAME_OVER_ING = new Image();
GAME_OVER_ING.src = gameOverImg;

const BALL_IMG = new Image();
BALL_IMG.src = ballImg;

const LEVEL_IMG = new Image();
LEVEL_IMG.src = levelImg;

const LIFE_IMG = new Image();
LIFE_IMG.src = lifeImg;

const SCORE_IMG = new Image();
SCORE_IMG.src = scoreImg;

const SOUND_OFF_IMG = new Image();
SOUND_OFF_IMG.src = soundOffImg;

const SOUND_ON_IMG = new Image();
SOUND_ON_IMG.src = soundOnImg;

/////// END LOAD IMAGES ////////

// ************************ //

/////// LOAD SOUNDS ////////

const WALL_HIT = new Audio(wallHit);

const LIFE_LOST = new Audio(lifeLost);

const PADDLE_HIT = new Audio(paddleHit);

const WIN = new Audio(winSound);

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
  BALL_IMG,
  WIN_IMG,
  GAME_OVER_ING,
  PADDLE_IMG,
};
/////// END LOAD SOUNDS ////////
