 



 window.onload= () =>{
  main()
 }

 function main(){
  const bg =document.getElementById('bgjs');
  const btnz =document.getElementById('bg_btn');

  btnz.addEventListener('click',function(){
    const bgcolor=rgbColor();
    bg.style.backgroundColor=bgcolor;
  });


 }

 function rgbColor(){
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);

  return `rgb(${red},${green},${blue})`
 }