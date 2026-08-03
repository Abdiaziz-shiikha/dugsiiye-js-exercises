
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

//kan waa exercise 23

const cars={
    make: "Toyota",
    model: "Camry",
    year: 2020
};




let{make,model,year}=cars;

console.log(make);
console.log(year);

//kan waa exercise 24

function calculateArea(width,height=width){
    console.log(`the area is ${width*height}M`);
}

// kan waa exercise 25


const num1=[1,2,4];
const allNumbures=[...num1,4,5,6];
console.log(allNumbures);

function mul(...tiro){
   return tiro.reduce((result,num) => result * num ,1);
}
console.log(mul(2,3,5));

