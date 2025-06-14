export default function OrderType({ order_type }) {

    const getStatusClasses = (order_type) => {
        switch (order_type) {
            case "gift_cart":
                return (
                    <div className="flex items-center justify-center gap-1 ">
                        <div>
                            گیفت کارت
                        </div>
                    </div>
                );
            case "buy_product":
                return (
                    <div className="flex items-center justify-center gap-1 ">
                        <div>
                            خرید کالا و تحویل در ایران
                        </div>
                    </div>
                );
            case "inter_payment":
                return (
                    <div className="flex items-center justify-center gap-1 ">
                        <div>
                            پرداخت سایت خارجی
                        </div>
                    </div>
                );
            case "currency_income":
                return (
                    <div className="flex items-center justify-center gap-1 ">
                        <div>
                           نقد کردن درامد
                        </div>
                    </div>
                );
            default:
                return (
                    <div className="flex items-center justify-center gap-1 text-[#89D64F]">
                        <div>
                            ---
                        </div>
                    </div>
                );
        }
    };


    return getStatusClasses(order_type);
}