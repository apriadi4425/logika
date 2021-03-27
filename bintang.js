
// const segitiga = (panjang) => {
//     let bintang = '';
//     for(let i = panjang; i > 0; i--){
//         for(let j = 1; j <= panjang; j++){
//             if( j >= i){
//                 bintang += j;
//             }else{
//                 bintang += ' ';
//             }
//         }
//         bintang += '\n'
//     }
//     return bintang
// }



// const piramida = (panjang) => {
//     if(panjang === 10){
//         let i = 10;
//     }else{
//         let i = 5
//     }

//     return i
// }

// console.log(piramida(5))

const piramida = (panjang) => {
    let bintang = ''
    for(let i = 0; i <= panjang; i++){
        for(let j = i; j <= panjang; j++ ){
            bintang += ' '
        }
        for(let k = 0; k <= i; k++){
            bintang += '*'
        }
        for(let l = 0; l <= i - 1; l++){
            bintang += '*'
        }

        bintang += '\n'
    }

    for(let i = 0; i <= panjang; i++){
        for(let j = 0; j <= i; j++){
            bintang += ' '
        }
        for(let k = i; k <= panjang; k++){
            bintang += '*'
        }
        for(let l = i + 1; l <= panjang; l++){
            bintang += '*'
        }
        bintang += '\n'
    }
    return bintang;
}

console.log(piramida(5))