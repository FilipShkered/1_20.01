function hello(){
    console.log ('Hello World');
}

hello ();

function plus (a, b) {
    console.log (a + b);
    return a+b;
}

console.log (plus(4,4))
plus (2, 5);

function isfive(variable) {
    return variable === 5;
}

console.log(isfive(4));
console.log(isfive(5));

var stringName = 'Hello World';

function showText(text) {
    return text;
}

console.log (showText(stringName));