import { useState } from "react";
import logo from "../../assets/netflix-logo.png";
import { searchInNetflix } from "../../services";
import { Link, Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setTitles } from "../../slices/netflixSlice";


export default function Layout() {
  const [searchText, setSearchText] = useState("");
  const dispatch = useDispatch();

  const handleKeyUp = async (e) => {
    if (e.key === "Enter" && searchText) {
      const results = await searchInNetflix(searchText);
      dispatch(setTitles(results.titles));
    }
  };
  return (
    <>
      <div className="text-netflix-color-dark py-3 px-20 overflow-hidden">
        <div className="flex justify-between  items-center">
          <Link to="/">
            <img className="w-28 md:w-44 -ml-4" src={logo} alt="" />
          </Link>
          <input
            type="text"
            placeholder="Buscar"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            onKeyUp={handleKeyUp}
            className="py-1 px-2  bg-black/30 border"
          />
        </div>
        <Outlet />
      </div>
    </>
  );
}
