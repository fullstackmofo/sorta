import {Sorter} from './Sorter';
import {NumbersCollection} from './NumbersCollection';
import {CharactersCollection} from './CharactersCollection';




const sorter = new Sorter(new NumbersCollection([-4, 2, 5,-10]))
sorter.sort()
console.log(sorter.collection.data)


const sorterTwo = new Sorter(new CharactersCollection('syabzh'));

sorterTwo.sort();

console.log(sorterTwo.collection.data);