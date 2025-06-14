
export default function FeedBack({ text}) {
    return (
        <div className="mt-4 rounded-2xl bg-green-100 border border-green-400 text-green-800 px-6 py-4 text-sm shadow-md transition-opacity duration-500">
            <p className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                {text}
            </p>
        </div>
    );
}