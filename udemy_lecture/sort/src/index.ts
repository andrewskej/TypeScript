import { Sorter } from './Sorter'
import { NumbersCollection } from './NumbersCollection'
import { CharactersCollection } from './CharactersCollection'
import { LinkedList } from './LinkedList'
// const numbersCollection = new NumbersCollection([10,3,-5,0])
// const sorter_n = new Sorter(numbersCollection)
// sorter_n.sort()
// numbersCollection.sort();
// console.log(numbersCollection.data)


// const rawText :string = 'Xaayb'
const charactersCollection = new CharactersCollection('Xaayb')
charactersCollection.sort();
console.log(charactersCollection.data)
// const sorter_c = new Sorter(charactersCollection)
// sorter_c.sort()
// console.log(charactersCollection.data)

const linkedList = new LinkedList();
linkedList.add(500)
linkedList.add(-10)
linkedList.add(-3)
linkedList.add(4)
linkedList.sort()
linkedList.print()

// const sorter = new Sorter(linkedList);
// sorter.sort();
// linkedList.print();