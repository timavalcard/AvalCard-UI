import Button from "../../globals/Button";

const formatPrice = (price) => price.toLocaleString() + " تومان";

const ItemSummary = ({ title, price }) => (
    <div className="flex justify-between items-center">
        <div className="text-xs font-medium">{title}</div>
        <div className="text-sm font-bold">{formatPrice(price)}</div>
    </div>
);

export default function Total({ items }) {

    const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

    const totalOriginal = items.reduce(
        (sum, item) => sum + item.originalPrice * item.quantity,
        0
    );

    const totalDiscounted = items.reduce(
        (sum, item) => sum + item.discountedPrice * item.quantity,
        0
    );

    const totalDiscount = totalOriginal - totalDiscounted;

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
                        <ItemSummary title={`مبلغ کل ( ${totalItems} کالا )`} price={totalOriginal} />
                        <ItemSummary title="سود شما از خرید" price={totalDiscount} />
                    </div>
                </div>

                <div className="py-5 px-6 bg-blue-custom bg-opacity-10 text-sm flex font-bold justify-between text-blue-custom items-center">
                    <div>مبلغ قابل پرداخت</div>
                    <div className="text-lg">{formatPrice(totalDiscounted)}</div>
                </div>
            </div>
            <Button flex size="full" gradient={'blue'} className={'!rounded-xl !h-[3.3rem] mt-4'}>
                ادامه فرایند خرید
            </Button>
            <div className="text-xs  leading-5 mt-2.5">
            کارمزد و ارزش افزوده محاسبه شده و این مبلغ نهایی است که شما پرداخت می‌کنید.
            </div>
        </>
    );
}
