
//kan wa exercise 19




//kan wa exercise 20

const fruits = ["apple", "banana", "cherry"];

const lengths = fruits.map((fruit)  => {
   return fruit.length;
});

console.log(lengths); 

//kan wa exercise 21

const numbers = [1, 2, 3, 4, 5];

const sum =numbers.reduce((total,tiro) => total + tiro, 0);
console.log(sum);

//kan wa exercise 22

const colors = ["red", "green", "blue"];

const [item1, item2, item3] = colors;
console.log(item1);
console.log(item3);

const cars={
    make: "Toyota",
    model: "Camry",
    year: 2020
};




let{make,model,year}=cars;

console.log(make);
console.log(year);