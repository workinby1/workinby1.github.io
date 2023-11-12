/* comment out the import assert line (in /dist/test js mocha file) when running in the browser */
import { assert } from "chai";

import {
  Person,
  doubleNums,
  doubleAges,
  filterEvenNum,
  filterOver10,
  findEvenAge,
  findEvenNum,
  includesEvenAge,
} from "../src/arrayPractice.js";


let numArray = Array<number>();
let peopleArray= Array<Person>();

describe("map practice", function () {
    beforeEach(function () {
        numArray = [5, 0, 7, 77, -20, 300, 51, 2];
        peopleArray = [{ name: "Sam", age: 15 }, { name: "William", age: 6 }, { name: "Lucy", age: 13 }, { name: "Barney", age: 80 }];
    });

    it("doubles an array of numbers", function () {
        assert.deepEqual(doubleNums(numArray), [10, 0, 14, 154, -40, 600, 102, 4]);
        assert.deepEqual(numArray, [5, 0, 7, 77, -20, 300, 51, 2]);  //test for pure function
    });

    it("doubles age", function () {
            //copy the orinal array, so that to get the original latter for comparison.
        const originalPeopleArray = [...peopleArray];

        //call doubleAges on the array
        const doubleAgesResult = doubleAges(originalPeopleArray)
        assert.deepEqual(doubleAgesResult,
            [{ name: "Sam", age: 30 }, { name: "William", age: 12 }, { name: "Lucy", age: 26 }, { name: "Barney", age: 160 }]);
        assert.deepEqual(peopleArray,
            [{ name: "Sam", age: 15 }, { name: "William", age: 6 }, { name: "Lucy", age: 13 }, { name: "Barney", age: 80 }]);
    });
});

describe("filter practice", function () {
    beforeEach(function () {
        numArray = [5, 0, 7, 77, -20, 300, 51, 2];
        peopleArray = [{ name: "Sam", age: 15 }, { name: "William", age: 6 }, { name: "Lucy", age: 13 }, { name: "Barney", age: 80 }];
    });

    it("filter all even numbers", function () {
        assert.sameDeepMembers(filterEvenNum(numArray), [0, -20, 300, 2]);
        assert.deepEqual(numArray, [5, 0, 7, 77, -20, 300, 51, 2]);  //test for pure function
    });

    it("filter all age > 10", function () {
        assert.sameDeepMembers(filterOver10(peopleArray),
        [
              { name: "Sam", age: 15 },
              { name: "Lucy", age: 13 },
              { name: "Barney", age: 80 },
            ]);
        // assert.deepEqual(
        //   peopleArray.filter(person=>person.age),
        //   [
        //     { name: "Sam", age: 15 },
        //     // { name: "William", age: 6 },
        //     { name: "Lucy", age: 13 },
        //     { name: "Barney", age: 80 },
        //   ]
        // );
    });

    it("find even", function () {
        assert.sameDeepMembers(findEvenNum(numArray), [0, -20, 300, 2]);
        assert.deepEqual(findEvenNum([1, 3, 801]),[]);
    });
    it("find even age ", function () {
        assert.sameDeepMembers(findEvenAge(peopleArray), [
          { name: "William", age: 6 },
          { name: "Barney", age: 80 },
        ]);
        const peopleOddAge = [{ name: "Sam", age: 15 }, { name: "Lucy", age: 13 }, { name: "Barney", age: 81  }];
        assert.sameDeepMembers(findEvenAge(peopleOddAge), []);
    });

    it("includes even", function () {
        assert.strictEqual(numArray.includes(77), true);
        assert.strictEqual(numArray.includes(15), false);
    });

    /* complete the following similar to includes even test */
    it("includes even age", function(){
        assert.strictEqual(includesEvenAge(peopleArray), true);
    });

});

