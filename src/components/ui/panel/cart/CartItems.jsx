"use client"

import { useState } from "react";
import Items from "./Items";
import {deleteFromCart} from "../../../../helpers/api/cart/deleteFromCart";
import {getCart} from "../../../../helpers/api/cart/GetCartFromUi";
import { useDispatch, useSelector } from 'react-redux';

export default function CartItems({data,setCart}) {
    const [items, setItems] = useState(data);
    const dispatch = useDispatch();

    const handleRemove = async (id, variation_id) => {
        await deleteFromCart(id, variation_id,dispatch);
        const cart = await getCart();

        setItems((prevItems) => {
            const updatedItems = prevItems.filter((item) => item.id !== id);

            // اگر هیچ آیتمی باقی نموند، صفحه رو رفرش کن
            if (updatedItems.length === 0) {
                window.location.reload();
            }

            return updatedItems;
        });
        if(cart?.products.length){
            setCart(cart);
            setItems(cart.products)
        }
        if (items.length == 0) {
            window.location.reload();
        }
    };


    const handleQuantityChange = (id, newQuantity) => {
        setItems((prevItems) =>
            prevItems.map((item) =>
                item.id === id ? { ...item, quantity: newQuantity } : item
            )
        );
    };

    return (
        <Items
            items={items}
            setItems={setItems}
            setCart={setCart}
            onRemove={handleRemove}
            onQuantityChange={handleQuantityChange}
        />
    );
}
