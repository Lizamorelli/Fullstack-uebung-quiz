zahl = 0.3;

if (zahl > 0.5) {
    zahl = 0;
}
else {
    zahl = 1;
}

console.log(zahl);

zahl3 = 6;

if (zahl3 > 0.5) {
    zahl3 = 0;
}
else {
    zahl3 = 1;
}

console.log(zahl3);


let istDurstig = true;
let willKaffee = true;

if (istDurstig) {
    if (willKaffee) {
        //Kaffee kochen
    }
}

    // create a function that returns true, when two numbers are the same: 

    let zahl1 = 5;
    let zahl2 = 5;
if (zahl1==zahl2){
    console.log("gleich")
}

    //ob zahl gerade oder ungerade ist:

function isEven(num){
    if (num % 2 == 0){
        return "Die Zahl ist gerade"
    }
    else {
        return "Die Zahl ist ungerade"
    }

}
console.log (isEven(5))
console.log (isEven(6))

//????????????


    //compare two numbers and return the bigger one

    let number1 = 5;
    let number2 = 6;
    let result = 0

function compareNumbers (number1, number2) {
        if (number1 > number2) {
            return number1;
        } else {
            return number2;
        }
        
    }
    result =compareNumbers(number1, number2);
    console.log(result);


    // create a switch case statement that assigns a value to a variable "difficulty" for an inputted number as following:
    // --> easy, --> medium, --> hard
    //using the ternary operator, assign a value to a the variable "canZombiesSmashDoors" as following: if the difficulty is "Hard", canZombiesSmashDoors should be true, else false

let numb1 = 1

switch (numb1) {
    case 1:
        difficulty = "easy";
        break;
    case 2:
        difficulty = "medium";
        break;
    case 3:
        difficulty = "hard";
        break;
    default:
        console.log("unknown");
}

console.log(difficulty)

//Loop

for (let i = 0; i < 5; i++) {

    console.log(i);

}

// While-do loop - verdoppeln

let zahl9 = 1;

while (zahl9 < 1000) {
    zahl9 = zahl9 * 2;
    console.log(zahl9);

}

//create an array

let birthdayVisitors = ["Anna", "Basti", "Calvin", "Denise"];

//Adding an Element later on
birthdayVisitors.push("Lena");

console.log(birthdayVisitors)

let name5 = birthdayVisitors[1];

console.log(name5)