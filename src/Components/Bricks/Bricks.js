import brickImg from "../../PNG/01-Breakout-Tiles.png";
import brickImg2 from "../../PNG/02-Breakout-Tiles.png";
import brickImg3 from "../../PNG/08-Breakout-Tiles.png";

const bricksImgArr = [brickImg, brickImg2, brickImg3];

class SingleBrick {
  constructor(x, y, w, h, c, arr) {
    this.x = x - w;
    this.y = y;
    this.width = w;
    this.height = h;
    this.colors = c;
    this.touch = 1;
    this.broke = false;
    this.imgArr = arr;
    this.brick = new Image();
    this.brick.src = null;
    this.status = "present";
  }
  brickImg(ctx, img) {
    this.brick.src = img;
    ctx.drawImage(this.brick, this.x, this.y, this.width, this.height);
  }

  transparentImg(ctx) {
    let imgData = ctx.getImageData(this.x, this.y, this.width, this.height);
    let arr = imgData.data;
    for (let i = 0; i < arr.length; i++) {
      arr[i] = 0;
    }
    ctx.putImageData(imgData, this.x, this.y);
  }
  draw(ctx) {
    if (this.status === "present") {
      ctx.beginPath();
      this.brickImg(ctx);
      ctx.rect(this.x, this.y, this.width, this.height);
      if (this.touch === 1) this.brickImg(ctx, this.imgArr[0]);
      if (this.touch === 2) this.brickImg(ctx, this.imgArr[1]);
      if (this.touch === 3) this.brickImg(ctx, this.imgArr[2]);
      ctx.lineWidth = 1;
      ctx.strokeStyle = this.touch === 4 ? "transparent" : "white";
      // ctx.fill();
      ctx.strokeRect(this.x, this.y, this.width, this.height);
    }
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
    let newBrick = new SingleBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
      brick.colors,
      bricksImgArr
    );
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
