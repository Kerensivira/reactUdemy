import { heroes } from './data/heroes'

console.log(heroes)

// const getHeroeById = (id) => {
//   return heroes.find(heroes => heroes.id === id );
// }

// console.log(getHeroeById(2));

const getHeroeByIdOwner = (owner) => heroes.filter((heroes) => heroes.owner === owner);

console.log(getHeroeByIdOwner('DC'));