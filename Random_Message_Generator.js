const firstName = ['Darren', 'John', 'Steve', 'Luke', 'Harry', 'Mike', 'Tony', 'Frank', 'Graham', 'Jim'];
const secondName = ['Lewis', 'Smith', 'Edwards', 'Foster', 'Cooper', 'Evans', 'Fletcher', 'Wagner', 'Davis', 'Michell'];
const car = ['Honda', 'Fiat', 'BMW', 'Ford', 'Volvo', 'Renault', 'Mercedes', 'Mini', 'Citroen', 'Vauxhall'];

//Generate random number between 0 and
function randomNumberGenerate() {
    let randomNumber = Math.floor(Math.random() * 10);
    return randomNumber;
}

console.log(randomNumberGenerate());

//console.log(`${firstName} ${secondName} drives a ${car}.`);