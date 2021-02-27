import { useEffect, useRef } from "react";
import s from "./Canvas.module.css";
import wallCollision from "../Ball/wallCollision";
import BallAction from "../Ball/BallAction";
import initPaddle from "../Paddle/Paddle";
import Brick from "../Bricks/Bricks";
import paddleHit from "../Paddle/paddleCollision";
import brickCollision from "../Bricks/brickCollision";
import playerStats from "../PlayerStats/playerStats";

const Canvas = ({ data }) => {
  let bricks = [];
  const { ballObj, paddleObj, brickObj, playerData } = data;
  const canvasRef = useRef(null);
  console.log(canvasRef);

  useEffect(() => {
    const render = () => {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");
      paddleObj.y = canvas.height - 30;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      BallAction(ctx, ballObj);
      initPaddle(ctx, canvas, paddleObj);
      wallCollision(ballObj, paddleObj, canvas, playerData);
      paddleHit(ballObj, paddleObj, canvas);

      let newBrickSet = Brick(2, bricks, canvas, brickObj);

      if (newBrickSet && newBrickSet.length > 0) {
        bricks = newBrickSet;
      }

      bricks.map((brick) => {
        return brick.draw(ctx);
      });

      let bricksCollision;
      for (let i = 0; i < bricks.length; i++) {
        bricksCollision = brickCollision(ballObj, bricks[i]);
        if (bricksCollision.hit && !bricks[i].broke) {
          if (bricksCollision.axis === "X") {
            ballObj.dx *= -1;
            bricks[i].broke = true;
            console.log("XXX");
          } else if (bricksCollision.axis === "Y") {
            ballObj.dy *= -1;
            bricks[i].broke = true;
            console.log("YYY");
          }
          playerData.score += 10;
        }
      }
      playerStats(ctx, playerData, canvas);
      requestAnimationFrame(render);
    };
    render();
  }, []);

  return (
    <div style={{ textAlign: "center" }}>
      <canvas
        id={s.canvas}
        ref={canvasRef}
        onMouseMove={(event) =>
          (paddleObj.x =
            event.clientX - (window.innerWidth < 900 ? 10 : (window.innerWidth * 20) / 200) - paddleObj.width / 2 - 20)
        }
        height="500"
        width={window.innerWidth < 900 ? window.innerWidth - 20 : window.innerWidth - (window.innerWidth * 20) / 100}
      />
    </div>
  );
};

export default Canvas;
