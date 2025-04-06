import Input from "@/components/ui/globals/Input";
import Cart from "@/components/ui/panel/giftCards/Cart";
import Img from "@/components/ui/panel/giftCards/Img";


export const metadata = {
    title: 'جزئیات گیفت کارت'
}

const Item = ({ title, children }) => {
    return (
        <div className="mt-custom-3">
            <div className="text-lg font-medium mb-1.5">
                {title}
            </div>
            <div className="rounded-xl border border-[#F0F0F0] py-3 px-4 opacity-70 text-sm">
                {children}
            </div>
        </div>
    );
}

export default function Page() {
    return (
        <div className="mt-custom-4">
            <div className="text-lg font-semibold">
                گیفت کارت اپل
            </div>

            <div className="grid grid-cols-12 gap-8">
                <div className="col-span-8">
                    <div className="grid grid-cols-12 mt-7 gap-6">
                        <div className="col-span-8">
                            <Img src="/images/twitchBig.svg" />
                        </div>
                        <div className="grid gap-10 col-span-4">
                            <Input
                                isSelect
                                placeholder="ریجن کارت را انتخاب کنید"
                            >
                                <option>
                                    آمریکا
                                </option>
                                <option>
                                    آلمان
                                </option>
                                <option>
                                    هلند
                                </option>
                            </Input>
                            <Input
                                isSelect
                                placeholder="قیمت گیفت کارت را انتخاب کنید"
                            >
                                <option>
                                    1 دلار
                                </option>
                                <option>
                                    2 دلار
                                </option>
                                <option>
                                    3 دلار
                                </option>
                            </Input>
                        </div>
                    </div>

                    <Item title={'نکات قبل از خرید'}>
                        <div>
                            کاربر عزیز دقت فرمایید از آنجایی که گیفت کارت یک محصول مجازی می باشد و در هر لحظه امکان استفاده آن وجود دارد، پس از تحویل کد امکان استرداد و یا تعویض آن وجود ندارد. ریجن گیفت کارت باید با ریجن اکانت شما یکی باشد.
                        </div>
                    </Item>
                    <Item title={'توضیحات'}>
                        <div>
                            توضیحات
                        </div>
                    </Item>
                </div>


                <Cart totalAmount={'۷۲,۰۰۰ تومان'} discount="true" discountPercentage="%۳۸" discountAmount="۱۱۳,۵۰۰" />

            </div>


        </div>
    );
}