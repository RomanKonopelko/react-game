const mouseControl = (event, paddleObj) => {
  return (paddleObj.x = event.clientX - paddleObj.width / 2);
};

// function keyDownHandler(e) {
//   if (e.key === "Right" || e.key === "ArrowRight") {
//     rightArrow = true;
//   }
//   if (e.key === "Left" || e.key === "ArrowLeft") {
//     leftArrow = true;
//   }
// }

function paddleMove(rightArrow, leftArrow, paddle, canvas) {
  if (rightArrow) {
    paddle.x += 10;
    if (paddle.x + paddle.width > canvas.width) {
      paddle.x = 0;
    }
  }
  if (leftArrow) {
    paddle.x -= 10;
    if (paddle.x < 0) {
      paddle.x = canvas.width;
    }
  }
}
function keyUpHandler(e, rightArrow, leftArrow) {
  if (e.key === "Right" || e.key === "ArrowRight") rightArrow = false;
  if (e.key === "Left" || e.key === "ArrowLeft") leftArrow = false;
}
export { mouseControl, paddleMove, keyUpHandler };
