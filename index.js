alert ("Bienvenido !!, a continuación elegira su combo de hamburguesa, precione aceptar para continuar") ;

let hamburguesa = prompt ("escriba (opcion 1) u (opcion 2) , opcion 1 hamburguesa grand tasty 1300 $, opcion 2 hamburguesa doble cuarto de libra 1100$");

while ((hamburguesa != "opcion 1") && (hamburguesa != "opcion 2")){
    switch (hamburguesa){
        case "opcion 1":
            alert ("usted a elejido la opcion 1 a continuacion elija el tamaño de las papas ");
            
        break;
        case "opcion 2":
            alert ("usted a elejido la opcion 2 a continuacion elija el tamaño de las papas");
            
        break;
        default:
            alert ("error: por el momento solo contamos con esas 2 opciones, a continuacion elija una de ellas");
            hamburguesa = prompt ("escriba (opcion 1) u (opcion 2) , opcion 1 hamburguesa grand tasty 1300 $, opcion 2 hamburguesa doble cuarto de libra 1100$")  
    }
}


let tamañoPapas = prompt ("mediano o grandes");
while ((tamañoPapas != "mediano") && (tamañoPapas != "grandes")){
    switch (tamañoPapas){
        case "mediano":
            alert ("eligio papas medianas");
        break;
        case "grandes":
            alert("eligio papas grandes tiene un costo adicional de 150 $");
        break;
        default:
            alert("error: Ingrese tamaño de las papas");
            tamañoPapas = prompt ("mediano o grandes");
            break;
    }
    
}
let bebida = prompt ("a continuacion ingrese el tipo de bebida : agua, coca cola, sprite");

while ((bebida != "agua") && (bebida != "coca cola") && (bebida != "sprite")){
    switch (bebida){
        case "agua":
            alert ("su eleccion fue agua");
            break;
        case "coca cola" :
            alert ("su eleccion fue coca cola");
            break;
        case "sprite":
            alert ("su eleccion fue sprite");
        default:
            alert("error: elija el tipo de bebida que se muestra en pantalla");
            bebida = prompt("ingrese el tipo de bebida : agua, coca cola, sprite");
            break;
    }
}

alert ("su pedido esta completo, a continuacion le indicaremos el monto a pagar");

if (hamburguesa == "opcion 1"){
    hamburguesa = 1300 ;
}
else if (hamburguesa == "opcion 2"){
    hamburguesa = 1100 ;
} 
if (tamañoPapas == "mediano"){
    tamañoPapas = 0 ;
}
else if (tamañoPapas == "grandes"){
    tamañoPapas = 150 ;
}

let total = hamburguesa + tamañoPapas;

alert ("monto total a pagar es" + " " + total + " " + "pesos");

