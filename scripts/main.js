

let nombre = prompt('ingresa tu nombre: ')
alert('Hola ' + nombre)

//Hasta que la condicion no se da, el bucle no para de funcionar
 let num = prompt('ingrese su edad: ')
 let contador = 0
 while(num <18){
    num = prompt('ingrese su edad:')
     contador = contador + 1
 }

 alert('Felicidades sos mayor de edad, podes comprar')
 console.log('el ciclo itero ' + contador + ' veces')