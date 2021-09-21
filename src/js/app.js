import Magician from './Magician';
import Daemon from './Daemon';
import Bowman from './Bowman';

// ? Создаём персонажей:
const magician = new Magician('Ivan', 'Magician');
const daemon = new Daemon('Ilya', 'Daemon');
const bowman = new Bowman('Dmitry', 'Bowman');

// ? Чисто глянуть, что мы создали:
// eslint-disable-next-line no-console
console.log(magician, daemon, bowman);