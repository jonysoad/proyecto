
 //document.addEventListener('DOMContentLoaded', function() {
   
//***La idea principal principal de la aplicacion a la fecha, es pedirle un valor al usuario por medio de un prompt, ese valor va estar incorporado a un array
//***Luego, sumar cada caso por el valor asignado en el array y entregar un valor final.


    alert('Bienvenido al primer E-Shop, tenemos opciones limitadas que va a ir creciendo con el tiempo, por el momento puede comprar 1 solo producto')
    
    //Variables
     let producto = ""; //prompt ('Elegir un producto\n 1 - Autito\n 2 - Remera\n 3 - Buzo')//.toLowerCase()
     let comprando = ""
     let compra = 0 // me lo explico Marcelo, no lo sabia, la idea es que esto sume la compra.
     
     //console.log (producto.includes('1'))


    //comenzando a utilizar arrays
     const arrayProductos = [ 
        {id:'1', nombre: 'autito', precio: 3000},
        {id:'2', nombre: 'remera', precio: 4000}, 
        {id:'3', nombre: 'buzo', precio: 8000},
    ]
    
    //id= arrayProductos.find(arrayProductos=>arrayProductos.id==producto) //no estaba comentado, hasta que volvi a arrancar el curso

    //console.log()
    //console.log(arrayProductos.find(arrayProductos=>arrayProductos.id==producto)) //se ve que ya tenemos seleccionado el array con prompt
    
    //const encontrar = arrayProductos.find //no estaba comentado hasta que volvi a arrancar
   //creo un Array con precio de cada uno.
   //  const precioProducto = arrayProductos.map(({precio}) =>precio) Me encanta esta funcion, no la quiero borrar


     //Verifica si el array se recorre/ Si lo esta haciendo    
    for (elementos of arrayProductos){
        console.log(`${elementos.nombre}  ${elementos.precio}`)
    }   


 // tomas los casos adquiridos del prompt y se prentende sumar a la palabra, luego a la variable "compra" que luego es usado en una funcion
    while(comprando!="no"){  
      producto = prompt ('Elegir un producto\n 1 - Autito\n 2 - Remera\n 3 - Buzo')//.toLowerCase()
      id= arrayProductos.find(arrayProductos=>arrayProductos.id==producto)

        switch(producto){
            case '1' : alert ("Has seleccionado autito por $" + id.precio)
             compra = compra + id.precio
             //comprando = prompt('¿Desea seguir comprando? si/no')
             //producto = prompt ('Elegir un producto\n 1 - Autito\n 2 - Remera\n 3 - Buzo')
            console.log('case 1')
            break;
            

             case '2' : alert("Has seleccionado remera por $ " + id.precio) // otra version que me gustaba precioProducto[1]
                compra = compra + id.precio
               // comprando = prompt('Desea seguir comprando si/no')
                //producto = prompt ('Elegir un producto\n 1 - Autito\n 2 - Remera\n 3 - Buzo')
                console.log('case 2')
             break;

            case '3' : alert("Has seleccionado por buzo $ " + id.precio)
                compra = compra + id.precio
                //comprando = prompt('Desea seguir comprando si/no')
                //producto = prompt ('Elegir un producto\n 1 - Autito\n 2 - Remera\n 3 - Buzo')
                console.log('case 3')
             break;
            default: console.log ('no es una opcion valida')
            }
            
        comprando = prompt('Desea seguir comprando si/no') 
        //producto = prompt ('Elegir un producto\n 1 - Autito\n 2 - Remera\n 3 - Buzo') lo comente ahora
            
        }    
        
        


     
    //Funcion de la variable compra en donde devuelve el total gastado.

      function pagar(compra){
         alert("Su total de compra es de $" + compra)
         console.log('estoy pasando por la funcion')
        }

      pagar(compra);
  
  ///////////Clase DOM y Eventos//////

      const yerbaMate={
        id:1,
        imagen:"../images/despedida.jpeg",
        nombre:"Yerba mate Taragüi",
        descripcion:"Yerba mate con palo 1kg",
        precio:890.0
    }
    
    let tarjetas=document.getElementById("tarjetas");
    tarjetas.innerHTML=`
        <div class="card" style="width: 18rem;">
        <img src=${yerbaMate.imagen} class="card-img-top" alt="yerba">
        <div class="card-body">
            <h5 class="card-title">${yerbaMate.nombre}</h5>
            <p class="card-text">${yerbaMate.descripcion}</p>
            <p class="card-text">$ ${yerbaMate.precio}</p>
            <button id="miBoton" class="btn btn-primary">Comprar</button>
        </div>
        </div>
    `;
    
    let miBoton=document.getElementById("miBoton");
    //OPCION 1
    // miBoton.addEventListener("click",interactuar);
    // function interactuar(){
    //     alert("Agregaste la yerba mate al carrito");
    // }
    
    //OPCION2
    miBoton.onclick = () => {
        console.log("Agregaste la yerba mate al carrito");
        carrito.push(yerbaMate);
        console.table(carrito);
    }
    
    miBoton.onmouseover = () => {
        console.log("Quieres comprar Yerba Mate Taragüi???");
        miBoton.className="btn btn-danger";
    }
    
    miBoton.onmouseout = () => {
        miBoton.className="btn btn-primary";
    }
   