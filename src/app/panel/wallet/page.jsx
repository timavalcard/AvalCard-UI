import Breadcrump from "@/components/layout/Breadcrump";
import Label from "@/components/ui/globals/labelStatus/Label";
import Table from "@/components/ui/panel/Table";
import WalletTopUpForm from "@/components/ui/panel/WalletTopUpForm";
import getWalletTransactions from "../../../helpers/api/getWalletTransactions";

export const metadata = {
    title: 'کیف پول'
}

const breadcrump = [{
    title: 'کیف پول',
    href: '#'
  }]

export default async function Page() {
    const transactions= await getWalletTransactions()
    return (
        <>
        <Breadcrump items={breadcrump} />
        <div className="grid md:grid-cols-12 grid-cols-1 gap-6 pt-5">
            <div className="md:col-span-8 section md:order-1 order-2">
                <div className="huge-text-little-bold">
                تاریخچه تراکنش کیف پول
                </div>
                <Table>
                    <thead className="">
                        <tr>
                            <th>ردیف</th>
                            <th>تاریخ تراکنش</th>
                            <th>مبلغ تراکنش</th>
                            <th> وضعیت پرداخت</th>
                        </tr>
                    </thead>
                    <tbody>
                    {transactions && transactions.length > 0 && transactions.map((item,index)=>(
                        <tr>
                            <td>
                                {index + 1}
                            </td>
                            <td>
                                {item.created_at}
                            </td>
                            <td>
                                {item.price}
                            </td>
                            <td>
                                <Label status={item.status} />
                            </td>
                        </tr>
                    ))}


                    </tbody>
                </Table>
            </div>
            <div className="md:col-span-4 md:order-2 order-1">
                <WalletTopUpForm />
            </div>
        </div>
        </>
    );
}