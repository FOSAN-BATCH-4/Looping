

for (let i=0;i<10;i++){
    let p=''
    if(i<5){
        for (let j=0;j<4-i;j++){
        p += ' '
        }
        for (let k=0;k<2*i+1;k++){
            p += 'x'
        }
    }else {
        for (let l=0;l<i-4;l++){
            p+= ' '
        }
        for (let m=0; m<17-2*i;m++){
            p+= 'x'
        }
    }
console.log(p)
}