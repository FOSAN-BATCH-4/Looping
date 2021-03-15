/**
 * Make a belah ketupat (diamond)
 * Setiap barisnya itu ganjil, gak mungkin genap
 * Semua diawali dari 2 hingga x, kecuali penengah
 *          *
 *         ***
 *        *****
 *         ***
 *          *
 */
let panjang = 5;
for(let i = 1;i <= panjang;i++){
    let a = ''
    for(let j = 1;j<=panjang-i;j++){
        a+=' '
    }
    for(let k = 1;k<=2*i-1;k++){
        a+='*'
    }
    console.log(a);
}

for(let i = 1;i <= panjang-1;i++){
    let a = ''
    for(let j = 1;j<=i;j++){
        a+=' '
    }
    for(let k = 1;k<=2*(panjang-i)-1;k++){
        a+='*'
    }
    console.log(a);
}