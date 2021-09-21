const types = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];

export default class Character {
  constructor(name, type) {
    // ? Создаём имя персонажа:
    if (name.length < 2 || name.length > 10) {
      throw new Error('Длина имени должна быть не менее 2-ух и не более 10-ти символов');
    } else {
      this.name = name;
    }
    // ? Создаём тип персонажа:
    if (types.includes(type)) {
      this.type = type;
    } else {
      throw new Error('Некорректный тип персонажа');
    }
    // ? Создаём уровень жизни и уровень персонажа:
    this.health = 100;
    this.level = 1;
  }
}