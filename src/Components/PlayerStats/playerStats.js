import { LIFE_IMG, SCORE_IMG, LEVEL_IMG } from "../../utils/audio-media";

export default function PlayerStats(ctx, player, canvas) {
  // Name

  // Lives
  let gap = 0;
  for (let i = 0; i < player.lives; i++) {
    if (window.innerWidth <= 900) {
      gap += 20;
      ctx.drawImage(LIFE_IMG, canvas.width / 2 - gap, 10, 18, 18);
      ctx.drawImage(LEVEL_IMG, canvas.width - 140, 10, 18, 18);
      ctx.drawImage(SCORE_IMG, canvas.width - 80, 10, 18, 18);
    } else {
      gap += 40;
      ctx.drawImage(LIFE_IMG, canvas.width / 2 + gap, 10, 30, 30);
      ctx.drawImage(LEVEL_IMG, canvas.width - 340, 10, 30, 30);
      ctx.drawImage(SCORE_IMG, canvas.width - 180, 10, 30, 30);
    }
  }
  if (window.innerWidth <= 900) {
    ctx.font = "14px Arial";
    ctx.fillStyle = "red";
    ctx.fillText(`Name: ${player.name}`, 20, 22);
    ctx.font = "12px Arial";
    ctx.fillText(`${player.level}`, canvas.width - 120, 22);
    ctx.font = "12px Arial";
    ctx.fillStyle = "red";
    ctx.fillText(`Score: ${player.score}`, canvas.width - 60, 22);
  } else {
    gap += 40;
    ctx.font = "20px Arial";
    ctx.fillStyle = "red";
    ctx.fillText(`Name: ${player.name}`, 20, 30);
    ctx.font = "20px Arial";
    ctx.fillText(`${player.level}`, canvas.width - 300, 30);
    ctx.font = "20px Arial";
    ctx.fillStyle = "red";
    ctx.fillText(`Score: ${player.score}`, canvas.width - 140, 30);
  }
}

//Level
