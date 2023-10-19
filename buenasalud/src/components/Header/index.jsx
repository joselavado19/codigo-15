import {  MagnifyingGlassIcon } from '@heroicons/react/24/solid';

export default function Header() {
  return (
    <>
      <header className="flex flex-col md:flex-row items-center justify-between gap-4">
        <h1 className="text-xl md:text-3xl font-bold">
          {" "}
          Buenos dias <span className="text-primary-900">Jose Lavado</span>{" "}
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
