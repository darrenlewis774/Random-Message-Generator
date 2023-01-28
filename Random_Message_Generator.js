const firstName = ['Darren', 'John', 'Steve', 'Luke', 'Harry', 'Mike', 'Tony', 'Frank', 'Graham', 'Jim'];
const secondName = ['Lewis', 'Smith', 'Edwards', 'Foster', 'Cooper', 'Evans', 'Fletcher', 'Wagner', 'Davis', 'Michell'];
const carModel = ['Honda', 'Fiat', 'BMW', 'Ford', 'Volvo', 'Renault', 'Mercedes', 'Mini', 'Citroen', 'Vauxhall'];

//Generate random number between 0 and 9
function randomNumberGenerate() {
    let randomNumber = Math.floor(Math.random() * 10);
    return randomNumber;
}

//Allocate generated random number to index variable 
let firstRandomNumber = randomNumberGenerate();
let secondRandomNumber = randomNumberGenerate();
let thirdRandomNumber = randomNumberGenerate();

//Display string containing random array values
console.log(`${firstName[firstRandomNumber]} ${secondName[secondRandomNumber]} drives a ${carModel[thirdRandomNumber]}.`);