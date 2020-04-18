"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CharactersCollection_1 = require("./CharactersCollection");
var LinkedList_1 = require("./LinkedList");
// const numbersCollection = new NumbersCollection([10,3,-5,0])
// const sorter_n = new Sorter(numbersCollection)
// sorter_n.sort()
// numbersCollection.sort();
// console.log(numbersCollection.data)
// const rawText :string = 'Xaayb'
var charactersCollection = new CharactersCollection_1.CharactersCollection('Xaayb');
charactersCollection.sort();
console.log(charactersCollection.data);
// const sorter_c = new Sorter(charactersCollection)
// sorter_c.sort()
// console.log(charactersCollection.data)
var linkedList = new LinkedList_1.LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);
linkedList.sort();
linkedList.print();
// const sorter = new Sorter(linkedList);
// sorter.sort();
// linkedList.print();
