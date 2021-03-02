import Ball from "./Ball";

export default function BallAction(ctx, ballObj, ballImg, paddleObj, status) {
  let action = new Ball(ballObj.x, ballObj.y, ballObj.rad);
  if (status) paddleObj.x = ballObj.x - paddleObj.width + 45;
  action.drawBall(ctx, ballImg);
  ballObj.x += ballObj.dx;
  ballObj.y += ballObj.dy;
}
