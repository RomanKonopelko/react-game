import { LIFE_IMG, SCORE_IMG } from "../../utils/audio-media";

export default function PlayerStats(ctx, player, canvas, test) {
  // Name
  ctx.font = "20px Arial";
  ctx.fillStyle = "red";
  ctx.fillText(`Name: ${player.name}`, 20, 30);
  ctx.drawImage(test, 15, canvas.height - 50, 30, 30);

  // Lives
  let gap = 0;
  for (let i = 0; i < player.lives; i++) {
    ctx.drawImage(LIFE_IMG, canvas.width / 2 + gap, 10, 30, 30);
    gap += 40;
  }

  // Score
  ctx.drawImage(SCORE_IMG, canvas.width - 180, 10, 30, 30);
  ctx.font = "20px Arial";
  ctx.fillStyle = "red";
  ctx.fillText(`Score: ${player.score}`, canvas.width - 140, 30);
}
