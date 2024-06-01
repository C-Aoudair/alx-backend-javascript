import Building from "./5-building";

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);
    this.floors = floors;
  }

  get floors() {
    return this._floors;
  }

  set floors(newStories) {
    this._floors = newStories;
  }

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors!`;
  }
}
