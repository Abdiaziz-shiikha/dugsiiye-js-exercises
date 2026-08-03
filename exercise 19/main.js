
//kan wa exercise 19


const numbers = [1, 2, 3, 4, 5];

numbers.forEach((number) => {
    console.log(number);
});

//kan wa exercise 20

const fruits = ["apple", "banana", "cherry"];

const lengths = fruits.map((fruit)  => {
   return fruit.length;
});

// console.log(lengths); 

//kan wa exercise 21

const numbers = [1, 2, 3, 4, 5];

const sum =numbers.reduce((total,tiro) => total + tiro, 0);
console.log(sum);

