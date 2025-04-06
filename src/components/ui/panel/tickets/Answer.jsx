const classesCommon = 'max-w-[29.85rem] w-full rounded-2xl p-6 font-medium'

export function User({ msg, date }) {
    return (
        <div className={`ml-auto bg-[#E3E9FF] ${classesCommon}`}>
            <p className="text-sm leading-7">
                {msg}
            </p>
            <div className="text-xxs opacity-7 mt-1 text-left">
                {date}
            </div>
        </div>
    );
}
export function Admin({ msg, date, name }) {
    return (
        <div className={`mr-auto bg-[#E3F4FF] ${classesCommon}`}>
            <div className="font-bold text-lg mb-2">
                {name}
            </div>
            <p className="text-sm leading-7">
                {msg}
            </p>
            <div className="text-xxs opacity-7 mt-1 text-left">
                {date}
            </div>
        </div>
    );
}