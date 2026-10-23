import os from "node:os";
import { saludar } from "./mensaje.js";

const uptimeSeconds = os.uptime();
const uptimeHours = Math.floor(uptimeSeconds / 3600);
const uptimeMinutes = Math.floor((uptimeSeconds % 3600) / 60);

const nombre = "Andy";
const motivo = "aprender Node.js";

console.log(saludar(nombre, motivo));

// no suelo apagar la compu, la suelo bloquear jaja, después de ver esto le voy a dar un descanso: 730 horas y 48 minutos
console.log(`Tu tiempo de actividad del sistema es de: ${uptimeHours} horas y ${uptimeMinutes} minutos.`);

console.log("Algunos datos del sistema operativo:")

console.log(`Sistema operativo: ${os.platform()}`);
console.log(`Nombre de usuario: ${os.userInfo().username}`);

console.log(`Memoria total: ${(os.totalmem() / 1024 / 1024 / 1024).toFixed(2)} GB`);
console.log(`Memoria total: ${Math.round(os.totalmem() / 1024 / 1024 / 1024)} GB`);

console.log(`Memoria libre: ${(os.freemem() / 1024 / 1024 / 1024).toFixed(2)} GB`);