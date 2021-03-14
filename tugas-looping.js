// Soal Nomor 2
let x = 1;
let a = 2;
while (x <= 20) {
  let text = "";
  if (x <= 10) {
    if (x == 1) {
      console.log("Looping pertama");
    }
    text = `${x * 2} - I love coding`;
  } else {
    if (x == 11) {
      console.log("Loooping kedua");
    }
    text = `${(21 - x) * 2} - I will become fullstack developer`;
  }
  console.log(text);
  x++;
}

// soal NO 3
console.log("Soal Nomor 3");
for (let i = 1; i < 21; i++) {
  let text = "";
  if (i <= 10) {
    if (i == 1) {
      console.log("Looping Pertama");
    }
    text = `${i * 2} - I love coding`;
  } else {
    if (i == 11) {
      console.log("Looping kedua");
    }
    text = `${(21 - i) * 2} - I will become fullstack developer`;
  }
  console.log(text);
}

// SOAL NO 4
for (let i = 1; i <= 100; i++) {
  if (i % 2 == 0) {
    console.log("GENAP");
  } else {
    console.log("GANJIL");
  }
}

// perulangan baru kelipatan 3
for (let i = 1; i <= 100; i += 2) {
  if (i % 3 == 0) {
    console.log(`${i} KELIPATAN 3`);
  }
}
// perulangan kelipatan 6
for (let i = 1; i <= 100; i += 5) {
  if (i % 6 == 0) {
    console.log(`${i} KELIPATAN 6`);
  }
}

// perulangan kelipatan 10
for (let i = 1; i <= 100; i += 9) {
  if (i % 10 == 0) {
    console.log(`${i} KELIPATAN 10`);
  }
}

// Soal no 5
for (let i = 0; i < 9; i++) {
  let star = "*";
  if (i < 5) {
    for (let j = 0; j < i; j++) {
      star += "**";
    }
  } else {
    for (let j = 1; j < 9 - i; j++) {
      star += "**";
    }
  }

  console.log(star);
}
