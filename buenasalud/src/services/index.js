const URLApi ="http://localhost/clinica_gestionguadalupana/integracion/rowVentasDia";

export async function read() {
    const response = await fetch(URLApi);
    const data = await response.json();
    return data;
  
}