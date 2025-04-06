export default function Section({className, children, p='p-6'}){
    return(
        <div className={`rounded-5xl bg-white ${p} ${className}`}>
            {children}
        </div>
    );
}