/* eslint-disable no-underscore-dangle */
import Character from './Character';

// ? Класс наследования для Демонов и Магов:
export default class MathChar extends Character {
  constructor(name, type) {
    super(name, type);

    // ? Задаем базовые значения дистанции и "дурмана" при создании персонажей:
    this.distance = 1;
    this.stoned = false;
  }

  get attack() {
    if (this.distance === 2) {
      this.baseAttack *= 0.9;
    }
    if (this.distance === 3) {
      this.baseAttack *= 0.8;
    }
    if (this.distance === 4) {
      this.baseAttack *= 0.7;
    }
    if (this.distance === 5) {
      this.baseAttack *= 0.6;
    }
    if (this.stoned === true) {
      this.baseAttack -= Math.log2(this.distance) * 5;
    }
    if (this.baseAttack > 0) {
      return Math.round(this.baseAttack);
    }
    this.baseAttack = 0;
    return this.baseAttack;
  }

  set attack(value) {
    this.baseAttack = value;
  }

  get stoned() {
    return this._stoned;
  }

  set stoned(value) {
    this._stoned = value;
  }
}