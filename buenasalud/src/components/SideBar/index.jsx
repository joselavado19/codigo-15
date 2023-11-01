import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectorUser } from "../../selectors/userSelector";
import { logout } from "../../slices/userSlice"
import { XCircleIcon, QueueListIcon } from "@heroicons/react/24/solid";

import { ToLink } from "../../components";

export default function SideBar() {

  const user = useSelector(selectorUser);
  const dispatch = useDispatch()

  if (!user) return <Navigate to="/" />;


  const [showMenu, setShowMenu] = useState(false);

  const handleLogout = () => {
    dispatch(logout())
  }

  return (
    <>
      <div
        className={`bg-terciary-300 h-full fixed lg:static w-[80%] md:w-[40%] lg:w-full z-50 transition-all duration-300
                 ${showMenu ? "left-0" : "-left-full"} `}
      >

        <div className="flex flex-col items-center justify-center p-8 gap-2 h-[30vh]">
          <img
            className="w-65 h-18 object-cover "
            src="/logo.png"
            alt="Logo Buena Salud"
          />
          <h1 className="text-xl font-bold text-primary-900" > {user.data.nombre_usuario}</h1>
          <p className="bg-terciary-900 py-1 px-3 rounded-full text-white">
            <button type="button" className="btn btn-outline-primary" onClick={handleLogout}>Cerrar Session</button>
          </p>

        </div>


        <div
          className="bg-primary-300 p-8 rounded-tr-[100px] h-[70vh] 
            flex flex-col justify-between gap-8"
        >
          <nav className="flex flex-col gap-8">
            <ToLink to="/" label="Home" />
            <ToLink to="/graficos" label="Indicadores" />
            <ToLink to="/" label="Graficos" />
            <ToLink to="/" label="Resultados KPI" />
          </nav>
          <div className="bg-terciary-900 text-white p-4 rounded-xl">
            <p className="text-gray-400">Problemas</p>
            <p>Contactanos</p>
          </div>
        </div>
      </div>

      <button
        onClick={() => setShowMenu(!showMenu)}
        className="lg:hidden fixed right-4 bottom-4 text-2xl bg-primary-900 p-2.5 rounded-full text-white z-50"
      >
        {showMenu ? <XCircleIcon className="h-6 w-6" /> : <QueueListIcon className="h-6 w-6" />}
      </button>
    </>
  );
}
