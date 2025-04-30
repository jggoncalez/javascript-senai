// Laços de repetição

// for
// for (condição) {
    // bloco de código
// }

for (let i = 10; i <= 20; i++) {
    console.log(i);
}

for (let i = 20; i >= 10; i--) {
    console.log(i);
}

for (let i = 0; i <= 100; i += 10) {
    console.log(i);
}


// while
// while (condição) {
    // bloco de código
// }

let i = 9;
while (i < 10) {
    console.log(i);
    i++;
};

let j = 10;
while (j > 0) {
    console.log(j);
    j--;
}

let k = 0;
while (k <= 100) {
    console.log(k);
    k += 10;
}

// do while
// do {
    // bloco de código
// } while (condição);

let g = 5;
let m = 30;
do {
    console.log(g, m);
    g++;
    m--;
} while (g < 10 && m > 20);

let a = 15;
do while (a < 25) {
    console.log(a);
    a++;
} while (a < 15);

let b = 0;
do {
    console.log(b);
    b += 10;
} while (b <= 100);


// break
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break;
    }
    console.log(i);
}

// continue
for (let i = 0; i <= 10; i++) {
    if (i === 5) {
        continue;
    }
    console.log(i);
}
