import { leerAcceso } from "../services";
import Swal from "sweetalert2";

export async function findUser(body) {
  const users = await leerAcceso(body, "verificaAccesos");
  return users;
}

export function showError(text) {
  Swal.fire({
    icon: "error",
    text,
  });
}