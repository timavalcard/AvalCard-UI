
import Breadcrump from "@/components/layout/Breadcrump";
import { fetchCategoriesWithProducts } from "../../../helpers/api/categories-with-products";
import ClientContent from "./ClientContent";

export const metadata = {
  title: 'خرید کالا و تحویل در ایران'
}

const breadcrump = [{
  title: 'خرید کالا و تحویل در ایران',
  href: '#'
}]

export default async function Home() {
  const categories = await fetchCategoriesWithProducts("buy_product");
  return (
    <>
      <Breadcrump items={breadcrump} />
      <ClientContent categories={categories} />

    </>
  );
}
