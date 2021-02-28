class Paddle {
  constructor(ctx, canvas, paddleObj) {
    this.x = paddleObj.x;
    this.y = canvas.height - 30;
    this.height = paddleObj.height;
    this.width = paddleObj.width;
    this.colors = ["red"];
  }
  createOnCanvas(ctx) {
    ctx.beginPath();
    ctx.rect(this.x, this.y, this.width, this.height);
    ctx.fillStyle = "orange";
    ctx.strokeStyle = "black";
    ctx.lineWidth = 4;
    ctx.strokeRect(this.x, this.y, this.width, this.height);
    ctx.fill();
  }
}
export default function initPaddle(ctx, canvas, paddleObj) {
  let paddle = new Paddle(ctx, canvas, paddleObj);

  paddle.createOnCanvas(ctx);
  if (paddleObj.x <= 0) {
    paddleObj.x = 0;
  } else if (paddleObj.x + paddleObj.width >= canvas.width) {
    paddleObj.x = canvas.width - paddleObj.width;
  }
}
