import { useEffect, useRef } from "react";
import s from "./Canvas.module.css";
import wallCollision from "../Ball/wallCollision";
import BallAction from "../Ball/BallAction";

const Canvas = ({ data }) => {
  const { ballObj } = data;
  const canvasRef = useRef(null);
  console.log(canvasRef);

  useEffect(() => {
    const render = () => {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      BallAction(ctx, ballObj);
      wallCollision(ballObj, canvas);
      requestAnimationFrame(render);
    };
    render();
  }, []);

  return (
    <div style={{ textAlign: "center" }}>
      <canvas
        id={s.canvas}
        ref={canvasRef}
        height="500"
        width={window.innerWidth < 900 ? window.innerWidth - 20 : window.innerWidth - (window.innerWidth * 20) / 100}
      />
    </div>
  );
};

export default Canvas;
