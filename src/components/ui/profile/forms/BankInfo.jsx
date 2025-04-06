import BankCard from "../../globals/BankCard";
import Button from "../../globals/Button";

export default function BankInfo() {
    return (
        <div className="mt-custom-4 section !pb-10">
            <div className=" huge-text-little-bold flex justify-between items-center">
                <div>
                    حساب های بانکی
                </div>
                <div>
                    <Button className={'!text-xs !h-[2.75rem]'} size="auto">
                        افزودن کارت
                    </Button>
                </div>
            </div>

            <div className="grid md:grid-cols-2 grid-cols-1 gap-8">
            <div>
                <BankCard
                    title="کارت بانکی"
                    name="بانک صادرات"
                    img='/images/saderat.png'
                    number="6037  69**  ****  8326"
                />
            </div>
            
            <div>
                <BankCard
                    title="شماره شبا"
                    name="بانک صادرات"
                    img='/images/saderat.png'
                    number="IR 13090  *****  80056"
                />
            </div>

            </div>

        </div>
    );
}