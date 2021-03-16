/**
 * Trouble 1 
 * - Make a loop 1-100
 * - If ganjil maka ganjil
 * - If genap maka genap
 */

for(let counter = 1;counter<=100;counter++){
    if(counter%2!=0){;
        console.log('GANJIL');
    }else{
        console.log('GENAP');
    }
}

for(let counter = 1;counter<=100;counter+=2){
    if(counter%3==0){
        console.log(counter+' KELIPATAN 3');
    }
}

for(let counter = 1;counter<=100;counter+=5){
    if(counter%6==0){
        console.log(counter+' KELIPATAN 6');
    }
}

for(let counter = 1;counter<=100;counter+=9){
    if(counter%10==0){
        console.log(counter+' KELIPATAN 10');
    }
}