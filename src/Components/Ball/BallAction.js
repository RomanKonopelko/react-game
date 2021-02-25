import Ball from "./Ball";

export default function BallAction(ctx, ballObj) {
  let action = new Ball(ballObj.x, ballObj.y, ballObj.rad);
  action.drawBall(ctx);
  ballObj.x += ballObj.dx;
  ballObj.y += ballObj.dy;
}
