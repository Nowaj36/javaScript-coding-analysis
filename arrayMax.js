let marks = [45, 49, 80, 60, 77, 80, 88, 81, 90, 54, 35, 36, 47];
let max = marks[0];
for(let i = 0; i <= marks.length; i++){
    let element = marks[i];
    if(element > max){
        max = element;
    }
}
console.log("Heighest value is:", max);