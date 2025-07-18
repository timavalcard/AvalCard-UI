export default function IconButton({children, border=false, type="button", className, ...rest}) {
    return(
        <button className={`w-12 min-w-12 h-[3.125rem] flex items-center justify-center text-center hover:border-blue-custom transition-all duration-300 rounded-lg ${border && 'border'} ${className}`} type={type} {...rest}>
            {children}
        </button>
    );
}