export class Options {
  player1name?: string;
  player2name?: string;
  bot1difficulty?: "easy" | "hard";
  bot2difficulty?: "easy" | "hard";
  gamemode: "pvp" | "pvc" | "cvc";
  roundtimer?: number;
  score: number;
  start: boolean;

  constructor() {
    this.player1name = "Player 1";
    this.player2name = "Player 2";
    this.gamemode = "pvp";
    this.score = 0;
    this.start = false;
  }
}
