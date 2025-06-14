import Button from "../../globals/Button";

const formatPrice = (price) => price;

const ItemSummary = ({ title, price }) => (
    <div className="flex justify-between items-center">
        <div className="text-xs font-medium">{title}</div>
        <div className="text-sm font-bold">{formatPrice(price)}</div>
    </div>
);

export default function Total({ items,fees,ten_percent,price_without_fee,coupon_amount,cart_full_price ,totalPrice,cart_products_offer_price, next,total, discountedCode=0 }) {

    return (
        <>
            <div className="border border-[#F0F0F0] rounded-xl overflow-hidden">
                <div className="py-5 px-6">
                    <div className="text-center text-lg font-black">جمع خرید شما</div>

                    <div className="mt-2.5">
                        <svg
                            className="w-full"
                            height="2"
                            viewBox="0 0 260 2"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <line
                                x1="259.25"
                                y1="0.75"
                                x2="0.75"
                                y2="0.75"
                                stroke="#EAEAEA"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeDasharray="5 5"
                            />
                        </svg>
                    </div>

                    <div className="space-y-4 mt-5">
                        <ItemSummary title={`مبلغ کل ( ${total}  عدد ) `} price={price_without_fee} />
                        {/*<ItemSummary title={`کارمزد`} price={fees} />
                        <ItemSummary title={`مالیات و ارزش افزوده`} price={ten_percent} />*/}
                        {coupon_amount != 0 && <ItemSummary title={`کد تخفیف`} price={coupon_amount} />}
                        {cart_products_offer_price && cart_products_offer_price != 0 && cart_products_offer_price != "0 تومان" && <ItemSummary title="سود شما از خرید" price={cart_products_offer_price} />}
                        {/*{fees && fees != 0 && fees != "0 تومان" && <ItemSummary title="کارمزد سفارش" price={fees} />}*/}
                    </div>
                </div>

                <div className="py-5 px-6 bg-blue-custom bg-opacity-10 text-sm flex font-bold justify-between text-blue-custom items-center">
                    <div>مبلغ قابل پرداخت</div>
                    <div className="text-lg">{totalPrice}</div>
                </div>
            </div>
            <Button flex size="full" gradient={'blue'} className={'!rounded-xl !h-[3.3rem] mt-4'} onClick={next}>
                ادامه فرایند خرید
            </Button>
            <div className="text-xs  leading-5 mt-2.5">
            کارمزد و ارزش افزوده محاسبه شده و این مبلغ نهایی است که شما پرداخت می‌کنید.
            </div>
        </>
    );
}
