

// let nombre = prompt('Ingresa tu nombre: ')
// alert('Hola ' + nombre)

// //Hasta que la condicion no se da, el bucle no para de funcionar
//  let num = prompt('Ingrese su edad: ')
//  let contador = 0
//  while(num <18){
//     num = prompt('ingrese su edad:')
//      contador = contador + 1
//  }

//  alert('Felicidades sos mayor de edad, podes comprar')
//  console.log('el ciclo itero ' + contador + ' veces')



 //document.addEventListener('DOMContentLoaded', function() {
   

    alert('Bienvenido al primer E-Shop, tenemos opciones limitadas que va a ir creciendo con el tiempo, por el momento puede comprar 1 solo producto')

    let producto = prompt ('Elegir un producto\n 1 - Autito\n 2 - Remera\n 3 - Buzo')
    let comprando = ""
    let autito = 3000
    let remera = 4000
    let buzo = 8000
    let compra = 0 // me lo explico Marcelo, no lo sabia, la idea es que esto sume la compra.

   //  while (comprando === "NO"){

        switch(producto){
            case '1' : alert("Has seleccionado autito por $" + autito)
             compra = compra + autito 
             comprando = prompt('¿Desea seguir comprando? SI/NO')
            console.log('case 1')
            break;
            

             case '2' : alert("Has seleccionado por $" + remera) 
                compra = compra + remera
                comprando = prompt('Desea seguir comprando SI/NO')
                console.log('case 2')
             break;

            case '3' : alert("Has seleccionado por $" + buzo)
                compra = compra + buzo
                comprando = prompt('Desea seguir comprando SI/NO')
                console.log('case 3')
             break;
            default: console.log ('no es una opcion valida')
            }
            

     //}


    //Funcion

     function pagar(compra){
         alert("Su total de compra es de $" + compra)
         console.log('estoy pasando por la funcion')
     }

     pagar(compra);



   