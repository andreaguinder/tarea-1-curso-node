import os from "node:os";
import { saludar } from "./mensaje.js";

const nombre = "Andy";
const motivo = "aprender Node.js";

console.log(saludar(nombre, motivo));

console.log(`Sistema operativo: ${os.platform()}`);
console.log(`Nombre de usuario: ${os.userInfo().username}`);

console.log(`Memoria total: ${(os.totalmem() / 1024 / 1024 / 1024).toFixed(2)} GB`);
console.log(`Memoria total: ${Math.round(os.totalmem() / 1024 / 1024 / 1024)} GB`);

console.log(`Memoria libre: ${(os.freemem() / 1024 / 1024 / 1024).toFixed(2)} GB`);