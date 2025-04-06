import { useState, useEffect } from "react";
import DiscountPercentage from "@/components/layout/DiscountPercentage";
import Image from "next/image";
import { FaMinus, FaPlus, FaRegTrashCan } from "react-icons/fa6";

const formatPrice = (price, suffix='تومان') => price.toLocaleString() + ` ${suffix} `;

export default function Item({
  id,
  title,
  region,
  originalPrice,
  discountedPrice,
  discountPercentage,
  quantity: initialQuantity,
  imageUrl,
  onRemove,
  onQuantityChange,
}) {
  const [quantity, setQuantity] = useState(initialQuantity);

  // اطلاع‌رسانی به پدر در صورت تغییر تعداد
  useEffect(() => {
    onQuantityChange(id, quantity);
  }, [quantity]);

  const handleIncrease = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  const totalDiscountedPrice = discountedPrice * quantity;
  const totalOriginalPrice = originalPrice * quantity;

  return (
    <div className="p-5 border border-[#F1F2F4] rounded-xl grid grid-cols-12 items-center w-full justify-between">
      <div className="flex items-center gap-5 col-span-7">
        <div onClick={() => onRemove(id)}>
          <FaRegTrashCan className="text-[#959595] text-xl cursor-pointer hover:text-red-500 duration-300 transition-all" />
        </div>

        <div className="border border-[#F0F0F0] rounded-lg h-20 w-28 justify-center items-center grid">
          <Image src={imageUrl} width={55} height={80} alt={title} />
        </div>

        <div className="space-y-2.5 grid">
          <div className="text-lg font-black">{title}</div>
          <div className="text-xs font-semibold">{region}</div>
          <div className="text-xs font-semibold mt-auto">
            {formatPrice(originalPrice)}
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between col-span-5">
        <div className="border border-[#F1F2F4] text-xs font-black p-4 gap-4 flex rounded-xl">
          <div onClick={handleIncrease} className="cursor-pointer">
            <FaPlus />
          </div>
          <div>{quantity < 10 ? `0${quantity}` : quantity}</div>
          <div onClick={handleDecrease} className="cursor-pointer">
            <FaMinus />
          </div>
        </div>

        <div>
          <div className="flex gap-2 items-center">
            <div>
              <del className="text-[#A9A9A9]">
                {formatPrice(totalOriginalPrice, '')}
              </del>
            </div>
            <DiscountPercentage per={discountPercentage} />
          </div>
          <div className="text-xl font-black mt-1.5">
            {formatPrice(totalDiscountedPrice)}
          </div>
        </div>
      </div>
    </div>
  );
}
