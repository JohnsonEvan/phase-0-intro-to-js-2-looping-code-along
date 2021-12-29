// Code your solutions in this fil
const arrayNames = ["Guadalupe", "Ollie", "Aki"];
const eventName = "suprise";

function writeCards(arrayNames,eventName){
    const newArray = [];
    for (let i = 0; i < arrayNames.length; i++){
        newArray[i] = `Thank you, ${arrayNames[i]}, for the wonderful ${eventName} gift!`;
        debugger;
    }
    return newArray;
}
writeCards();
function countDown(){
    let countDown = 10;
    while (countDown>= 0){
        console.log(countDown--)
    }
}