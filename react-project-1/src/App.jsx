import { useState } from "react";
import { Header, Footer, Counter } from "./components";

export default function App() {
  const [name, setName] = useState("Jose Lavado");
  //puedo agregar mas funciones
  const changeName = () => {
    const newName = prompt("Ingrese un nuevo nombre");
    setName(newName);
  };

  return (
    <>
      <Header />
      <h1 className="bg-custom-color">Mi primer componente {name} </h1>
      <button onClick={changeName} className="text-custom-color">
        Cambiar nombre
      </button>
      <hr />
      <Counter />
      <Footer></Footer>
    </>
  );
}
