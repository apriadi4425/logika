
const CekBilanganPrima = (angka) => {
    let pembagi = 0;
    for(let i = 1; i <= angka; i++) {
        angka%i === 0 ? pembagi++ : null
    }

    const keterangan = pembagi === 2 ? 
        'merupakan bilangan prima' : 
        'bukan merupakan bilangan prima'
        
    return keterangan;
}

CekBilanganPrima(9)
