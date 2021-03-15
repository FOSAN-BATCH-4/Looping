let i = 0;
let a = 2;

while(i<46){
    if(i<22){
        if(i!=0){
            console.log(i+'- I love coding');
        }else{
            console.log('LOOPING PERTAMA');
        }
    }else{
        if(i!=24){
            console.log((i-a)+'- I will become fullstack developer');
            a+=4
        }else{
            console.log('LOOPING KEDUA');
        }
    }
    i+=2;
}