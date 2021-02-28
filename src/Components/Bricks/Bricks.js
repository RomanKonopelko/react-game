import brickImg from "../../PNG/01-Breakout-Tiles.png";
class SingleBrick {
  constructor(x, y, w, h, c, test) {
    this.x = x - w;
    this.y = y;
    this.width = w;
    this.height = h;
    this.colors = c;
    this.touch = 1;
    this.broke = false;
    this.brick = new Image();
    this.brick.src = test;
  }
  brickImg(ctx) {
    ctx.drawImage(this.brick, this.x, this.y, this.width, this.height);
  }
  draw(ctx) {
    ctx.beginPath();
    this.brickImg(ctx);
    ctx.rect(this.x, this.y, this.width, this.height);
    // if (this.touch === 4) ctx.fillStyle = "rgba(19, 73, 89, 0)";
    // if (this.touch === 1) this.brickImg(ctx);
    if (this.touch === 4) {
      ctx.clearRect(this.x, this.y, this.width, this.height);
      return (ctx.fillStyle = "rgba(19, 73, 89, 0)");
    }
    // if (this.touch === 3) ctx.fillStyle = this.colors[2];
    ctx.lineWidth = 1;
    ctx.strokeStyle = this.touch === 4 ? "transparent" : "white";
    // ctx.fill();
    ctx.strokeRect(this.x, this.y, this.width, this.height);
  }
}

function Brick(level, bricks, canvas, brick) {
  brick.width = canvas.width / 9 - 1;
  let newbricks = [];
  if (!bricks) {
    return [];
  }
  // If all the levels are filled
  if (bricks.length >= 9 * level) {
    return;
  }

  // Brick Formation here
  for (let i = 0; i < 9 * level; i++) {
    let newBrick = new SingleBrick(brick.x + brick.width, brick.y, brick.width, brick.height, brick.colors, brickImg);
    newbricks.push(newBrick);
    // newBrick.draw();
    brick.x += brick.width + 1;
    if (brick.x + brick.width >= canvas.width) {
      brick.x = 0.5;
      brick.y += brick.height + 1;
    }
  }
  return newbricks;
}

export default Brick;
