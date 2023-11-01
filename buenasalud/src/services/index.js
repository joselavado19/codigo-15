
import { makeHttpRequest } from "./config";


export async function read(url) {
  return await makeHttpRequest({ url });
}

export async function readEspecialidad(url) {
  return await makeHttpRequest({ url });
}

export async function readVentasMeses(url) {
  return await makeHttpRequest({ url });
}

export async function leerAcceso(body, url) {
  return await makeHttpRequest({ url, body, method: "POST" });
}