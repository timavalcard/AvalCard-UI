import { createPortal } from "react-dom";

export default function Modal({ children, title, show, setShow, close=true, w, className }) {
    return (createPortal(
        <>
            <div className={`fixed -top-full -translate-x-1/2 -translate-y-1/2 left-1/2 border bg-white z-[1001] border-[#D9D9D9] py-7 px-6 rounded-2xl text-[#464646] transition-all duration-300 ${show && 'top-1/2'} ${w}`}>
                <div className="flex justify-between items-center mb-6">
                    <div className="text-xl font-semibold">
                        {title}
                    </div>
                    {
                        close &&

                    <div>
                        <svg className="cursor-pointer" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={() => setShow(false)}>
                            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#959595" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M15 9L9 15" stroke="#959595" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M9 9L15 15" stroke="#959595" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>

                    </div>
                    }
                </div>
                <div className={className}>
                {children}
                </div>
            </div>
            <div className={`fixed h-screen w-screen bg-[#D9D9D9] bg-opacity-50 z-[1000] opacity-0 top-0 left-0 ${show ? '!opacity-100 blur-sm' : 'hidden'}`} onClick={() => setShow(false)} />
        </>
        ,
        document.body
    ))
}