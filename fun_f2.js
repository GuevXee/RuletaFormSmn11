function pintar(Col){ 
      document.getElementById('tit').style.backgroundColor=Col;
      document.getElementById('titd').style.backgroundColor=Col;
} 

function tercs(){
   var mensaje = "Sin igualdad";
   var nombre = document.getElementById("nomb").value;
   var x1 = Math.trunc( Math.random()*9 ) + 1;   
   var x2 = Math.trunc( Math.random()*9 ) + 1;   
   var x3 = Math.trunc( Math.random()*9 ) + 1;       

   switch(x1){
     case 1:
      document.getElementById("box1").innerHTML="<img src='Imagenes/Xavier.png' width='200px' height='200px'>";
      break;       
     case 2:
      document.getElementById("box1").innerHTML="<img src='Imagenes/Yael.png' width='200px' height='200px'>";
      break;       
     case 3:
      document.getElementById("box1").innerHTML="<img src='Imagenes/Naomy.png' width='200px' height='200px'>";
      break;       
     case 4:
      document.getElementById("box1").innerHTML="<img src='Imagenes/Kevin.png' width='200px' height='200px'>";
      break;       
     case 5:
      document.getElementById("box1").innerHTML="<img src='Imagenes/Hilario.png' width='200px' height='200px'>";
      break;
     case 6:
      document.getElementById("box1").innerHTML="<img src='Imagenes/Daniel.png' width='200px' height='200px'>";
      break;
     case 7:
      document.getElementById("box1").innerHTML="<img src='Imagenes/Diego.png' width='200px' height='200px'>";
      break;
     case 8:
      document.getElementById("box1").innerHTML="<img src='Imagenes/DiegoA.png' width='200px' height='200px'>";
      break;
     case 9:
      document.getElementById("box1").innerHTML="<img src='Imagenes/Cesar.png' width='200px' height='200px'>";
      break;
   }

   switch(x2){
     case 1:
      document.getElementById("box2").innerHTML="<img src='Imagenes/Xavier.png' width='200px' height='200px'>";
      break;       
     case 2:
      document.getElementById("box2").innerHTML="<img src='Imagenes/Yael.png' width='200px' height='200px'>";
      break;       
     case 3:
      document.getElementById("box2").innerHTML="<img src='Imagenes/Naomy.png' width='200px' height='200px'>";
      break;       
     case 4:
      document.getElementById("box2").innerHTML="<img src='Imagenes/Kevin.png' width='200px' height='200px'>";
      break;       
     case 5:
      document.getElementById("box2").innerHTML="<img src='Imagenes/Hilario.png' width='200px' height='200px'>";
      break;
     case 6:
      document.getElementById("box2").innerHTML="<img src='Imagenes/Daniel.png' width='200px' height='200px'>";
      break;
     case 7:
      document.getElementById("box2").innerHTML="<img src='Imagenes/Diego.png' width='200px' height='200px'>";
      break;
     case 8:
      document.getElementById("box2").innerHTML="<img src='Imagenes/DiegoA.png' width='200px' height='200px'>";
      break;
     case 9:
      document.getElementById("box2").innerHTML="<img src='Imagenes/Cesar.png' width='200px' height='200px'>";
      break;             
   }

   switch(x3){
     case 1:
      document.getElementById("box3").innerHTML="<img src='Imagenes/Xavier.png' width='200px' height='200px'>";
      break;       
     case 2:
      document.getElementById("box3").innerHTML="<img src='Imagenes/Yael.png' width='200px' height='200px'>";
      break;       
     case 3:
      document.getElementById("box3").innerHTML="<img src='Imagenes/Naomy.png' width='200px' height='200px'>";
      break;       
     case 4:
      document.getElementById("box3").innerHTML="<img src='Imagenes/Kevin.png' width='200px' height='200px'>";
      break;       
     case 5:
      document.getElementById("box3").innerHTML="<img src='Imagenes/Hilario.png'width='200px' height='200px'>";
      break;
     case 6:
      document.getElementById("box3").innerHTML="<img src='Imagenes/Daniel.png' width='200px' height='200px'>";
      break;
     case 7:
      document.getElementById("box3").innerHTML="<img src='Imagenes/Diego.png' width='200px' height='200px'>";
      break;
     case 8:
      document.getElementById("box3").innerHTML="<img src='Imagenes/DiegoA.png' width='200px' height='200px'>";
      break;
     case 9:
      document.getElementById("box3").innerHTML="<img src='Imagenes/Cesar.png' width='200px' height='200px'>";
      break;            
   }

   if ((x1==x2)&&(x1==x3))
      mensaje="¡Tercias!";
   else if ((x1==x2)||(x1==x3))
           mensaje="¡Pares!";
       else 
           mensaje="¡Sin igualdad!";
    
    document.getElementById("Sal01").innerHTML=" ¡Hola " +nombre+ "! El resultado fue: ";
    document.getElementById("resul").innerHTML= mensaje;
    
}