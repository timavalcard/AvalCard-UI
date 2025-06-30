const classesCommon = 'max-w-[29.85rem] w-full rounded-2xl p-6 font-medium'

export function User({ msg, date, media }) {
    return (
        <div className={`ml-auto bg-[#E3E9FF] ${classesCommon} p-4 rounded-2xl shadow-md max-w-xs`}>
            <p className="text-sm leading-7 text-gray-800 mb-2">
                {msg}
            </p>

            {media?.url && (
                <a
                    href={media.url}
                    download
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block mb-2 rounded-xl overflow-hidden border border-indigo-300 hover:shadow-lg transition-shadow"
                >
                    <img
                        src={media.url}
                        alt="attachment"
                        className="w-full h-auto object-cover"
                    />
                    <div className="text-center text-xs text-indigo-700 p-1 bg-indigo-50">برای دانلود کلیک کنید</div>
                </a>
            )}

            <div className="text-xxs opacity-70 mt-1 text-left text-gray-600">
                {date}
            </div>
        </div>
    );
}

export function Admin({ msg, date, name, media }) {
    return (
        <div className={`mr-auto bg-[#E3F4FF] ${classesCommon} p-4 rounded-2xl shadow-md max-w-xs`}>
            <div className="font-bold text-lg mb-2 text-blue-900">
                {name}
            </div>
            <p className="text-sm leading-7 text-gray-800 mb-2">
                {msg}
            </p>

            {media?.url && (
                <a
                    href={media.url}
                    download
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block mb-2 rounded-xl overflow-hidden border border-blue-300 hover:shadow-lg transition-shadow"
                >
                    <img
                        src={media.url}
                        alt="attachment"
                        className="w-full h-auto object-cover"
                    />
                    <div className="text-center text-xs text-blue-700 p-1 bg-blue-50">برای دانلود کلیک کنید</div>
                </a>
            )}

            <div className="text-xxs opacity-70 mt-1 text-left text-gray-600">
                {date}
            </div>
        </div>
    );
}
