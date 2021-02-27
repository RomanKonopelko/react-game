import { useEffect, useRef } from "react";
import s from "./Canvas.module.css";
import wallCollision from "../Ball/wallCollision";
import BallAction from "../Ball/BallAction";
import initPaddle from "../Paddle/Paddle";
import Brick from "../Bricks/Bricks";
import paddleHit from "../Paddle/paddleCollision";

const Canvas = ({ data }) => {
  let bricks = [];
  const { ballObj, paddleObj, brickObj } = data;
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
      wallCollision(ballObj, paddleObj, canvas);
      paddleHit(ballObj, paddleObj, canvas);

      let newBrickSet = Brick(2, bricks, canvas, brickObj);

      if (newBrickSet && newBrickSet.length > 0) {
        bricks = newBrickSet;
      }

      bricks.map((brick) => {
        return brick.draw(ctx);
      });

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
            event.clientX - (window.innerWidth < 900 ? 10 : (window.innerWidth * 20) / 200) - paddleObj.width / 2 - 10)
        }
        height="500"
        width={window.innerWidth < 900 ? window.innerWidth - 20 : window.innerWidth - (window.innerWidth * 20) / 100}
      />
    </div>
  );
};

export default Canvas;
