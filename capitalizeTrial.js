function ucFirstAllWords( str )
{
var pieces = str.split(" ");
for ( var i = 0; i < pieces.length; i++ )
{
var j = pieces[i].charAt(0).toUpperCase();
pieces[i] = j + pieces[i].substr(1);
}
return pieces.join(" ");
}

////////

//write a function called capitalize that takes in the myPoem variable and capitalizes every word 
var myPoem = 'What is a jQuery but a misunderstood object?'
//What is a jQuery but a misunderstood object? --> What Is A JQuery But A Misunderstood Object?

function capitalize(myPoem) {
	var words = myPooem.split(" ");
String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

capitalize.apply([words]);
	}
}

String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

capitalize.apply([words]);

  //code here


words[i].prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

function ucFirstAllWords( str )
{
    var pieces = str.split(" ");
    for ( var i = 0; i < pieces.length; i++ )
    {
        var j = pieces[i].charAt(0).toUpperCase();
        pieces[i] = j + pieces[i].substr(1);
    }
    return pieces.join(" ");
}

for (var i =0; i < pieces.length; i++){
	.prototype.capitalize = function() {
return this.charAt(0).toUpperCase() + this.slice(1);
}	

}
words[i].prototype.capitalize = function() {
return this.charAt(0).toUpperCase() + this.slice(1);
}

fun.apply(thisArg, [argsArray])
