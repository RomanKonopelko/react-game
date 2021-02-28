export default {
  ballObj: {
    x: 20,
    y: 200,
    dx: 1,
    dy: 1,
    rad: 10,
    speed: 10,
  },
  paddleObj: {
    height: 20,
    width: 100,
    x: 100,
    color: "orange",
  },
  brickObj: {
    x: 0.5,
    y: 50,
    width: 800 / 10 - 1,
    height: 20,
    density: 2,
    colors: ["lightblue", "yellow", "red"],
  },
  playerData: {
    name: "Roman",
    lives: 5,
    score: 0,
    level: 5,
  },
};
