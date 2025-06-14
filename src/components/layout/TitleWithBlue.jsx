export default function TitleWithBlue({children, blue, className}) {
    return (
        <h2 className={`md:text-[1.75rem] text-2xl font-bold text-[#191919] mt-10 mb-3 ${className}`}>
            <strong className="text-blue-custom"> {blue} </strong> {children}
        </h2>
    );
}