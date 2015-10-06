var myPoem = 'What is a jQuery but a misunderstood object?'

function capitalize(aString) {
	var words = aString.split(" ");
	for (var i = 0; i < words.length; i++) {
		var j = words[i].charAt(0).toUpperCase();
		words[i] = j + words[i].substr(1);
	}
	return words.join(" ");
}
capitalize(myPoem);



/*
JavaScript String substr() Method
JavaScript String Reference JavaScript String Reference

Example
Extract parts of a string:

var str = "Hello world!";
var res = str.substr(1, 4);
The result of res will be:

ello


*/

/*
The substr() method extracts parts of a string, beginning at the character at the specified position, and returns the specified number of characters.

Tip: To extract characters from the end of the string, use a negative start number (This does not work in IE 8 and earlier).

Note: The substr() method does not change the original string.

*/


//STRING SEARCH

var str = "Mr. Blue has a blue house";
var n = str.search(/blue/i);
 false = -1 
 0 + = true, 

 var string = 'aajlkjjskdjfAlsj;gkejflksajfjskda';

alert(string.match(/a/gi).length);


/a/


function multiSearchOr(text, searchWords){
  var searchExp = new RegExp(searchWords.join("|"),"gi");
  return (searchExp.test(text))?"Found!":"Not found!";
}

function multiSearchAnd(text, searchWords){
  var searchExp = new RegExp("("+searchWords.join(")|(")+")","gi");
  return (text.match(searchExp).length == searchWords.length)?"Found!":"Not found!";
}

var theOdyssey = "function expression or function declaration? Tis an obvious choice";
//Write a function called vowelCounter that takes in a string (theOdyssey) and returns how many vowels are in that string.

var vowels = ['a', 'e', 'i', 'o', 'u'];



var exampleString = 'i will practice survival skills';
var stringBase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','_'];
var countObject = {} ; 

function characterCount(word, character) {
   var count = 0;
    for (var i = 0; i < word.length; i++) {
       if (word[i] === character) {
           count++;
       }
  }
  return count;
}
for (var i = 0, l = stringBase.length; i < l; i++) {
    var currentChar = stringBase[i];
    countObject[currentChar] = characterCount(exampleString, currentChar);
}
console.log(countObject);


function vowelCounter(str, letter){
	var count = 0;
	for (var i = 0; i < str.length; i++) {
		if (str[i] ==== letter) {
			count++;
		}
	}
	return count;
}



function count(string,char) {
 var re = new RegExp(char,"gi");
 return string.match(re).length;
}

var str = 'I will practice survival skills';
console.log(count(str,'i'));


function count(string,char) {
 var re = new RegExp(char,"gi");
 return string.match(re).length;
}

var str = 'I will practice survival skills';
console.log(count(str,'i'))



var exampleString = 'i will practice survival skills';
var stringBase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','_'];
var countObject = {} ; 

function characterCount(word, character) {
   var count = 0;
    for (var i = 0; i < word.length; i++) {
       if (word[i] === character) {
           count++;
       }
  }
  return count;
}
for (var i = 0, l = stringBase.length; i < l; i++) {
    var currentChar = stringBase[i];
    countObject[currentChar] = characterCount(exampleString, currentChar);
}
console.log(countObject);
for var key in countObject){
	summed += countObject[key];
};





