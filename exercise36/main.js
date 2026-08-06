const colorPicker=document.querySelector('#colorPicker');
const display = document.querySelector('#display');
const history = document.querySelector('#history');
const btn = document.querySelector('#btn');

colorPicker.addEventListener('change', function() {
    display.style.backgroundColor = colorPicker.value;
});

colorPicker.addEventListener('change',function(){
    const color = colorPicker.value;
    // display.style.backgroundColor=color.value;
   
   history.innerHTML += `<span style="color:${color}">${color}</span><br>`;
 
   
// history.innerHTML += color + "<br>" ;
// history.style.color=color.value;

})