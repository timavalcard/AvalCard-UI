export default function Overlay({setClose, className}){
    return(
        <div className={`h-full w-full fixed left-0 top-0 bg-black bg-opacity-40 FadeInAnimate z-40 ${className}`} onClick={() => setClose(pre => !pre)}>

        </div>
    );
}