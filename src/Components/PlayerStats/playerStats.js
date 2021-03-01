import { LIFE_IMG, SCORE_IMG, LEVEL_IMG } from "../../utils/audio-media";

export default function PlayerStats(ctx, player, canvas) {
  // Name
  ctx.font = "20px Arial";
  ctx.fillStyle = "red";
  ctx.fillText(`Name: ${player.name}`, 20, 30);

  // Lives
  let gap = 0;
  for (let i = 0; i < player.lives; i++) {
    ctx.drawImage(LIFE_IMG, canvas.width / 2 + gap, 10, 30, 30);
    gap += 40;
  }

  //Level
  ctx.font = "20px Arial";
  ctx.drawImage(LEVEL_IMG, canvas.width - 340, 10, 30, 30);
  ctx.fillText(`${player.level}`, canvas.width - 300, 30);
  // Score
  ctx.drawImage(SCORE_IMG, canvas.width - 180, 10, 30, 30);
  ctx.font = "20px Arial";
  ctx.fillStyle = "red";
  ctx.fillText(`Score: ${player.score}`, canvas.width - 140, 30);
}
