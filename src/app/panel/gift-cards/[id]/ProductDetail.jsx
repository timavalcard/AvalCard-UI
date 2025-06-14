"use client";

import Input from "@/components/ui/globals/Input";
import Cart from "@/components/ui/panel/giftCards/Cart";
import Img from "@/components/ui/panel/giftCards/Img";
import { useState, useEffect } from "react";
import {getCurrencies} from "../../../../helpers/api/getCurrencies";

const Item = ({ title, children }) => {
    return (
        <div className="mt-custom-3">
            <div className="text-lg font-medium mb-1.5">{title}</div>
            <div className="rounded-xl border border-[#F0F0F0] py-3 px-4 opacity-70 text-sm">
                {children}
            </div>
        </div>
    );
};

export default function ProductDetail({ product }) {
    const [selections, setSelections] = useState({});
    const [selectedVariation, setSelectedVariation] = useState(null);
    const [selectedValues, setSelectedValues] = useState({});
    const [selectedRegionId, setSelectedRegionId] = useState(null); // اضافه شده برای ریجن
    const [quantity, setQuantity] = useState(1); // اضافه شده برای ریجن
    const [totalAmount, setTotalAmount] = useState(0);
    const [discountPercentage, setDiscountPercentage] = useState('');
    const [discountAmount, setDiscountAmount] = useState(0);
    const [discount, setDiscount] = useState('false');
    const [currencyKey, setCurrencyKey] = useState(null);
    const [selectedExchangeRate, setSelectedExchangeRate] = useState(null);
    const [selectedCurrencyCode, setSelectedCurrencyCode] = useState(null);
    const [feePercent, setFeePercent] = useState(0);
    const [feeAmount, setFeeAmount] = useState(0);
    const [finalRialAmount, setFinalRialAmount] = useState(0);
    const [tenPercentValue, setTenPercentValue] = useState(0);

    const [exchangeRates, setExchangeRates] = useState({
        دلار: 0,
        یورو: 0,
        پوند: 0,
    });

    useEffect(() => {
        const fetchCurrencies = async () => {
            try {
                const rates = await getCurrencies();
                setExchangeRates(rates);
            } catch (error) {
                console.error("خطا در دریافت نرخ ارزها:", error);
            }
        };

        fetchCurrencies();
    }, []);

    const isVariable = product.type === "variable";

    useEffect(() => {
        if (!isVariable) return;

        if (Object.keys(selections).length !== product.table_variations.length) {
            setSelectedVariation(null);
            return;
        }

        const match = product.in_stock_variations.find((variation) =>
            variation.variations.every((v) => {
                const attrName = v.parentName.name;
                const selectedId = selections[attrName];
                const actualId = v["0"].id;
                return selectedId === actualId;
            })
        );

        setSelectedVariation(match || null);
    }, [selections]);

    const parsePrice = (price) => {
        return parseInt(price.replace(/,/g, '').replace(' تومان', ''), 10);
    };

    useEffect(() => {
        let total = isVariable
            ? selectedVariation
                ? `${selectedVariation.offer_price || selectedVariation.price}`
                : "لطفا انتخاب کنید"
            : `${product.offer_price || product.regular_price}`;

        if (total !== "لطفا انتخاب کنید") {
            total = (parsePrice(total) * quantity);
        }

        setTotalAmount(total);


        const fee = product.fee_percent;
        setFeePercent(fee);

        const feeValue = (total * fee) / 100;
        setFeeAmount(feeValue);



        let finalAmount = total + feeValue;

        const ternPercent = (finalAmount * 10) / 100;
        setTenPercentValue(ternPercent);

        finalAmount = ternPercent + finalAmount;
        setFinalRialAmount(finalAmount)


        const hasDiscount = isVariable
            ? selectedVariation?.offer_price
                ? "true"
                : "false"
            : product.offer_price
                ? "true"
                : "false";

        setDiscount(hasDiscount);

        const discountPercent = isVariable
            ? selectedVariation?.offer_price
                ? `%${Math.round(
                    ((parsePrice(selectedVariation.price) - parsePrice(selectedVariation.offer_price)) /
                        parsePrice(selectedVariation.price)) * 100
                )}`
                : ""
            : product.offer_price
                ? `%${Math.round(
                    ((parsePrice(product.regular_price) - parsePrice(product.offer_price)) /
                        parsePrice(product.regular_price)) * 100
                )}`
                : "";

        setDiscountPercentage(discountPercent);

        let discountAmt = isVariable
            ? selectedVariation?.offer_price
                ? selectedVariation.price
                : selectedVariation?.price
            : product.offer_price
                ? product.regular_price
                : product.regular_price;

        if (discountAmt) {
            discountAmt = (parsePrice(discountAmt) * quantity).toLocaleString("fa") + " تومان ";
        }

        setDiscountAmount(discountAmt || 0);

    }, [isVariable, selectedVariation, product, quantity]);

    const handleSelectChange = (parentName, value) => {
        const newSelections = { ...selections, [parentName]: parseInt(value) };
        setSelections(newSelections);

        setSelectedValues((prev) => ({
            ...prev,
            [parentName]: value,
        }));

        if (parentName === "ریجن کارت") {

            setSelectedRegionId(parseInt(value)); // ذخیره ریجن انتخاب‌شده
        }
    };


    useEffect(()=>{
        const findCurrencyKeyByCode = (code) => {

            return Object.keys(exchangeRates).find(key => exchangeRates[key]?.code == code);
        };

        const match = product.in_stock_variations.find((variation) =>
            variation.variations.some((v) => {
                const actualId = v["0"]?.id;
                return selectedRegionId == actualId;
            })
        );
        if(match){
            const foundKey = findCurrencyKeyByCode(match.currency);
            console.log(foundKey,match.currency,match,exchangeRates)
            if (foundKey) {
                setCurrencyKey(foundKey);
                setSelectedExchangeRate(exchangeRates[foundKey]?.rate);
                setSelectedCurrencyCode(exchangeRates[foundKey]?.code);
            }
        }

    },[selectedRegionId])

    return (
        <div className="mt-custom-4">
            <div className="text-lg font-semibold">{product.title}</div>

            <div className="grid md:grid-cols-12 grid-cols-1 gap-10">
                <div className="md:col-span-8">
                    <div className="grid md:grid-cols-12 grid-cols-1 mt-7 gap-10">
                        <div className="md:col-span-7">
                            <img className="rounded-lg" loading="lazy" src={product.media?.url} />
                        </div>
                        <div className=" gap-10 md:col-span-5 grid-cols-2 md:grid-cols-1">
                            {isVariable && (
                                <>
                                    {(() => {
                                        const regionCardGroup = product.table_variations.find(
                                            (group) => group.parentName === "ریجن کارت"
                                        );
                                        const otherGroups = product.table_variations.filter(
                                            (group) => group.parentName !== "ریجن کارت"
                                        );

                                        const orderedGroups = regionCardGroup
                                            ? [regionCardGroup, ...otherGroups]
                                            : product.table_variations;

                                        return orderedGroups.map((group, index) => {
                                            const allNumeric = group.item.every((option) => !isNaN(option.name));
                                            const sortedItems = allNumeric
                                                ? [...group.item].sort((a, b) => Number(a.name) - Number(b.name))
                                                : group.item;

                                            const isFirst = index === 0;
                                            const firstGroupName = orderedGroups[0]?.parentName;
                                            const firstSelected = selectedValues[firstGroupName];
                                            const isDisabled = !isFirst && !firstSelected;

                                            // فقط آیتم‌هایی که ریجن‌شون با ریجن انتخابی یکیه
                                            const filteredItems = group.parentName === "ریجن کارت"
                                                ? sortedItems
                                                : sortedItems.filter((option) => {
                                                    if (!selectedRegionId) return true;
                                                    return product.in_stock_variations.some((variation) =>
                                                        variation.variations.some((v) =>
                                                            v.parentName.name === "ریجن کارت" &&
                                                            v["0"].id === selectedRegionId
                                                        ) &&
                                                        variation.variations.some((v) =>
                                                            v.parentName.name === group.parentName &&
                                                            v["0"].id === option.id
                                                        )
                                                    );
                                                });

                                            return (
                                                <div className="mb-5" key={index}>
                                                    <Input
                                                        isSelect
                                                        disabled={isDisabled}
                                                        placeholder={`انتخاب ${group.parentName}`}
                                                        onChange={(e) =>
                                                            handleSelectChange(group.parentName, e.target.value)
                                                        }
                                                    >
                                                        <option value="" selected>
                                                            انتخاب کنید
                                                        </option>
                                                        {filteredItems.map((option) => {
                                                            const isNumeric = !isNaN(option.name) && option.name !== "";
                                                            const safeCurrencyKey = currencyKey ?? "";
                                                            const formattedCurrencyKey = safeCurrencyKey
                                                                .toLowerCase()
                                                                .replace(/_/g, ' ')
                                                                .replace(/\b\w/g, char => char.toUpperCase());

                                                            const label = isNumeric ? `${option.name} ${formattedCurrencyKey}` : option.name;
                                                            return (
                                                                <option key={option.id} value={option.id}>
                                                                    {label}
                                                                </option>
                                                            );
                                                        })}
                                                    </Input>
                                                </div>
                                            );
                                        });
                                    })()}
                                </>
                            )}
                            <div className='text-[#464646] text-sm'>
                                <p className='mb-2'>انتخاب تعداد</p>
                                <div className='grid grid-cols-4 xl:gap-12 gap-4 text-black '>

                                    {/* دکمه کم کردن */}
                                    <button
                                        type="button"
                                        className='py-2 border rounded-lg flex justify-center items-center'
                                        onClick={() => {
                                            const current = quantity;
                                            if (current > 1) {
                                                setQuantity(current - 1);
                                            }
                                        }}
                                    >
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5 12H19" stroke="#3664FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </button>

                                    {/* نمایش تعداد */}
                                    <div className='col-span-2 py-2 border rounded-lg flex justify-center items-center'>
                                        {quantity}
                                    </div>

                                    {/* دکمه زیاد کردن */}
                                    <button
                                        type="button"
                                        className='py-2 border rounded-lg flex justify-center items-center'
                                        onClick={() => {
                                            const current = quantity;
                                            if (current < 1000) {
                                                setQuantity(current + 1);
                                            }
                                        }}
                                    >
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12 5V19M5 12H19" stroke="#3664FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </button>

                                </div>

                            </div>
                        </div>




                    </div>

                    <Item title={"نکات قبل از خرید"}>
                        <div dangerouslySetInnerHTML={{__html:product.excerpt ?? " کاربر عزیز دقت فرمایید از آنجایی که گیفت کارت یک محصول مجازی می‌باشد و در هر لحظه امکان استفاده آن وجود دارد، پس از تحویل کد امکان استرداد و یا تعویض آن وجود ندارد. ریجن گیفت کارت باید با ریجن اکانت شما یکی باشد."}}>
                        </div>
                    </Item>
                    <Item title={"توضیحات"}>
                        <div dangerouslySetInnerHTML={{ __html: product.content }} />
                    </Item>
                </div>

                <Cart

                    currency_key={currencyKey}
                    exchange_rate={selectedExchangeRate}
                    dollar_price={product.dollar_price}
                    productId={product.id}
                    totalAmount={totalAmount}
                    isVariable={isVariable}
                    discount={discount}
                    quantity={quantity}
                    discountPercentage={discountPercentage}
                    discountAmount={discountAmount}
                    finalRialAmount={finalRialAmount}
                    tenPercentValue={tenPercentValue}
                    feePercent={feePercent}
                    feeAmount={feeAmount}
                    variationId={selectedVariation?.id || null}
                />
            </div>
        </div>
    );
}
