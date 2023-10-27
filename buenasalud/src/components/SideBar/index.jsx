import  { useState } from "react";
import { HomeIcon,  XCircleIcon,QueueListIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

export default function SideBar() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <div
        className={`bg-terciary-300 h-full fixed lg:static w-[80%] md:w-[40%] lg:w-full z-50 transition-all duration-300
                 ${showMenu ? "left-0" : "-left-full"} `}
      >
        {/* perfil */}
        <div className="flex flex-col items-center justify-center p-8 gap-2 h-[30vh]">
          <img
            className="w-65 h-18 object-cover "
            src="./src/assets/image/logo.png"
            alt="Logo Buena Salud"
          />
          <h1 className="text-xl font-bold text-primary-900" >Jose Lavado G</h1>
          <p className="bg-terciary-900 py-1 px-3 rounded-full text-white">
            Perfil de usuario
          </p>
        </div>

        {/*Nav */}
        <div
          className="bg-primary-300 p-8 rounded-tr-[100px] h-[70vh] 
            flex flex-col justify-between gap-8"
        >
          <nav className="flex flex-col gap-8">
            <Link
              to="/"
              className="flex items-center gap-4 text-white py-2 px-4 
                rounded-xl hover:bg-primary-900/50 transition-colors"
            >
               <HomeIcon className="h-6 w-6" />
              Home
            </Link>

            <Link
               to="/graficos"
              className="flex items-center gap-4 text-white py-2 px-4 
                rounded-xl hover:bg-primary-900/50 transition-colors"
            >
              <HomeIcon className="h-6 w-6" />
              Indicadores
            </Link>

            <Link
              to="/"
              className="flex items-center gap-4 text-white py-2 px-4 
                rounded-xl hover:bg-primary-900/50 transition-colors"
            >
              <HomeIcon className="h-6 w-6" />
              Graficos
            </Link>

            <Link
              to="/"
              className="flex items-center gap-4 text-white py-2 px-4 
                rounded-xl hover:bg-primary-900/50 transition-colors"
            >
              <HomeIcon className="h-6 w-6" />
              Resultados KPI
            </Link>
          </nav>
          <div className="bg-terciary-900 text-white p-4 rounded-xl">
            <p className="text-gray-400">Problemas</p>
            <a href="#">Contactanos</a>
          </div>
        </div>
      </div>
      {/*button mobile */}
      <button
        onClick={() => setShowMenu(!showMenu)}
        className="lg:hidden fixed right-4 bottom-4 text-2xl bg-primary-900 p-2.5 rounded-full text-white z-50"
      >
        {showMenu ? <XCircleIcon className="h-6 w-6" /> : <QueueListIcon className="h-6 w-6" />}
      </button>
    </>
  );
}
