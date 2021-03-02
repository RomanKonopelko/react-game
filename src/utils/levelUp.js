import resetBall from "./resetBall";
import data from "../Components/data";

export default function AllBroken(bricks, ballObj, playerData, WIN) {
  let { brickObj, paddleObj } = data;
  let total = 0;
  for (let i = 0; i < bricks.length; i++) {
    if (bricks[i].status === "vanished") {
      total++;
    }
  }
  if (total === bricks.length) {
    WIN.play();
    playerData.level += 1;
    resetBall(ballObj, paddleObj);
    brickObj.y = 50;
  }
}
