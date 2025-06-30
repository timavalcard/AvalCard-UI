
import Input from "@/components/ui/globals/Input";
import Cart from "@/components/ui/panel/giftCards/Cart";
import Img from "@/components/ui/panel/giftCards/Img";
import { fetchProduct } from "../../../../helpers/api/product";
import ProductDetail from "./ProductDetail";
import { notFound } from 'next/navigation'
import Breadcrump from "@/components/layout/Breadcrump";

export const metadata = {
    title: 'جزئیات گیفت کارت'
};


export default async function Page({ params }) {
    const { id } = params;
    const {product,related_products} = await fetchProduct(id);
    if (!product) {
        notFound();
    }

    const breadcrump = [
        {
            title: 'گیفت کارت ها',
            href: '/panel/gift-cards'
        },
        {
            title: product.title,
            href: product.url
        }]

    return (
        <>
            <Breadcrump items={breadcrump} />
            <ProductDetail product={product} />
        </>
    );
}

