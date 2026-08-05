//kan waa exercise 32

const hero = document.querySelector('#hero');
console.log(hero);

const information = document.querySelector('#info');
console.log(information);


//kan waa exercise 33


function changeContent(){

    hero.textContent = "welcome to world wide ";

}

function repeat(){
    information.innerHTML = "this the best web uses dom manipulation <strong>java script<strong>"
}

//kan waa exercise 34

function addItem(){
    const item= document.querySelector('#list');
    const newItem= document.createElement('li');
    newItem.textContent="item3";
    list.appendChild(newItem)
}

function removeItem(){

    if(list.lastChild){
        list.removeChild(list.lastChild);
    }else{
        alert("taliye cafiyo!!")
    }
   
}