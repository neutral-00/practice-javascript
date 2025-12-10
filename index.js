const {
  findRepeatedWords,
  findRepeatedWordsImproved,
} = require("./repeated-words");

let str = "apple abc def abc xyz abc apple banana apple orange banana";
console.log(findRepeatedWords(str));
const anotherStr = "hello world!, hello World, from javascript land";
console.log(findRepeatedWordsImproved(anotherStr));
