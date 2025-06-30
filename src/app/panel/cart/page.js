
import Content from "@/components/ui/panel/cart/Content";
import Empty from "@/components/ui/panel/cart/Empty";
import {getCart} from "../../../helpers/api/cart/GetCart"
import Breadcrump from "@/components/layout/Breadcrump";
import AuthChecker from "../../../components/layout/auth/authChecker";

export const metadata = {
    title: 'سبد خرید'
}

const breadcrump = [{
    title: 'سبد خرید',
    href: '#'
}]
export const dynamic = "force-dynamic";
export default async function Page() {
    const cart = await getCart();
    const isEmpty = cart?.products.length ? 0 : 1;

    return (
        <div>
            <Breadcrump items={breadcrump} />
            <AuthChecker />
            {isEmpty ? <Empty /> : <Content cart={cart} />}
        </div>
    );
}
