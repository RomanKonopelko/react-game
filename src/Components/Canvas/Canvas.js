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
import { mouseControl, keyDownHandler } from "../../utils/paddleControl";
import {
  LEVEL_IMG,
  LIFE_IMG,
  SCORE_IMG,
  WALL_HIT,
  LIFE_LOST,
  PADDLE_HIT,
  WIN,
  BRICK_HIT,
  winImg,
  gameOverImg,
  SOUND_ON_IMG,
  SOUND_OFF_IMG,
  BALL_IMG,
  PADDLE_IMG,
} from "../../utils/audio-media";

const Canvas = ({ data }) => {
  const [status, setStatus] = useState("game");
  let bricks = [];
  let GAME_OVER = false;
  const { ballObj, paddleObj, brickObj, playerData } = data;
  const canvasRef = useRef(null);

  useEffect(() => {
    const render = () => {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");
      paddleObj.y = canvas.height - 30;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      BallAction(ctx, ballObj, BALL_IMG, status);
      initPaddle(ctx, canvas, paddleObj, PADDLE_IMG);
      wallCollision(ballObj, paddleObj, canvas, playerData, LIFE_LOST, WALL_HIT);
      paddleHit(ballObj, paddleObj, PADDLE_HIT);
      function gameOver() {
        if (playerData.lives <= 0) {
          setStatus("gameover");
          GAME_OVER = true;
        }
      }
      gameOver();
      let newBrickSet = Brick(playerData.level, bricks, canvas, brickObj);

      if (newBrickSet && newBrickSet.length > 0) {
        bricks = newBrickSet;
      }

      bricks.map((brick) => {
        return brick.draw(ctx);
      });

      let bricksCollision;
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
              bricks[i].touch += 1;
              playerData.score += 10;
            }
          } else if (bricksCollision.axis === "Y") {
            if (bricks[i].touch < 4) {
              BRICK_HIT.play();
              ballObj.dy *= -1;
              bricks[i].touch += 1;
              playerData.score += 10;
            }
          }
        }
      }

      playerStats(ctx, playerData, canvas);
      if (!GAME_OVER) requestAnimationFrame(render);
    };
    render();
  }, []);

  return (
    <div id={s.canvas__container} style={{ textAlign: "center" }}>
      {playerData.lives === 1 && alert("test")}
      <canvas
        id={s.canvas}
        ref={canvasRef}
        onMouseMove={(event) => {
          mouseControl(event, paddleObj);
        }}
        tabIndex="0"
        onKeyDown={(e) => {
          keyDownHandler(e, paddleObj, canvasRef.current);
        }}
        height="500"
        width={window.innerWidth < 900 ? window.innerWidth - 20 : window.innerWidth - (window.innerWidth * 20) / 90}
      />
      {status === "gameover" && <GameOver s={s} img={gameOverImg} />}
      <AudioImg />
    </div>
  );
};

export default Canvas;
