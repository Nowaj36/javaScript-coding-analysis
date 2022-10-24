let number = [2, 5, 2, 9, 8, 7, 9, 8, 5, 2, 3, 5, 8, 9, 5, 6, 5, 2, 3, 2];
let uniqeName = [];
for(let i = 0; i < number.length; i++){
    let element = number[i];
    let index = uniqeName.indexOf(element);
    if(index == -1){
        uniqeName.push(element);
    }
}
console.log(uniqeName);