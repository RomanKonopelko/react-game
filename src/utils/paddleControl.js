const mouseControl = (event, paddleObj) => {
  return (paddleObj.x =
    event.clientX - (window.innerWidth < 900 ? 10 : (window.innerWidth * 20) / 200) - paddleObj.width / 2 - 20);
};

function keyDownHandler(e, paddle, canvas) {
  if (e.key == "Right" || e.key == "ArrowRight") {
    paddle.x += 40;
    if (paddle.x + paddle.width > canvas.width) {
      paddle.x = 0;
    }
  } else if (e.key == "Left" || e.key == "ArrowLeft") {
    paddle.x -= 40;
    if (paddle.x < 0) {
      paddle.x = canvas.width;
    }
  }
}

export { mouseControl, keyDownHandler };
