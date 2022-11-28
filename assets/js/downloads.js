
// downloads

let countgta = 0;
let countmta = 0;

getDownloads = function(type){
    if(type == 'gta'){
        const span = document.querySelector('#countergta');

        let result = (countgta += 1);

        span.innerHTML = (new Intl.NumberFormat('pt-BR').format(result));
    }else if(type == 'mta'){
        const span = document.querySelector('#countermta');

        let result = (countmta += 1);

        span.innerHTML = (new Intl.NumberFormat('pt-BR').format(result));
    };
};