
import Content from "@/components/ui/panel/cart/Content";
import Empty from "@/components/ui/panel/cart/Empty";

export const metadata = {
    title: 'سبد خرید'
}

export default async function Page() {

    const isEmpty = 0;

    return (
        <div>
            {isEmpty ? <Empty /> : <Content />}
        </div>
    );
}
