"use client";

import { useEffect, useState } from 'react';
import Input from '@/components/ui/globals/Input';
import Button from '@/components/ui/globals/Button';
import TitleWithBlue from '@/components/layout/TitleWithBlue';
import {getCurrencies} from "../../../../../helpers/api/getCurrencies";

export default function Order({ product }) {
    const [selections, setSelections] = useState({});
    const [selectedVariation, setSelectedVariation] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const [totalPrice, setTotalPrice] = useState(0);
    const [selectedRegion, setSelectedRegion] = useState(null);

    const isVariable = product.type === 'variable';

    const parsePrice = (price) => {
        if (!price) return 0;
        const priceStr = String(price);
        return parseInt(priceStr.replace(/,/g, '').replace(' تومان', ''), 10);
    };

    const handleSelectChange = (parentName, value) => {
        setSelections((prev) => ({ ...prev, [parentName]: parseInt(value) }));

        if (parentName === 'ریجن کارت') {
            setSelectedRegion(parseInt(value));
            setSelectedRegionId(parseInt(value));
        }
    };

    useEffect(() => {
        if (!isVariable || !product.in_stock_variations) return;

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

    useEffect(() => {
        if (!selectedVariation) {
            setTotalPrice(0);
            return;
        }

        const basePrice = parsePrice(selectedVariation.offer_price || selectedVariation.price);
        setTotalPrice(basePrice * quantity);
    }, [selectedVariation, quantity]);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!selectedVariation) {
            alert('لطفاً تمام گزینه‌ها را انتخاب کنید');
            return;
        }

        const formData = {
            ...selections,
            quantity,
            variationId: selectedVariation.id,
            totalPrice
        };

        console.log('Form Data:', formData);
    };

    const getOptionsForGroup = (group) => {
        if (group.parentName === 'ریجن کارت') {
            return group.item;
        }

        if (!selectedRegion || !product.in_stock_variations) return [];

        const options = new Set();

        product.in_stock_variations.forEach(variation => {
            const hasMatchingRegion = variation.variations.some(v =>
                v.parentName.name === 'ریجن کارت' && v["0"].id === selectedRegion
            );

            if (hasMatchingRegion) {
                variation.variations.forEach(v => {
                    if (v.parentName.name === group.parentName) {
                        options.add(JSON.stringify(v["0"]));
                    }
                });
            }
        });

        return Array.from(options).map(o => JSON.parse(o));
    };

    const getCurrencyNameFromOption = (optionName) => {
        if (!isNaN(optionName)) {
            const variation = product.in_stock_variations.find(v =>
                v.variations.some(opt => opt["0"].name === optionName)
            );
            if (variation) {
                const currencyVariation = variation.variations.find(v =>
                    v.parentName.name === "مبلغ گیفت کارت" || v.parentName.name === "ارز"
                );
                if (currencyVariation) {
                    return ` ${currencyVariation["0"].name}`;
                }
            }
        }
        return "";
    };

    // ریجن کارت رو بیار اول، بقیه بعدش
    const sortedGroups = [
        ...product.table_variations.filter(g => g.parentName === 'ریجن کارت'),
        ...product.table_variations.filter(g => g.parentName !== 'ریجن کارت')
    ];

    const [currencyKey, setCurrencyKey] = useState(null);
    const [selectedExchangeRate, setSelectedExchangeRate] = useState(null);
    const [selectedCurrencyCode, setSelectedCurrencyCode] = useState(null);

    const [selectedRegionId, setSelectedRegionId] = useState(null); // اضافه شده برای ری
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
        <div className='pt-5'>
            <TitleWithBlue blue={'گیفت کارت'}>
                مورد نظر خود را پیدا کنید
            </TitleWithBlue>

            <form onSubmit={handleSubmit} className="bg-blue-light p-7 mt-10 rounded-xl grid md:grid-cols-3 grid-cols-1 gap-4 items-end">
                {sortedGroups.map((group, index) => {
                    const isRegionGroup = group.parentName === 'ریجن کارت';
                    const allNumeric = group.item.every(opt => !isNaN(opt.name));
                    const availableOptions = getOptionsForGroup(group);
                    const sortedItems = allNumeric
                        ? [...availableOptions].sort((a, b) => Number(a.name) - Number(b.name))
                        : availableOptions;

                    return (
                        <Input
                            key={index}
                            isSelect
                            placeholder={`انتخاب ${group.parentName}`}
                            onChange={(e) => handleSelectChange(group.parentName, e.target.value)}
                            disabled={!isRegionGroup && !selectedRegion} // فقط ریجن همیشه فعال باشه
                        >
                            <option value="">انتخاب کنید</option>
                            {sortedItems.map((opt) => {
                                const isNumeric = !isNaN(opt.name) && opt.name !== "";
                                const safeCurrencyKey = currencyKey ?? "";
                                const formattedCurrencyKey = safeCurrencyKey
                                    .toLowerCase()
                                    .replace(/_/g, ' ')
                                    .replace(/\b\w/g, char => char.toUpperCase());
                                const label = isNumeric ? `${opt.name} ${formattedCurrencyKey}` : opt.name;
                                return(
                                    <option key={opt.id} value={opt.id}>
                                        {label}

                                    </option>
                                )
                            })}
                        </Input>
                    );
                })}

                <div className="col-span-1 text-center">
                    <div className="text-sm text-gray-600">مبلغ نهایی</div>
                    <div className="text-lg font-bold">{totalPrice.toLocaleString()} تومان</div>
                    <Button href={product.url} type="submit" size="full" className="h-[3rem] mt-2">
                        نمایش محصول
                    </Button>
                </div>
            </form>
        </div>
    );
}
