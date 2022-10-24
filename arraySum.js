// let marks = [45, 49, 80, 60, 77, 80, 88, 81, 90, 54, 35, 36, 47];
// let sum = 0;
// for(i = 0; i < marks.length; i++){
//     let element = marks[i];
//     sum = sum + element;
// }
// console.log('Total number is:', sum);

function getElementSum(number){
    let sum = 0;
    for(let i = 0; i < number.length; i++){
        let element = number[i];
        sum = sum + element;
    }
    return sum;
}
let number = [45, 49, 80, 60, 77, 80, 88, 81, 90, 54, 35, 36, 47];
let result = getElementSum(number);
console.log("Total Number is:", result);

