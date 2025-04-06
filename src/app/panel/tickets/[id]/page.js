import { Admin, User } from "@/components/ui/panel/tickets/Answer";
import AskedQuestionsBox from "@/components/ui/panel/tickets/AskedQuestionsBox";
import Chat from "@/components/ui/panel/tickets/Chat";
import DetailsTicketBox from "@/components/ui/panel/tickets/DetailsTicketBox";
import SendAnswer from "@/components/ui/panel/tickets/SendAnswer";
import {fetchGetTicketDetail} from "../../../../helpers/api/getTicketDetail";

export const metadata = {
    title: 'جزئیات تیکت'
}

export default async function Page({ params }) {
    const { id } = params;
    const ticket = await fetchGetTicketDetail(id);
    return (
        <div className="mt-custom-4">
            <div className="flex gap-2 items-center text-blue-custom text-sm font-bold">
                <div>
                    <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_530_1710)">
                            <path d="M2.90625 4.44629H7.93905M5.42265 1.94629V6.94629M12.1331 18.4633V12.7796H17.854M11.2943 1.94629H16.3271C17.2536 1.94629 18.0047 2.69248 18.0047 3.61296V12.0893C18.0047 12.5313 17.8279 12.9552 17.5133 13.2678L12.6244 18.1248C12.3098 18.4374 11.8831 18.613 11.4382 18.613H4.58385C3.65734 18.613 2.90625 17.8668 2.90625 16.9463V10.2796" stroke="#3664FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </g>
                        <defs>
                            <clipPath id="clip0_530_1710">
                                <rect width="20.1312" height="20" fill="white" transform="translate(0.389648 0.279541)" />
                            </clipPath>
                        </defs>
                    </svg>
                </div>
                <div>
                    تیکت #{ticket.id}
                </div>
            </div>

            <div className="grid grid-cols-12 gap-8">
                <div className="col-span-9">
                    <div className="grid gap-7">
                        <Chat messages={ticket.messages} />
                    </div>
                </div>
                <div className="col-span-3 space-y-5">
                    <AskedQuestionsBox /> 

                    <DetailsTicketBox ticket={ticket} />
                </div>
            </div>

            <SendAnswer ticketId={id} />
        </div>
    );
}