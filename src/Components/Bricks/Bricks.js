class SingleBrick {
  constructor(x, y, w, h, c) {
    this.x = x - w;
    this.y = y;
    this.width = w;
    this.height = h;
    this.colors = c;
    this.touch = 1;
    this.broke = false;
  }
  draw(ctx) {
    ctx.beginPath();
    ctx.rect(this.x, this.y, this.width, this.height);
    if (this.touch === 4) ctx.fillStyle = "rgba(19, 73, 89, 0)";
    if (this.touch === 1) ctx.fillStyle = this.colors[0];
    if (this.touch === 2) ctx.fillStyle = this.colors[1];
    if (this.touch === 3) ctx.fillStyle = this.colors[2];
    ctx.lineWidth = 5;
    ctx.strokeStyle = this.broke ? "rgba(19, 73, 89, 0)" : "transparent";
    // ctx.globalCompositeOperation = "destination-atop";
    // ctx.shadowBlur = 0;
    // ctx.shadowColor = "blue";
    ctx.fill();
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
  if (bricks.length >= 5 * level) {
    return;
  }

  // Brick Formation here
  for (let i = 0; i < 9 * level; i++) {
    let newBrick = new SingleBrick(brick.x + brick.width, brick.y, brick.width, brick.height, brick.colors);
    newbricks.push(newBrick);
    console.log(brick.colors);
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
