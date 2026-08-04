//kan waa exercise 26

function dataOfUser(){
    alert ("ma hubtaa inaad xogtan ubaahantahay");
    return {id:1,name:"ali",city:"qardho"};
}
const data=dataOfUser();
console.log(data)


function dataOfUser(callback){
   setTimeout(() => {
    const user = {id:1,name:"ali",city:"qardho"}; 
    callback(user)
   }, 2000);
  
    
}

dataOfUser (function user(user){
    console.log(user)
})


console.log("mudane wax yar dulqaado!")



// kan waa exercise 27

function fetchDatyOfUser(){
    return new Promise((resolve,reject)=>{
    setTimeout(() => {
        
        const success=false;
        if (success){
            resolve("is real user")
        }else{
            reject("failed fetching")
        }
       
    }, 2000);
})}

fetchDatyOfUser()
.then(data=>(console.log(data)))
.catch(err=>(console.log(err)))


//kan waa exercise 28



function fetchDatyOfUser(){
    return new Promise((resolve,reject)=>{
    setTimeout(() => {
        
        const success=false;
        if (success){
            resolve("is real user")
        }else{
            reject("failed fetching")
        }
       
    }, 2000);
})}


async function display(){
    try{

    const user=await fetchDatyOfUser();
        console.log(user);
        
    }catch(err){
        console.log(err)
    }}

    display();

    

//kan waa exercise 29


async function datyFetch() {
    console.log("start fetching")
    const response=await fetch('data.JSON');
    const xog=await response.json();
    console.log(xog);
}

datyFetch();



//kan waa exercise 30

function operate(a, b, callback) {
    return callback(a, b);
}

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a,b){
    return a*b;
}

function divide(a,b){
    return a/b;
}



console.log("Addition:", operate(5, 3, add));       
console.log("Subtraction:", operate(5, 3, subtract));
console.log("multiplay: " , operate(9,6 ,multiply));
console.log("division: " , operate(9,6 ,divide));



