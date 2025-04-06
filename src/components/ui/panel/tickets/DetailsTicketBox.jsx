const Item = ({ children }) => {
    return (
        <div className="flex justify-between items-center">
            {children}
        </div>
    );
}

const Answer = ({ children }) => {
    return (
        <div className="opacity-70 text-black text-xxs text-left">
            {children}
        </div>
    );
}

export default function DetailsTicketBox({ticket}) {
    return (
        <div className="border rounded-2xl border-[#1A2531] border-opacity-15 px-3 py-4">
            <div className="text-blue-custom text-sm font-bold text-center">
                جزئیات تیکت
            </div>
            <div className="space-y-3.5 mt-6 text-xs font-medium text-[#464646]">
                <Item>
                    <div>
                        تاریخ ایجاد تیکت
                    </div>
                    <Answer>
                        {ticket.created_at}
                    </Answer>
                </Item>
                <Item>
                    <div>
                        تاریخ آخرین پاسخ
                    </div>
                    <Answer>
                        {ticket.updated_at}
                    </Answer>
                </Item>
                <Item>
                    <div>
                    وضعیت تیکت
                    </div>
                    <Answer>
                        {ticket.status}
                    </Answer>
                </Item>
                <Item>
                    <div>
                    دپارتمان
                    </div>
                    <Answer>
                        {ticket.department}
                    </Answer>
                </Item>
            </div>
        </div>
    );
}