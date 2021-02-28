export default class Ball {
  constructor(x, y, rad) {
    this.x = x;
    this.y = y;
    this.rad = rad;
  }
  drawBall(ctx, ballImg) {
    ctx.beginPath();
    ctx.fillStyle = "transparent";
    ctx.drawImage(ballImg, this.x, this.y, this.rad * 2, this.rad * 2);
    ctx.arc(this.x + 10, this.y + 10, this.rad, 0, 2 * Math.PI);
    ctx.strokeStyle = "transparent";
    ctx.lineWidth = 2;
    ctx.fill();
    ctx.stroke();
  }
}
