import Breadcrump from '@/components/layout/Breadcrump';
import ClientContent from './clientContent'
import {fetchProduct} from "../../../../helpers/api/product";
import { notFound } from 'next/navigation'

export const metadata = {
    title: 'پرداخت در وب سایت های خارجی'
}



export default async function Page({ params }) {
    const { id } = params;
    const {product,related_products} = await fetchProduct(id);
    if (!product) {
        notFound();
    }

    const breadcrump = [{
        title: 'پرداخت در وب سایت های خارجی',
        href: '/panel/foreign-payment'
    },

        {
            title: product.title,
            href: product.url
        }

    ]
    return (
        <>
            <Breadcrump items={breadcrump} />
            <div className=" pt-6 grid md:grid-cols-3 items-start grid-cols-1 gap-8">

                <div className='md:col-span-3 text-lg font-semibold'>
                    {product.title}
                </div>

                <div className='space-y-4'>
                    <div className='rounded-xl'>
                        <img
                            src={product.media?.url}
                            className='w-full rounded-lg'
                        />
                    </div>

                    <div className='font-medium text-lg'>
                        نکات قبل از خرید:
                    </div>

                    <div className='border p-3 rounded-xl text-xs space-y-5' dangerouslySetInnerHTML={{__html:product.excerpt}}></div>

                    <div className='font-medium text-lg mt-5'>
                        توضیحات
                    </div>

                    <div className='border p-3 rounded-xl text-xs space-y-5' dangerouslySetInnerHTML={{__html:product.content}}></div>

                </div>

                <ClientContent product={product} />

            </div>
        </>
    );
}