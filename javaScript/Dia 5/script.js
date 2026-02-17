// Una promesa es un objeto que presenta la eventual finalizacion (o falla) de una operacion asincrona

//"Te prometo entregar algo"
// Si cumplo hago algo --> Resultado
// Si no cumplo --> Error

//Estados de una promesa:
//1. Pendiente: Aun no se resolvió ni falló
//2. Fulfulled ( cumplida): Ya tenemos un valor para usar.
//3. Rejected (rechazada): ya tiene un motivo de error.,

/* ciclo de vida de una promesa
1. Nace en pendiente --> Pasará una sola vez a fulfilled o rejected --> quedará en "asentada" (settled), donde no cambiará jamás
--> Rivar doble entrega. 
*/

//Plantillas generales

//utilidades
const log = (...args) => console.log(...args);

const titulo = (n, nombre) => {
  log("\n" + "=".repeat(50));
  log(`EJERCICIO ${n}: ${nombre}`);
  log("=".repeat(50));
};

const esperar = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

/**
 * Plantilla para promesa co9n delay que RESUELVE
 */
const resolverEn = (ms, valor) =>
    new Promise((resolve) => setTimeout(() => resolve(valor), ms));

/**
 * Plantilla para promesa con delay que RECHAZDA
 */
const rechazarEn = (ms, error) =>
    new Promise((_, reject) => setTimeout(() => reject(error), ms));

