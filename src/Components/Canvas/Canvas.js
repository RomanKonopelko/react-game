import { useEffect, useRef, useState } from "react";
import s from "./Canvas.module.css";
import wallCollision from "../Ball/wallCollision";
import BallAction from "../Ball/BallAction";
import initPaddle from "../Paddle/Paddle";
import Brick from "../Bricks/Bricks";
import paddleHit from "../Paddle/paddleCollision";
import brickCollision from "../Bricks/brickCollision";
import playerStats from "../PlayerStats/playerStats";
import AudioImg from "../audioImg/AudioImg";
import GameOver from "../gameOverScreen/GameOverScreen";
import WinScreen from "../gameOverScreen/WinScreen";
import levelUp from "../../utils/levelUp";
import fullscreenManager from "../../utils/fullscreenManager";
import PauseScreen from "../gameOverScreen/PauseScreen";
import checkDifficulty from "../../utils/checkDifficulty";
import { mouseControl, keyDownHandler, keyUpHandler, paddleMove } from "../../utils/paddleControl";
import {
  WALL_HIT,
  LIFE_LOST,
  PADDLE_HIT,
  WIN,
  BRICK_HIT,
  winImg,
  gameOverImg,
  BALL_IMG,
  PADDLE_IMG,
  fullscreenOutImg,
  BG_MUSIC,
} from "../../utils/audio-media";

let HOME_STATUS = true;
let rightArrow = false;
let leftArrow = false;
let fullscreenStatus = false;
let fullscreenHeight = window.innerHeight - 10;
let PAUSE_STATUS = true;

const Canvas = ({ data }) => {
  const [status, setStatus] = useState("home");
  const diffArray = ["normal", "medium", "hard"];
  const [difficulty, setDifficulty] = useState(diffArray[0]);
  const [fullscreen, setFullscreen] = useState("false");
  const [pause, setPause] = useState(false);

  let bricks = [];
  const { ballObj, paddleObj, brickObj, playerData } = data;
  let GAME_OVER = false;

  checkDifficulty(difficulty, data);

  const canvasRef = useRef(null);
  useEffect(() => {
    const render = () => {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");
      paddleObj.y = canvas.height - 30;

      if (HOME_STATUS) paddleObj.x = ballObj.x - paddleObj.width + 45;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      BallAction(ctx, ballObj, BALL_IMG, paddleObj);
      initPaddle(ctx, canvas, paddleObj, PADDLE_IMG);
      wallCollision(ballObj, paddleObj, canvas, playerData, LIFE_LOST, WALL_HIT);
      paddleHit(ballObj, paddleObj, PADDLE_HIT);
      paddleMove(rightArrow, leftArrow, paddleObj, canvas);

      gameOver();

      drawBricks();

      levelUp(bricks, ballObj, playerData, WIN);

      playerStats(ctx, playerData, canvas);
      function gameOver() {
        if (playerData.lives <= 0) {
          setStatus("gameover");
          GAME_OVER = true;
        }
        if (playerData.level === 6) {
          setStatus("win");
          WIN.play();
          GAME_OVER = true;
        }
      }
      function drawBricks() {
        let newBrickSet = Brick(playerData.level, bricks, canvas, brickObj);
        let bricksCollision;

        if (newBrickSet && newBrickSet.length > 0) {
          bricks = newBrickSet;
        }

        bricks.map((brick) => {
          return brick.draw(ctx);
        });

        for (let i = 0; i < bricks.length; i++) {
          bricksCollision = brickCollision(ballObj, bricks[i]);
          if (bricks[i].touch === 4 && bricks[i].status === "present") {
            bricks[i].transparentImg(ctx);
            bricks[i].status = "vanished";
          }

          if (bricksCollision.hit && bricks[i].touch !== 4) {
            if (bricksCollision.axis === "X") {
              if (bricks[i].touch < 4) {
                BRICK_HIT.play();
                ballObj.dx *= -1;
                playerData.score += 10;
                if (!HOME_STATUS) bricks[i].touch += 1;
              }
            } else if (bricksCollision.axis === "Y") {
              if (bricks[i].touch < 4) {
                BRICK_HIT.play();
                ballObj.dy *= -1;
                playerData.score += 10;
                if (!HOME_STATUS) bricks[i].touch += 1;
              }
            }
          }
        }
      }

      if (!GAME_OVER) requestAnimationFrame(render);

      if (PAUSE_STATUS || HOME_STATUS) {
        ballObj.x += ballObj.dx;
        ballObj.y += ballObj.dy;
      } else if (!PAUSE_STATUS || !HOME_STATUS) {
        ballObj.x += 0;
        ballObj.y += 0;
      }
    };
    render();
  }, []);

  return (
    <div
      tabIndex="0"
      onClick={() => {
        BG_MUSIC.play();
      }}
      onKeyPress={(e) => {
        if (e.key === " ") {
          pause ? setPause(false) : setPause(true);
          pause && status === "game" ? (PAUSE_STATUS = true) : (PAUSE_STATUS = false);
        }
      }}
      id={s.canvas__container}
      style={{ textAlign: "center" }}
    >
      <canvas
        id={s.canvas}
        ref={canvasRef}
        onMouseMove={(event) => {
          mouseControl(event, paddleObj);
        }}
        tabIndex="0"
        height={fullscreen ? fullscreenHeight : fullscreenHeight}
        width={window.innerWidth}
      />
      {pause && status === "game" && <PauseScreen s={s} />}
      {status === "win" && <WinScreen s={s} img={winImg} score={playerData.score} />}
      {status === "gameover" && <GameOver s={s} img={gameOverImg} />}
      {status === "home" && (
        <div id={s.gameover}>
          <p className={s.grats}>Welcome to BREAKOUT!</p>

          <input
            placeholder="What's your name?"
            className={s.input}
            onChange={(e) => {
              playerData.name = e.target.value;
            }}
            type="text"
          />
          <p className={s.difficulty}>
            Difficulty:
            <span
              className={s.leftArrow}
              onClick={() => {
                if (difficulty === "normal") setDifficulty(diffArray[2]);
                if (difficulty === "medium") setDifficulty(diffArray[0]);
                if (difficulty === "hard") setDifficulty(diffArray[1]);
              }}
            >
              &#x2B05;
            </span>
            <span>
              {difficulty === "normal" && "Normal"}
              {difficulty === "medium" && "Medium"}
              {difficulty === "hard" && "Hard"}
            </span>
            <span
              className={s.rightArrow}
              onClick={() => {
                if (difficulty === "normal") setDifficulty(diffArray[1]);
                if (difficulty === "medium") setDifficulty(diffArray[2]);
                if (difficulty === "hard") setDifficulty(diffArray[0]);
              }}
            >
              &#x27A1;
            </span>
          </p>
          <p className={s.controls}>Controls: Mouse, &#x2B05; , &#x27A1; </p>
          <p className={s.pauseRef}>Pause : spacebar</p>
          <p
            id={s.restart}
            onClick={() => {
              HOME_STATUS = false;
              ballObj.x = canvasRef.current.width / 2;
              ballObj.y = 300;
              ballObj.dx = 3;
              ballObj.dy = 3;
              ballObj.dy *= 1;
              paddleObj.x = canvasRef.current.width / 2;
              setStatus("game");
            }}
          >
            Start!
          </p>
          <p className={s.warning}> &#x2B05; To exit fullscreen mode use this button! ;)</p>
        </div>
      )}
      <img
        onClick={(e) => {
          fullscreenManager(e);
          fullscreen ? (fullscreenHeight = window.outerHeight + 20) : (fullscreenHeight = window.innerHeight - 110);
          fullscreen ? (fullscreenStatus = true) : (fullscreenStatus = false);
          fullscreen ? setFullscreen(false) : setFullscreen(true);
        }}
        src={fullscreenOutImg}
        alt=""
        id={s.fullscreen}
      />
      <AudioImg />
    </div>
  );
};
window.addEventListener("keydown", (e) => {
  if (e.key === "Right" || e.key === "ArrowRight") {
    rightArrow = true;
  }
  if (e.key === "Left" || e.key === "ArrowLeft") {
    leftArrow = true;
  }
});

window.addEventListener("keyup", (e) => {
  if (e.key === "Right" || e.key === "ArrowRight") rightArrow = false;
  if (e.key === "Left" || e.key === "ArrowLeft") leftArrow = false;
});
export default Canvas;
