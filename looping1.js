/**
 * Loop menggunakan bilangna genap
 * Maju mundur (2,4,6,6,4,2)
 */

//perkataan yang kebawah
let kebawah = 0;
//sebagai counter dalam menghitung mundur
let counter = 2;

while(kebawah<46){
    if(kebawah<22){
        //kalau 0 tak sama dengan 0 maka jalankan ini
        if(kebawah!=0){
            console.log(kebawah+'- I love coding');
        }else{
            //kalau sama maka jalankan ini
            console.log('LOOPING PERTAMA');
        }
    }else{
        if(kebawah!=24){
            /**
             * kebawah - counter 
             * example :
             *      - 22-2 = 20 (kebawah - counter), lalu counter nambah 4
             *      - 24-6 = 18 (kebawah - counter), lalu counter nambah 4 dst
             */
            console.log((kebawah-counter)+'- I love coding');
            counter+=4
        }else{
            //kalau sama dengan 24 berarti jalankan ini
            console.log('LOOPING KEDUA');
        }
    }
    kebawah+=2;
}
