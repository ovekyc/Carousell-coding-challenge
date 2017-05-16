export default class Topic {
  constructor(str) {
    this.str = str.substring(0, 255); // max 255 chars (EOF included).
    this.up = 0;
    this.down = 0;
  }
  upVote() { this.up++; }
  downVote() { this.down++; }
}