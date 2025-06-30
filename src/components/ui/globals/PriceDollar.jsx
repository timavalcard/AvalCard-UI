export default function PriceDollar({dollar,currency="دلار"}){
    const formattedCurrency = currency?.replaceAll("_", " ");
    return(
        <div className="border-2 border-[#F0F0F0] p-6 text-sm text-blue-custom font-black flex justify-between rounded-2xl">
            <div>
            قیمت کنونی {formattedCurrency}:
            </div>
            <div>
                {dollar}
            </div>
        </div>
    );
}