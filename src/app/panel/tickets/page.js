
import Content from "@/components/ui/panel/tickets/Content";
import Empty from "@/components/ui/panel/tickets/Empty";
import { fetchGetTicketDetail } from "../../../helpers/api/getTickets";

export const metadata = {
    title: 'تیکت ها'
}

export default async function Page() {
    // فراخوانی API در سمت سرور
    const tickets = await fetchGetTicketDetail();

    const isEmpty = !tickets || tickets.length === 0;

    return (
        <div>
            {isEmpty ? <Empty /> : <Content tickets={tickets} />}
        </div>
    );
}
