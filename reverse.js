function reverseSpeech(string){
    let reverse = "";
    for(let i = 0; i < string.length; i++){
        let statment = string[i];
        reverse = statment + reverse;
    }
    return reverse;
}
let string = "Hello Alien vai brothers what's up!"
let AlienSpeech = reverseSpeech(string);
console.log(AlienSpeech);