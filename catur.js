
const DisplayPapanCatur = (x, y) => {
    let awal = 0;
    let papan = '';

    for(let i = 0; i < x; i++){
        papan += '\n'
        let hitam = awal;

        for(let j = 0; j < y; j++){
            if(hitam === 0){
                papan += '--'
                hitam = 1;
            }else{
                papan += '++'
                hitam = 0
            }
        }

        if(awal === 0){
            awal = 1;
        }else{
            awal = 0
        }
    }

    return papan;
}

console.log(DisplayPapanCatur(8, 8))
