
const CekBilanganPrima = (angka) => {
    let pembagi = 0;
    for(let i = 1; i <= angka; i++) {
        if(angka%i === 0){
            pembagi++
        }
    }

    if(pembagi === 2){
        console.log(angka, 'merupakan bialangan prima')
    }else{
        console.log(angka, 'bukan merupakan bialangan prima')
    }
}

CekBilanganPrima(5)
