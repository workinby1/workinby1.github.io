
import { assert } from "chai";


import {readNumber} from "../src/readNumber.js";


describe("returns regular number", function() {
  it("should return the firt element that is a regular number", function() {

  let inputArr = ["123a", "ab123", "123.3", "123"]

    assert.strictEqual(readNumber(inputArr), "123.3");
  });
})


