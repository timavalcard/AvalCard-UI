export default function TitleWithBorder({children}) {
    return (
        <div className="mb-6">
            <div className="flex justify-between items-center font-black text-[#202020] text-lg pb-4">
                {children}
            </div>
            <svg className="w-full" height="2" viewBox="0 0 660 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="659.25" y1="0.75" x2="0.75" y2="0.75" stroke="#EAEAEA" stroke-width="1.5" stroke-linecap="round" stroke-dasharray="5 5" />
            </svg>
        </div>
    );
}