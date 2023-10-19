export default function Title({name, label}){
    return(
        <h2 className="font-semibold text-green-700 my-3" name={name} >
           {label}
        </h2>
    );
}