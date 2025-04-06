"use client"

import { useState } from "react";
import Items from "./Items";
import Total from "./Total";

const fakeItems = [
    {
        id: 1,
        title: "گیفت کارت اپل",
        region: "ریجن آمریکا",
        originalPrice: 113500,
        discountedPrice: 72000,
        discountPercentage: "15",
        quantity: 1,
        imageUrl: "/images/twitchBig.svg",
    },
    {
        id: 2,
        title: "گیفت کارت آمازون",
        region: "ریجن اروپا",
        originalPrice: 95000,
        discountedPrice: 65000,
        discountPercentage: "15",
        quantity: 2,
        imageUrl: "/images/twitchBig.svg",
    },
    {
        id: 3,
        title: "گیفت کارت گوگل",
        region: "ریجن آسیا",
        originalPrice: 120000,
        discountedPrice: 85000,
        discountPercentage: "15",
        quantity: 1,
        imageUrl: "/images/twitchBig.svg",
    },
    {
        id: 4,
        title: "گیفت کارت نتفلیکس",
        region: "ریجن آمریکا",
        originalPrice: 100000,
        discountedPrice: 75000,
        discountPercentage: "15",
        quantity: 3,
        imageUrl: "/images/twitchBig.svg",
    },
];

export default function Content() {
    const [items, setItems] = useState(fakeItems);

    const handleRemove = (id) => {
        setItems((prevItems) => prevItems.filter((item) => item.id !== id));
    };

    const handleQuantityChange = (id, newQuantity) => {
        setItems((prevItems) =>
            prevItems.map((item) =>
                item.id === id ? { ...item, quantity: newQuantity } : item
            )
        );
    };

    return (
        <div className="grid grid-cols-12 gap-8 mt-custom-3">
            <div className="col-span-8">
                <Items
                    items={items}
                    onRemove={handleRemove}
                    onQuantityChange={handleQuantityChange}
                />
            </div>
            <div className="col-span-4">
                <Total items={items} />
            </div>
        </div>
    );
}
