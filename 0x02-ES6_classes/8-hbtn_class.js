export default class HolbertonClass {
  constructor(size, location) {
    this.size = size;
    this.location = location;
  }

  set size(newSize) {
    this._size = newSize;
  }

  get size() {
    return this._size;
  }

  [Symbol.toPrimitive](hint) {
    if (hint === 'number') return this.size;
    if (hint === 'string') return this.location;
    return null;
  }
}
