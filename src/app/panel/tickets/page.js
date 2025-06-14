
import Content from "@/components/ui/panel/tickets/Content";
import Empty from "@/components/ui/panel/tickets/Empty";
import { fetchGetTicketDetail } from "../../../helpers/api/getTickets";
import Breadcrump from "@/components/layout/Breadcrump";

export const metadata = {
    title: 'تیکت ها'
}

const breadcrump = [{
    title: 'تیکت ها',
    href: '#'
  }]

export default async function Page() {
    // فراخوانی API در سمت سرور
    const tickets = await fetchGetTicketDetail();

    const isEmpty = !tickets || tickets.length === 0;

    return (
        <div>
            <Breadcrump items={breadcrump} />
            {isEmpty ? <Empty /> : <Content tickets={tickets} />}
        </div>
    );
}
