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

  insert(e) {
    let current = this.size;
    let parent = this._getParentIndex(current);
    this.size = this.size + 1;

    this.store[current] = e;
    while (current > 0 && this.compare(this.store[current], this.store[parent])) {
      this._swap(current, parent);
      current = parent;
      parent = this._getParentIndex(current);
    }
  }
}