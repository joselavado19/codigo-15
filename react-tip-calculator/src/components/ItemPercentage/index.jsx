export default function ItemPercentage({value, isActive, onClick}){
    const bg= isActive ? "bg-green-200" : "bg-primary";

    return (
        <div 
        onClick={() => onClick(value)}
        className={`${bg} cursor-pointer text-white font-semibold text-xl rounded-md p-3 text-center`}>
        <span>{value}</span>
        </div>
    );
}