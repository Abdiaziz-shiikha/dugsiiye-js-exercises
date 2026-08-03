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
        
        const success=true;
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