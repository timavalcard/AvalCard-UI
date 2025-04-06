export default function Section({ icon, text, className }) {
    return (
        <div className={`${className} grid gap-3 h-[120px] items-center text-center justify-center rounded-[20px] cursor-pointer`}>
            <div className="text-center">

                <div>
                    {icon}
                </div>
                <div className="font-bold mt-2">
                    {text}
                </div>
            </div>
        </div>
    );
}