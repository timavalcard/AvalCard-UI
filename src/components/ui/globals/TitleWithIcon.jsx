import More2 from "./More2";

export default function TitleWithIcon({ title, more = false, moreHref = '/', iconColor = "#3F5AEF", className, center }) {
    return (
        <div className={`flex ${center ? 'justify-center' : 'justify-between'} items-center ${className}`}>
            <div className="flex gap-4 items-start">
                <div>
                    <svg width="8" height="34" viewBox="0 0 8 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 8C0 3.58172 3.58172 0 8 0V26C8 30.4183 4.41828 34 0 34V8Z" fill={iconColor} />
                    </svg>
                </div>

                <div className="font-bold text-2xl">
                    {title}
                </div>
            </div>
                
            {
                more &&
                <div className="md:block hidden">
                <More2 href={moreHref} />
                    </div>
            }
        </div>
    );
}