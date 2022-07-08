//alert ('Mi archivo está bien linkeado');

//Incremento

//Crear un programa que pida ingresar una número de partida y una cantidad a ir incrementando y 
//mostrar cinco mensajes seguidos que muestren el número del mensaje y el total incrementado hasta
//el momento (p. ej.: empezando con 5 e incrementando 5, "Incremento 1) Total: 10", "Incremento 
//2) Total: 15", "Incremento 3) Total: 20", etc.).

const partida1 = prompt ('Ingrese número de partida');
const incremento1 = prompt ('Ingrese cantidad de elementos nuevos');
const total1 = (Number (incremento1));
console.log ( 'Partida: ' + partida1 + '. Nuevo stock: ' + total1 + '.');

const partida2 = prompt ('Ingrese número de partida');
const incremento2 = prompt ('Ingrese cantidad de elementos nuevos');
const total2 = (total1 + Number (incremento2));
console.log ( 'Partida: ' + partida2 + '. Nuevo stock: ' + total2 + '.');

const partida3 = prompt ('Ingrese número de partida');
const incremento3 = prompt ('Ingrese cantidad de elementos nuevos');
const total3 = (total2 + Number (incremento3));
console.log ( 'Partida: ' + partida3 + '. Nuevo stock: ' + total3 + '.');

const partida4 = prompt ('Ingrese número de partida');
const incremento4 = prompt ('Ingrese cantidad de elementos nuevos');
const total4 = (total3 + Number (incremento4));
console.log ( 'Partida: ' + partida4 + '. Nuevo stock: ' + total4 + '.');

const partida5 = prompt ('Ingrese número de partida');
const incremento5 = prompt ('Ingrese cantidad de elementos nuevos');
const total5 = (total4 + Number (incremento5));
console.log ( 'Partida: ' + partida5 + '. Nuevo stock: ' + total5 + '.');