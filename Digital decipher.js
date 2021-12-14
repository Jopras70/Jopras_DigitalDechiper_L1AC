function digit(x) {
    let y = [];
    let i = 0;
    while (x >= 1) {
        var j = x % 10;
        y[i] = j
        x = Math.floor(x / 10);
        i++;
    }
    y.reverse()
    return y;
}

function cypher(text, key) {
    var y = [];
    for (var i = 0; i < text.length; i++) {
        y[i] = String.fromCharCode(text[i] - key[i % key.length] + 96);
    }
    var str = y.join('');
    console.log(str);
}


let eMessage = [20, 12, 18, 30, 21];
let key = 1939;

let eMessage1 = [14, 30, 11, 1, 20, 17, 18, 18]
let key1 = 1990;

let eMessage2 = [6, 4, 1, 3, 9, 20]
let key2 = 100;

let x = [];
x = digit(key)

let x1 = []
x1 = digit(key1);

let x2 = []
x2 = digit(key2);

cypher(eMessage, x);
cypher(eMessage1, x1);
cypher(eMessage2, x2);