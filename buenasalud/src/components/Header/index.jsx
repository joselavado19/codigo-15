import { useSelector } from "react-redux";
import { selectorUser } from "../../selectors/userSelector";
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';

export default function Header() {

  const user = useSelector(selectorUser);

  if (!user) return <Navigate to="/" />;


  return (
    <>
      <header className="flex flex-col md:flex-row items-center justify-between gap-4">
        <h1 className="text-xl md:text-3xl font-bold">

          Bienvenido: <span className="text-primary-900">{user.data.nombre_usuario}</span>
        </h1>
        <form className="w-full md:w-auto">
          <div className="relative">
            <MagnifyingGlassIcon className="h-6 w-6 absolute top-1/2 -translate-y-1/2 left-2" />


            <input
              type="text"
              className="bg-gray-200 outline-none py-2 pl-8 pr-4 rounded-xl w-full md:w-auto"
              placeholder="Buscar..."
            />
          </div>
        </form>
      </header>
    </>
  );
}
