
import Breadcrump from "@/components/layout/Breadcrump";
import { fetchCategoriesWithProducts } from "../../../helpers/api/categories-with-products";
import ClientContent from "./ClientContent";

export const metadata = {
  title: 'پرداخت در  سایت های خارجی'
}

const breadcrump = [{
  title: 'پرداخت در  سایت های خارجی',
  href: '#'
}]

export default async function Home() {
  const categories = await fetchCategoriesWithProducts("inter_payment");
  return (
    <>
      <Breadcrump items={breadcrump} />
      <ClientContent categories={categories} />

    </>
  );
}
