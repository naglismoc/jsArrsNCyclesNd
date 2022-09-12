

/*Vienoje eilutėje atspausdinkite visus skaičius nuo 1 iki 3000, kurie dalijasi iš 77 be liekanos. Skaičius atskirkite kableliais. Po paskutinio skaičiaus kablelio neturi būti.
*/
console.log("--------2---------");
let result = "";

for (let i = 77; i < 3000; i += 77) {
    result += i + ",";
}

console.log(result.substring(0, result.length - 1));
console.log("--------4---------");

// for (let i = 1; i < 3000; i++) {
//     if(i % 77 == 0){
//         console.log(i);
//     }
// }

for (let i = 0; i < 25; i++) {
    let line = "";
    for (let a = 0; a < 25; a++) {
        if (i == a || 25 - i - 1 == a) {
            line += "#";
        } else {
            line += "*";
        }
    }
    console.log(line);
}

console.log("--------5a---------");

while (true) {
    if (Math.round(Math.random())) {
        console.log("S");
    } else {
        console.log("H");
        break;
    }
}


console.log("--------5b---------");
let count = 0;
while (true) {
    if (Math.round(Math.random())) {
        console.log("H");
        count++;
        if (count == 3) {
            break;
        }
    } else {
        console.log("S");
    }
}


console.log("--------5c---------");
count = 0;
while (true) {
    if (Math.round(Math.random())) {
        console.log("H");
        count++;
        if (count == 3) {
            break;
        }
    } else {
        console.log("S");
        count = 0;
    }
}

console.log("--------6---------");

let countK = 0;
let countP = 0;

while (true) {
    let k = 10 + Math.round(Math.random() * 10);
    let p = 5 + Math.round(Math.random() * 20);

    countK += k;
    countP += p;

    if (countK >= 222 || countP >= 222) {
        break;
    }
}

if (countK > countP) {
    console.log("Laimėjo Kestas");
} else if (countK < countP) {
    console.log("Laimėjo Petras");
} else {
    console.log("lygiosios");
}

console.log(countK, countP);


console.log("--------8a---------");

let hits = 0;
for (let i = 0; i < 5; i++) {
    let nailedDepth = 0;
    while (true) {
        let nail = 5 + Math.round(Math.random() * 15);
        nailedDepth += nail;
        hits++;
        if (nailedDepth >= 85) {
            break;
        }
    }
}
    
console.log( hits);


console.log("--------8b---------");

hits = 0;
for (let i = 0; i < 5; i++) {
    nailedDepth = 0;
    while (true) {
        if (Math.round(Math.random())) {
            let nail = 5 + Math.round(Math.random() * 15);
            nailedDepth += nail;
        }
        hits++;
        if (nailedDepth >= 85) {
            break;
        }
    }
}

console.log(hits);
