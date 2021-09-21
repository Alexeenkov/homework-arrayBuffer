import Bowerman from '../Bowman';
import Magician from '../Magician';
import Daemon from '../Daemon';
import Character from '../Character';
import MathChar from '../MathChar';

test('create the character "Bowman"', () => {
  const expected = {
    attack: 25,
    defence: 25,
    health: 100,
    level: 1,
    name: 'Anatoly',
    type: 'Bowman',
  };

  const received = new Bowerman('Anatoly');

  expect(received).toEqual(expected);
});

test('create the character "Magician"', () => {
  const expected = {
    baseAttack: 10,
    defence: 40,
    health: 100,
    level: 1,
    distance: 1,
    _stoned: false,
    name: 'Anatoly',
    type: 'Magician',
  };

  const received = new Magician('Anatoly');

  expect(received).toEqual(expected);
});

test('create the character "Daemon"', () => {
  const expected = {
    baseAttack: 10,
    defence: 40,
    health: 100,
    level: 1,
    distance: 1,
    _stoned: false,
    name: 'Anatoly',
    type: 'Daemon',
  };

  const received = new Daemon('Anatoly');

  expect(received).toEqual(expected);
});

test('uncorrect name character', () => {
  expect(() => new Daemon('A')).toThrowError(
    new Error('Длина имени должна быть не менее 2-ух и не более 10-ти символов'),
  );
});

test('uncorrect type character', () => {
  expect(() => new Character('Anatoly', 'Druid')).toThrowError(
    new Error('Некорректный тип персонажа'),
  );
});

test('Calculation of the attack of a demon or a magician without stoned (distance = 2)', () => {
  const magician = new Magician('Anatoly');
  magician.attack = 100;
  magician.distance = 2;
  magician.stoned = false;
  expect(magician.attack).toBe(90);
});

test('Calculation of the attack of a demon or a magician without stoned (distance = 3)', () => {
  const magician = new Magician('Anatoly');
  magician.attack = 100;
  magician.distance = 3;
  magician.stoned = false;
  expect(magician.attack).toBe(80);
});

test('Calculation of the attack of a demon or a magician without stoned (distance = 4)', () => {
  const magician = new Magician('Anatoly');
  magician.attack = 100;
  magician.distance = 4;
  magician.stoned = false;
  expect(magician.attack).toBe(70);
});

test('Calculation of the attack of a demon or a magician without stoned (distance = 5)', () => {
  const magician = new Magician('Anatoly');
  magician.attack = 100;
  magician.distance = 5;
  magician.stoned = false;
  expect(magician.attack).toBe(60);
});

test('Calculation of the attack of a demon or a magician with stoned', () => {
  const magician = new Magician('Anatoly');
  magician.attack = 100;
  magician.distance = 2;
  magician.stoned = true;
  expect(magician.attack).toBe(85);
});

test('Calculation of the attack of a demon or a magician with stoned (attack = 0)', () => {
  const magician = new Magician('Anatoly');
  magician.attack = 10;
  magician.distance = 4;
  magician.stoned = true;
  expect(magician.attack).toBe(0);
});