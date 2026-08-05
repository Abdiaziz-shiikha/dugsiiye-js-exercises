//kan waa exercise 35


function changeProfile(){
    const profile=document.querySelector('#image')

    const url = prompt("enter your profile ");
    const size = prompt("enter your img size ");
    const background = prompt("enter your background color ");
    const border = prompt("enter your border  ");
   
    profile.setAttribute('src',url)
    profile.setAttribute('width',size)
    image.style.backgroundColor=background
    image.style.padding= '4px'
    image.style.border= border
}