import Ball from "./Ball";

export default function BallAction(ctx, ballObj, ballImg) {
  let action = new Ball(ballObj.x, ballObj.y, ballObj.rad);
  action.drawBall(ctx, ballImg);
}
