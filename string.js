 
// const HurufBesarDiawalSetiapHuruf = (str) => {
//   return str
//     .toLowerCase()
//     .split(' ')
//     .map(word => word.charAt(0).toUpperCase() + word.substring(1))
//     .join(' ')
// }

// const MenghitungKarakterSamaPadaArray = (arr) => {
//     let jumlah = {}

//     arr.forEach(item => {
//         jumlah[item] ? jumlah[item]++ : jumlah[item] = 1
//     });

//     return jumlah; 
// }



const MengubahHutufPertamaMenjadiKapital = (str) => {
    return str.toLowerCase()
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.substring(1))
        .join(' ')
}

let String = 'iNi adAlAh KarakTer yANg AkaN diRUbAh'

const MenghitungJumlahKarakterYangSama = (str) => {
    let jumlah = {}
    str.forEach(item => {
        item !== ' ' ? jumlah[item] ? jumlah[item]++ : jumlah[item] = 1 : null
    });
    return jumlah
}

console.log(MenghitungJumlahKarakterYangSama(String.split('')))