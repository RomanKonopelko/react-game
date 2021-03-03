class Paddle {
  constructor(ctx, canvas, paddleObj, img) {
    this.x = paddleObj.x;
    this.y = canvas.height - 30;
    this.height = paddleObj.height;
    this.width = paddleObj.width;
    this.colors = ["red"];
    this.paddleImg = img;
  }
  createOnCanvas(ctx) {
    ctx.beginPath();
    ctx.rect(this.x, this.y, this.width, this.height);
    ctx.drawImage(this.paddleImg, this.x, this.y, this.width, this.height);
    ctx.fill();
  }
}
export default function initPaddle(ctx, canvas, paddleObj, img) {
  let paddle = new Paddle(ctx, canvas, paddleObj, img);

  paddle.createOnCanvas(ctx);
  if (paddleObj.x <= 0) {
    paddleObj.x = 0;
  } else if (paddleObj.x + paddleObj.width >= canvas.width) {
    paddleObj.x = canvas.width - paddleObj.width;
  }
}
