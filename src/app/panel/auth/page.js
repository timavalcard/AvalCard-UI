import Breadcrump from "@/components/layout/Breadcrump";
import ClientContent from "./ClientContent";

export const metadata = {
    title: 'احراز هویت'
};

const breadcrump = [{
    title: 'احراز هویت',
    href: '#'
}];

export default async function Page() {


    return (
        <>
            <Breadcrump items={breadcrump} />
            <ClientContent  />
        </>
    );
}
