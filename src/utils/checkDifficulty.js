export default function checkDifficulty(difficulty, data) {
  const { ballObj, paddleObj, playerData } = data;

  if (difficulty === "normal") {
    ballObj.speed = 10;
    paddleObj.width = 100;
    playerData.lives = 5;
  }
  if (difficulty === "medium") {
    ballObj.speed = 11;
    paddleObj.width = 80;
    playerData.lives = 4;
  }
  if (difficulty === "hard") {
    ballObj.speed = 12;
    paddleObj.width = 60;
    playerData.lives = 3;
  }
}
