export default function paddleHit(ballObj, paddleObj) {
  if (
    ballObj.x < paddleObj.x + paddleObj.width &&
    ballObj.x > paddleObj.x &&
    paddleObj.y < paddleObj.y + paddleObj.height &&
    ballObj.y + ballObj.rad > paddleObj.y - paddleObj.height / 2
  ) {
    // CHECK WHERE THE ballObj HIT THE paddleProps
    let collidePoint = ballObj.x - (paddleObj.x + paddleObj.width / 2);
    console.log("object");
    // NORMALIZE THE VALUES
    collidePoint = collidePoint / (paddleObj.width / 2);

    // CALCULATE THE ANGLE OF THE ballObj
    let angle = (collidePoint * Math.PI) / 3;

    ballObj.dx = ballObj.speed * Math.sin(angle);
    ballObj.dy = -ballObj.speed * Math.cos(angle);
  }
}
