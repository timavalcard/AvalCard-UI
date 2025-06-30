

import { fetchSearch } from "@/helpers/api/search";
import SearchContent from "@/components/ui/SearchContent";

export const metadata = {
    title: 'جستجو در اول کارت'
};

export default async function Home({ searchParams }) {
    const q = searchParams.q;
    const data = await fetchSearch(q);

    return <SearchContent q={q} data={data} />;
}
