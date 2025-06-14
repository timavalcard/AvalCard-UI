
import Breadcrump from "@/components/layout/Breadcrump";
import { fetchCategoriesWithProducts } from "../../../helpers/api/categories-with-products";
import ClientContent from "./ClientContent";

export const metadata = {
  title: 'گیفت کارت ها'
}

const breadcrump = [{
  title: 'گیفت کارت ها',
  href: '#'
}]

export default async function Home() {
  const categories = await fetchCategoriesWithProducts("gift_cart");
  return (
    <>
<Breadcrump items={breadcrump} />
      <ClientContent categories={categories} />

    </>
  );
}
