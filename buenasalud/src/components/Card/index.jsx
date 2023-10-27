export default function Card({children, className}){
    return(
        <div className={`border bg-white shadow w-[80%] m-auto rounded px-5 py-2 ${className}`}>
            {children}
        </div>
    )

}