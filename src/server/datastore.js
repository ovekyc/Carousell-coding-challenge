export const top20 = {};
export const mainStore = {};

export class PriorityQueue {
  constructor(compare) {
    this.store = [];
    this.size = this.store.length;
    this.compare = compare ? compare : (a, b) => a < b;
  }

  _getParentIndex(childIndex) { // esline-disable-line no-understore-dangle // private function
    return childIndex < 0 ? -1 : parseInt((childIndex - 1) / 2, 10);
  }

  _swap(indexA, indexB) { // esline-disable-line no-understore-dangle // private function
    const temp = this.store[indexA];
    this.store[indexA] = this.store[indexB];
    this.store[indexB] = temp;
  }

  push(e) {
    let current = this.size;
    let parent = this._getParentIndex(current);
    this.size = this.size + 1;

    this.store[current] = e;    // Add new value to last
    // Adjust location of new value by comparing with parent node
    while (current > 0 && this.compare(this.store[current], this.store[parent])) {
      this._swap(current, parent);
      current = parent;
      parent = this._getParentIndex(current);
    }
  }

  pop() {
    if (this.size <= 0) return; // eslint-disable-line curly
    const store = this.store;

    // Replace root node with last node's value. And pop last node.
    this.size = this.size - 1;
    let current = 0;
    store[current] = store[this.size];
    store.pop();

    // Adjust location of root node which was located in last index
    while (current < this.size) {
      const left = 2 * current + 1;
      const right = 2 * current + 2;
      let greater = current;
      // eslint-disable-next-line curly
      if (left < this.size && this.compare(store[left], store[greater])) greater = left;
      // eslint-disable-next-line curly
      if (right < this.size && this.compare(store[right], store[greater])) greater = right;
      if (greater !== current) {
        this._swap(current, greater);
        current = greater;
      } else {
        break;
      }
    }
  }

  top() {
    return this.size <= 0 ? null : this.store[0];
  }

  empty() {
    return this.size === 0;
  }
}

export class TopicPQ extends PriorityQueue {
  static compareTopic(topicA, topicB) {
    return topicA.up < topicB.up;
  }

  constructor() {
    super(TopicPQ.compareTopic);
  }

  canPush() {
    return this.size < 20;
  }
}
