//kan wa exercise 11

// for(let i=1 ; i<=50 ; i++){
//     console.log(i);
// }




//kan wa exercise 12

// let fruits = ["banana", "apple", "cherry"];

// for(let i=0 ; i<fruits.length ; i++){
//     console.log(fruits[i]);
// }



//kan wa exercise 13

// let i=5;
// while(i>=0){
//     console.log(i);
//     i--;
// }


//kan wa exercise 14

// let i;
// do{
//     i = prompt("please enter a number");
   

// } while(i<10);

// console.log(i);


//kan wa exercise 15

let students=[
    {
        name:"Abdirahman",
        age:20,
        grade:"form1" },
        {
        name:"ali",
        age:22,
        grade:"form2" },
        {
        name:"Abdullahi",
        age:21,
        grade:"form3" },    
        {
        name:"yusuf",
        age:23,
        grade:"form4"
    }
]

  console.log("this each student information");

for(let student of students){
    for(let key in student){{
      
        console.log(key + ":" + student[key]);
        
    }
    }}
