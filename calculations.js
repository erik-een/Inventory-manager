

// const getValue = () => {
//     let result1 = document.getElementById('number-of-people_input').value;
//     let result2 = document.getElementById('number-of-courses_input').value;
//     let result3 = document.querySelector('#coffee-checkbox');
//     if (result3.checked === true) {
//         result3 = result1;
//         console.log(result1, result2, result3)
//         return result1 && result2 && result3;
//     } else {
//         console.log(result1, result2)
//         return result1 && result2;
//     }

// }

const Plates = document.getElementById('plates_result');
const Silverware = document.getElementById('silverware_result');
const CoffeeSet = document.getElementById('coffee-cups_result');

function calculateForTable() {
    let result1 = document.getElementById('number-of-people_input').value;
    let result2 = document.getElementById('number-of-courses_input').value;
    let result3 = document.querySelector('#coffee-checkbox');
    if (result3.checked === true) {
        result3 = result1;

        Plates.innerText = result1 * result2;
        Silverware.innerText = result2 * 2 * result1;
        CoffeeSet.innerText = result3;
    } else {
        Plates.innerText = result1 * result2;
        Silverware.innerText = result2 * 2 * result1;
    }

}