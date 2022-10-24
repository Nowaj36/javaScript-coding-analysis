let speech = "I am a good person. I don't snore at night.";
let count = 0;

for(let i = 0; i < speech.length; i++){
    let element = speech[i];
    if(element == " " && speech[i-1] != " "){
        count++;
    }
}
count++;
console.log(count);