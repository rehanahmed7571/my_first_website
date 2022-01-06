
// feet to miles
//====================


function feetToMiles(feet){
    let miles = feet / 5280;

    return miles;
}

console.log(feetToMiles(2500000));



//wood calculator
//================

function woodCalculator (chair, table, khat){

    let chairq = chair * 3;
    let tableq = table * 5;
    let khatq = khat * 10;

    let result = chairq + tableq +khatq;
    return result;
}

console.log(woodCalculator(5,2,3));

//brick Calculator
//=============



function brickCalculator(n){
    let result = 0;
    if ( n<= 10){
        result = n*15*1000;
    }else if (n <= 20 && n > 10){
        let restten = n - 10;
        let firstten = 10 * 15 * 1000;
        let resttencal= restten * 12 * 1000;
        result = firstten + resttencal;
    } else if( n > 20){
        let prothomdosh = 10 * 15 * 1000;
        let seconddosh = 10 * 12 * 1000;
        let last= n - 20;
        let lastcal = last * 10 * 1000;
        result = prothomdosh+ seconddosh+lastcal;
    }
    return result;
}
console.log(brickCalculator(50));


// find tiny name;
//==================

function tinyName(tiny){

    let arra =[];
     for (let i = 0; i<tiny.length; i++ ){

        let total = tiny[i].length;

        arra.push(total);
    }

    let min = arra[0];
    for ( let i = 0; i<arra.length; i++){

        let numbers = arra[i];

        if (numbers<min){

            min = numbers;
        }

    }

    for ( let i= 0; i<tiny.length; i++){

            if((tiny[i]).length == min){

                let keep = tiny[i]
                return keep;
            }
            
    }
}

let tiny = ["Ashikur", "Bipul", "doller", "Saon", "Imran", "Rasel","hk"];

let result = tinyName(tiny);

console.log(result);


// end
 

