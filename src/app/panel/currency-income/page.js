import Breadcrump from '@/components/layout/Breadcrump';
import ClientContent from './clientContent'

export const metadata = {
    title: 'نقد کردن درآمد ارزی'
}

const breadcrump = [{
    title: 'نقد کردن درآمد ارزی',
    href: '#'
}]

export default function Page() {
    return (
        <>
        <Breadcrump items={breadcrump} />
        <div className=" pt-6 grid md:grid-cols-3 grid-cols-1 gap-8">

            <div className='md:col-span-3 text-lg font-semibold'>
                نقد کردن درآمد ارزی
            </div>

            <div className='space-y-4'>
                <div className='border p-2 rounded-xl'>
                    <img
                        src='/images/currency-income.webp'
                        className='w-full'
                    />
                </div>

                <div className='font-medium text-lg'>
                    نکات و شرایط:
                </div>

                <div className='border p-3 rounded-xl text-xs space-y-5'>
                    <p>
                        کاربر گرامی جهت نقد کردن درامد ارزی خود به این نکات توجه فرمایید:
                    </p>
                    <p>
                        در صورتی که قبلا برای شما اطلاعات حساب مجموعه جهت واریز درامدتان ارسال شده با توجه به حساسیت حساب ها لطفا برای هر بار انتقال مجدد استعلام بگیرید و به این نکته توجه کنید که اطلاعات اکانت ارسالی تا سه روز پس از ارسال معتبر است و در صورت واریز بدون هماهنگی امکان تسویه ریالی با شما وجود ندارد.
                    </p>
                    <p>
                        تسویه ریالی ۱ الی 2 روز کاری پس از اینکه مبلغ وارد حساب مجموعه شد انجام میشود و با نرخ همان روز محاسبه خواهد شد، لازم به ذکر است ملاک تاریخی هست که مبلغ به حساب مجموعه کامل واریز شده است.
                    </p>
                    <p>
                        با توجه به تعداد درخواست های بالای این بخش، جهت بررسی ارسال رسید واریز معتبر توسط شما ضروری می باشد.
                    </p>
                </div>
            </div>

            <ClientContent />

        </div>
        </>
    );
}