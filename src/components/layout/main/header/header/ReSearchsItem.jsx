import Link from "next/link"
export default function ReSearchsItem({url,q}) {
    return (
        <div className="bg-[#F0F5FF] rounded-full md:text-base text-sm flex gap-2.5 p-3 md:px-4 px-3 cursor-pointer items-center">
           <a className="flex flex-nowrap " href={url}>
               <div>
                   <svg className="md:size-5 size-4" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                       <path d="M9.58317 17.5C13.9554 17.5 17.4998 13.9556 17.4998 9.58332C17.4998 5.21107 13.9554 1.66666 9.58317 1.66666C5.21092 1.66666 1.6665 5.21107 1.6665 9.58332C1.6665 13.9556 5.21092 17.5 9.58317 17.5Z" stroke="black" stroke-opacity="0.5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                       <path d="M18.3332 18.3333L16.6665 16.6667" stroke="black" stroke-opacity="0.5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                   </svg>
               </div>
               <div className="opacity-50 md:mr-2 mr-1  text-nowrap">{q}</div>
           </a>
        </div>
    );
}