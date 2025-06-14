export default function DateArticle({children}){
    return(
        <div className="bg-white rounded-full h-5 flex items-center pt-0.5 justify-center px-3 absolute left-2.5 top-3 text-xs font-medium text-[#202020]">
            {children}
        </div>
    );
}