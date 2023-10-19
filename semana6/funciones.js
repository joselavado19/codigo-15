//bloque de codigo que ejecuta algo
/*Recomendaciones 
El nombe de la funcion sea un verbo infinitivo (ar, er,...)
*/
function calcular(n1, n2, operador) {
  if (operador === "+") {
    return n1 + n2;
  } else if (operador === "-") {
    return n1 - n2;
  } else if (operador === "*") {
    return n1 * n2;
  } else if (operador === "/") {
    if (n2 !== 0) {
      return n1 / n2;
    } else {
      return "No es posible dividir entre 0";
    }
  } else {
    return "Operador no identificado";
  }
}

function calcular2(n1, n2, operador) {
  if (operador === "+") return n1 + n2;
  if (operador === "-") return n1 - n2;
  if (operador === "*") return n1 * n2;
  if (operador === "/") {
    if (n2 === 0) return "No es posible dividir entre 0";
    return n1 / n2;
  }
  return "Operador no identificado";
}

//siempre se debe llamar  a la funcion
console.log(calcular2(23, 0, "/"));

function calcular3(n1, n2, operador) {
  if (n2 === 0 && operador === "/") return "No es posible la division";
  const operaciones = {
    "+": n1 + n2,
    "-": n1 - n2,
    "*": n1 * n2,
    "/": n1 / n2,
  };
  //nullish coalescing operator
  return operaciones[operador] ?? "Operacion no valida";
}

console.log(calcular3(24, 12, "*"));

function calcular4(n1, n2, operador) {
  try {
    return eval(`${n1}${operador}${n2}`) === Infinity
      ? "Operacion No valida"
      : eval(`${n1}${operador}${n2}`);
  } catch (err) {
    return err;
  }
}

function calcular5(n1, n2, operador) {
    try {
        const res = eval(`${n1}${operador}${n2}`);
        return isFinite(res) ? res : "Operacion No valida";
      } catch (err) {
        return err;
      }
  }
