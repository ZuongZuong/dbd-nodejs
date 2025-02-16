/**
 * Given string: Hello ban, tui ten Teo, ban cung cung ten Teo luon ah
 * --> output:
 * Hey: 1
 * ban: 2
 * tui: 1
 * ten: 2
 * Teo: 2
 * ...
 */

var input = "Hello ban, tui ten Teo, ban cung cung ten Teo luon ah";

var words = input.split(/[\s,]+/);

var wordCount = {};

for (var i = 0; i < words.length; i++) {
  var word = words[i];
  if (wordCount[word] === undefined) {
    wordCount[word] = 1;
  } else {
    wordCount[word]++;
  }
}

console.log(wordCount);