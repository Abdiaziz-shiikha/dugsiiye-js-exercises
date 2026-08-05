//kan waa exercise 32

const hero = document.querySelector('#hero');
console.log(hero);

const information = document.querySelector('#info');
console.log(information);

function changeContent(){

    hero.textContent = "welcome to world wide ";

}

function repeat(){
    information.innerHTML = "this the best web uses dom manipulation <strong>java script<strong>"
}
