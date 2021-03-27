
const segitiga = (panjang) => {
    let bintang = '';
    for(let i = panjang; i > 0; i--){
        for(let j = 1; j <= panjang; j++){
            if( j >= i){
                bintang += j;
            }else{
                bintang += ' ';
            }
        }
        bintang += '\n'
    }
    return bintang
}



const piramida = (panjang) => {
    if(panjang === 10){
        let i = 10;
    }else{
        let i = 5
    }

    return i
}

console.log(piramida(5))
