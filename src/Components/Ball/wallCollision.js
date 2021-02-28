import { LIFE_LOST, WALL_HIT } from "../../utils/audio-media";

export default function (ballObj, paddleObj, canvas, player, LIFE_LOST, WALL_HIT) {
  if (ballObj.y + ballObj.rad > canvas.height) {
    ballObj.x = paddleObj.x + 50;
    ballObj.y = paddleObj.y - 30;
    ballObj.dx = 6 * (Math.random() * 2 - 1);
    ballObj.dy = -6;
    player.lives--;
    LIFE_LOST.play();
  }
  if (ballObj.y - ballObj.rad < 0) {
    WALL_HIT.play();
    ballObj.dy *= -1;
  }

  if (ballObj.x + ballObj.rad > canvas.width || ballObj.x - ballObj.rad < 0) {
    WALL_HIT.play();
    ballObj.dx *= -1;
  }
}
