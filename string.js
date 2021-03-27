
const HurufBesarDiawalSetiapHuruf = (str) => {
  return str
    .toLowerCase()
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.substring(1))
    .join(' ')
}

const MenghitungKarakterSamaPadaArray = (arr) => {
    let jumlah = {}

    arr.forEach(item => {
        if(jumlah[item]){
            jumlah[item]++
        }else{
            jumlah[item] = 1
        }
    });

    return jumlah; 
}

let data = 'aaabbcccaaaac'
let dataArray = data.split('')
console.log(MenghitungKarakterSamaPadaArray(dataArray))