export default function ResetBall(ballObj, paddleObj) {
  ballObj.x = paddleObj.x;
  ballObj.y = paddleObj.y - 80;
  ballObj.dx = 6 * (Math.random() * 2 - 1);
  ballObj.dy = -6;
}
