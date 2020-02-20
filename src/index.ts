import {Sorter} from './Sorter';
import {NumbersCollection} from './NumbersCollection';
import {CharactersCollection} from './CharactersCollection';




const sorter = new NumbersCollection([-4, 2, 5,-10]);
sorter.sort()
console.log(sorter.data)


const sorterTwo = new CharactersCollection('syabzh');

sorterTwo.sort();

console.log(sorterTwo.data);