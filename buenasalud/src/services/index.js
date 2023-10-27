const URLApi =
  "http://localhost/clinica_gestionguadalupana/integracion/rowVentasDia";
const URLApiEsp =
  "http://localhost/clinica_gestionguadalupana/integracion/rowVentasEspcialidad";
const URLApiMeses =
  "http://localhost/clinica_gestionguadalupana/integracion/gridVentasCompara";

export async function read() {
  const response = await fetch(URLApi);
  const data = await response.json();
  return data;
}

export async function readEspecialidad() {
  const response = await fetch(URLApiEsp);
  const data = await response.json();
  return data;
}

export async function readVentasMeses() {
  const response = await fetch(URLApiMeses);
  const data = await response.json();
  return data;
}
