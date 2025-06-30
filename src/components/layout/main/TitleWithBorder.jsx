'use client';
export default function TitleWithBorder({ children, className, contentClassName }) {
    return (
        <div className={`mb-6 text-[#202020] lg:text-2xl flex-1 font-bold flex items-center gap-1.5 ${className}`}>
            <div className={`text-nowrap ${contentClassName}`}>
                {children}
            </div>
            <div className="w-full">
                <svg className="w-full pr-3" preserveAspectRatio="none" height="4" viewBox="0 0 1061 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line x1="0.751412" y1="1.25142" x2="1060.25" y2="3.2485" stroke="#EAEAEA" stroke-width="1.5" stroke-linecap="round" stroke-dasharray="5 5" /> 
                </svg>
            </div>
        </div>
    );
}