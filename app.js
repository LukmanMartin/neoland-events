//1.1  Añade un botón a tu html con el id btnToClick y en tu javascript añade el 
//evento click que ejecute un console log con la información del evento del click

console.log(hola)

const clickConsol = (event) => {
    console.log(event);
};
const boton = document.getElementById("idbtnToClick");


boton.addEventListener("click", clickConsol)

//1.2   Añade un evento 'focus' que ejecute un console.log con el valor del input.

 const inputValor = (value) => {

 console.log(value);
};


 
const InputV = document.querySelector('.focus')
 
 InputV.addEventListener("focus",inputValor)
 
 

 //1.3 Añade un evento 'input' que ejecute un console.log con el valor del input.*/


const input1 = document.querySelector(".value");

input1.addEventListener("input",(i)=>{
   console.log(i);
});

