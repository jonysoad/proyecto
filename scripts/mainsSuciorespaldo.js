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
   
//***La idea principal principal de la aplicacion a la fecha, es pedirle un valor al usuario por medio de un prompt, ese valor va estar incorporado a un array
//***Luego, sumar cada caso por el valor asignado en el array y entregar un valor final.


alert('Bienvenido al primer E-Shop, tenemos opciones limitadas que va a ir creciendo con el tiempo, por el momento puede comprar 1 solo producto')
//Variables
     let producto = prompt ('Elegir un producto\n 1 - Autito\n 2 - Remera\n 3 - Buzo')//.toLowerCase()
     let comprando = ""
    // let autito = 3000  version anterior andando
    // let remera = 4000  version anterior andando
    // let buzo = 8000    version anterior andando.
     let compra = 0 // me lo explico Marcelo, no lo sabia, la idea es que esto sume la compra.
     
     //console.log (producto.includes('1'))


    //comenzando a utilizar arrays
     const arrayProductos = [ 
        {id:'1', nombre: 'autito', precio: 3000},
        {id:'2', nombre: 'remera', precio: 4000}, 
        {id:'3', nombre: 'buzo', precio: 8000},
    ]
    
    id= arrayProductos.find(arrayProductos=>arrayProductos.id==producto)

    console.log()
    console.log(arrayProductos.find(arrayProductos=>arrayProductos.id==producto)) //se ve que ya tenemos seleccionado el array con prompt
    
    const encontrar = arrayProductos.find
   //creo un Array con precio de cada uno.
    const precioProducto = arrayProductos.map(({precio}) =>precio)


   //include solo me sirve para resultados boolean version para sumar elementos a mi array "stock"
    // if(arrayProductos.includes(producto)){
    //          alert('Has seleccionado ' + producto)

    //       }else {
    //           alert('Por el momento no contamos con ese producto')
    //       }//else if (producto !='salir')
    

    // console.log(arrayProductos.includes('1'))
          


    
    // if (comprando !="NO" ){
    //     alert=producto
    // }
    

    
    

     //Verifica si el array se recorre/ Si lo esta haciendo    
    for (elementos of arrayProductos){
        console.log(`${elementos.nombre}  ${elementos.precio}`)
    }   


         while (comprando != "NO"){

        // tomas los casos adquiridos del prompt y se prentende sumar a la palabra, luego a la variable "compra" que luego es usado en una funcion
        switch(producto){
            case '1' : alert ("Has seleccionado autito por $" + id.precio)
             compra = compra + id.precio
             comprando = prompt('¿Desea seguir comprando? SI/NO')
             producto = prompt ('Elegir un producto\n 1 - Autito\n 2 - Remera\n 3 - Buzo')
            console.log('case 1')
            break;
            

             case '2' : alert("Has seleccionado remera por $ " + id.producto) // otra version que me gustaba precioProducto[1]
                compra = compra + id.producto
                comprando = prompt('Desea seguir comprando SI/NO')
                producto = prompt ('Elegir un producto\n 1 - Autito\n 2 - Remera\n 3 - Buzo')
                console.log('case 2')
             break;

            case '3' : alert("Has seleccionado por buzo $ " + id.precio)
                compra = compra + id.precio
                comprando = prompt('Desea seguir comprando SI/NO')
                producto = prompt ('Elegir un producto\n 1 - Autito\n 2 - Remera\n 3 - Buzo')
                console.log('case 3')
             break;
            default: console.log ('no es una opcion valida')
            }

           
            

     }



     
    //Funcion de la variable compra en donde devuelve el total gastado.

      function pagar(compra){
         alert("Su total de compra es de $" + compra)
         console.log('estoy pasando por la funcion')
        }

      pagar(compra);



 

     //proxima version array:
    //  let arrayProducto =  ['Autito', 'Remera', 'Buzo']
    //  let producto = prompt ('Elegir un producto\n 1 - Autito\n 2 - Remera\n 3 - Buzo').toLocaleLowerCase()

    //  if(arrayProducto.includes(producto)){
    //      alert('si hay ' + producto)
    //  }else {
    //      alert('Por el momento no contamos con ese producto')
    //  }