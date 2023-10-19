import { useSelector} from "react-redux"; //permite acceder a las variables globales
import { Link } from "react-router-dom";

export default function Home(){
      const titles = useSelector((state)=> state.info.titles);

      return (
        <>
          <div className="grid grid-cols-2 gap-x-2 gap-y-10 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
          {titles.length > 0 &&
            titles.map((title) => (
              <Link key={title.jawSummary.id }
               to={`/detalle/${title.jawSummary.id}`} >
              <div >
               <img  
               className="rounded-sm hover:scale-150 transition-all cursor-pointer" 
               src={title.jawSummary.backgroundImage.url} alt="" />
              </div>
              </Link>
            ))}
            </div>
       
        </>
    );
}