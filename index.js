
var result=0;
var cnt=document.getElementById('counter');
let rst =document.getElementById('reset');
let incre = document.getElementById('increament');
let decre= document.getElementById('decreament');

rst.addEventListener('click', function(){
    result=0;
    cnt.textContent = result;
    cnt.style.color='black';
    
})
incre.addEventListener('click', function(){
    result+=1;
    cnt.textContent = result;
    cnt.style.color='green';
   

});
decre.addEventListener('click', function(){
    result-=1;
    cnt.textContent = result;
    cnt.style.color='red';

});

//function for the changing the button color.
// function chg1(){
//     rst.style.backgroundColor='#D3D3D3'
// }
// function chg2(){
//     rst.style.backgroundColor=''
// }

