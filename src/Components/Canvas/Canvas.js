import { useEffect, useRef } from "react";
import s from "./Canvas.module.css";

const Canvas = () => {
  const canvasRef = useRef(null);
  console.log(canvasRef);
  let x = 0;
  useEffect(() => {
    const render = () => {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.beginPath();
      ctx.arc(x, 75, 10, 0, Math.PI * 2, true); // Outer circle
      x += 0.1;
      ctx.stroke();
      requestAnimationFrame(render);
    };
    render();
  }, []);

  return <canvas id={s.canvas} ref={canvasRef}></canvas>;
};

export default Canvas;
