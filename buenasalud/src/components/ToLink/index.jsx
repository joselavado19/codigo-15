import { Link } from "react-router-dom";
import { HomeIcon } from "@heroicons/react/24/solid";
 
export default function ToLink({to, label}){
    return(
        <>
         <Link
              to={to}
              className="flex items-center gap-4 text-white py-2 px-4 
                rounded-xl hover:bg-primary-900/50 transition-colors"
            >
              <HomeIcon className="h-6 w-6" />
             {label}
            </Link>
        </>
    )
}