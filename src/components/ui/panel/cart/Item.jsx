import { useState, useEffect } from "react";
import DiscountPercentage from "@/components/layout/DiscountPercentage";
import Image from "next/image";
import { FaMinus, FaPlus, FaRegTrashCan } from "react-icons/fa6";
import { increaseFromCart } from "../../../../helpers/api/cart/increaseFromCart";
import { getCart } from "../../../../helpers/api/cart/GetCartFromUi";
import Loading from "../../globals/Loading";
import { decreaseFromCart } from "../../../../helpers/api/cart/decreaseFromCart";
import Modal from "../../globals/modal/Modal";
import Button from "../../globals/Button";
import { useDispatch, useSelector } from 'react-redux';

const formatPrice = (price, suffix = 'تومان') => price;

export default function Item({
  setCart,
  setItems,
  id,
  title,
  price,
  quantity2,
  media_data,
  variations,
  variation_id,
  onRemove,
  onQuantityChange,
}) {

  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(quantity2);
  const [increaseLoading, setIncreaseLoading] = useState(false);
  const [decreaseLoading, setDecreaseLoading] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  // اطلاع‌رسانی به پدر در صورت تغییر تعداد
  useEffect(() => {
    onQuantityChange(id, quantity);
  }, [quantity]);

  const handleIncrease = async () => {
    setIncreaseLoading(true)

    await increaseFromCart(id, variation_id,dispatch);
    const cart = await getCart();

    if (cart?.products.length) {
      setCart(cart);
      setItems(cart.products)
    }
    setIncreaseLoading(false)
    setQuantity((prev) => prev + 1);
  };

  const handleDecrease = async () => {
    if (quantity > 1) {
      setDecreaseLoading(true)
      await decreaseFromCart(id, variation_id,dispatch);
      const cart = await getCart();

      setCart(cart);
      if (cart?.products.length) {
        setCart(cart);
        setItems(cart.products)
      }
      setDecreaseLoading(false)
      setQuantity((prev) => prev - 1);
    }
  };
  const handleConfirmRemove = () => {
    onRemove(id, variation_id);
    setShowConfirmModal(false);
  };
  return (
    <div className="p-5 border border-[#F1F2F4] rounded-xl grid md:grid-cols-12 grid-cols-1 items-center w-full justify-between">
      <div className="flex items-center gap-5 md:col-span-7">
        <div onClick={() => setShowConfirmModal(true)}>
          <FaRegTrashCan className="text-[#959595] text-xl cursor-pointer hover:text-red-500 duration-300 transition-all" />
        </div>

        <div className="border border-[#F0F0F0] rounded-lg h-20 w-28 justify-center items-center grid">
          <Image src={media_data?.url} width={55} height={80} alt={title} />
        </div>

        <div className="space-y-2.5 grid">
          <div className="text-lg font-black">{title}</div>
          <div className="text-xs font-semibold" dangerouslySetInnerHTML={{ __html: variations }}></div>
          {/*<div className="text-xs font-semibold mt-auto">
            {formatPrice(price)}
          </div>*/}
        </div>
      </div>
      <div className="flex items-center justify-between md:col-span-5">

        <div className="border border-[#F1F2F4] text-xs font-black p-4 gap-4 flex rounded-xl">
          <div onClick={handleIncrease} className="cursor-pointer">
            {increaseLoading && <Loading />}
            {!increaseLoading && <FaPlus />}
          </div>
          <div>{quantity < 10 ? `0${quantity}` : quantity}</div>
          <div onClick={handleDecrease} className="cursor-pointer">
            {decreaseLoading && <Loading />}
            {!decreaseLoading && <FaMinus />}

          </div>
        </div>

        <div>
          {/*<div className="flex gap-2 items-center">
            <div>
              <del className="text-[#A9A9A9]">
                {price}
              </del>
            </div>
            <DiscountPercentage per={discountPercentage} />
          </div>*/}
          <div className="text-xl font-black mt-1.5">
            {formatPrice(price)}
          </div>
        </div>
      </div>

      <Modal show={showConfirmModal} title={'حذف از سبد'} setShow={setShowConfirmModal}>
        <p className="text-gray-600 text-sm py-7">آیا مطمئن هستید که می‌خواهید این آیتم را از سبد خرید حذف کنید؟</p>
        <div className="flex justify-center gap-6 pt-4">
          <Button
            onClick={handleConfirmRemove}
            outline
            color="red"
          >
            بله، حذف کن
          </Button>
          <Button
          color="red"
            onClick={() => setShowConfirmModal(false)}
          >
            لغو
          </Button>
        </div>
      </Modal>
    </div>
  );
}
