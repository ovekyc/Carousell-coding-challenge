import uuid4 from 'uuid4';

export default class Topic {
  constructor(str) {
    this.uid = uuid4();
    this.str = str.substring(0, 255); // max 255 chars (EOF included).
    this.up = 0;
    this.down = 0;
  }
  upVote() { this.up = this.up + 1; } // eslint-disable-line brace-style
  downVote() { this.down = this.down + 1; } // eslint-disable-line brace-style
}
