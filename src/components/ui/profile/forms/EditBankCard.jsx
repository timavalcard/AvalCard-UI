"use client"

import { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import Modal from "../../globals/modal/Modal";
import Button from "../../globals/Button";
import Input from "../../globals/Input";
import BankCardInput from "../../globals/BankCardInput";
import { FaPaintbrush } from "react-icons/fa6";
import {fetchAddBankCart} from "../../../../helpers/api/updateProfile/addBankCart";
import { useDispatch, useSelector } from "react-redux";
import {fetchUpdateBankCart} from "../../../../helpers/api/updateProfile/updateBankCart";

const schema = yup.object().shape({
  cardNumber: yup
    .string()
    .required("شماره کارت الزامی است")
    .matches(/^\d{16}$/, "شماره کارت باید ۱۶ رقم باشد"),
  sheba: yup
    .string()
    .required("شماره شبا الزامی است")
    .matches(/^\d{24}$/, "شماره شبا باید 24 کاراکتر باشد"),
});

export default function EditBankCard({ defaultValues,bank_cart_id }) {
  const [show, setShow] = useState(false);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues
  });

  useEffect(() => {
    reset(defaultValues);
  }, [defaultValues, reset]);

  const dispatch = useDispatch();
  const onSubmit =async (data) => {
    await fetchUpdateBankCart(data,bank_cart_id,dispatch)
    reset();
    setShow(false);
  };

  return (
    <>
      <button
      onClick={() => setShow(true)}
        className="flex items-center gap-1.5 w-full text-right px-4 py-2 text-gray-custom text-sm hover:bg-gray-100"
      >
        <div>
          <FaPaintbrush />
        </div>
        <div>
          ویرایش
        </div>
      </button>

      <Modal
        show={show}
        setShow={setShow}
        title={"شماره کارت بانکی"}
        w={"w-full max-w-[700px]"}
        className="space-y-4"
      >
        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <Controller
              control={control}
              name="cardNumber"
              render={({ field }) => (
                <BankCardInput value={field.value} error={errors.cardNumber} onChange={field.onChange} />
              )}
            />
            {errors.cardNumber && (
              <p className="text-red-500 text-xs">
                {errors.cardNumber.message}
              </p>
            )}
          </div>

          <div className="text-[#55636F] flex justify-center items-center gap-1 text-sm">
            <div>
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_709_2094)">
                  <path
                    d="M6.99984 12.8334C10.2215 12.8334 12.8332 10.2217 12.8332 7.00008C12.8332 3.77842 10.2215 1.16675 6.99984 1.16675C3.77818 1.16675 1.1665 3.77842 1.1665 7.00008C1.1665 10.2217 3.77818 12.8334 6.99984 12.8334Z"
                    stroke="#55636F"
                    strokeOpacity="0.7"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M7 4.66675V7.00008"
                    stroke="#55636F"
                    strokeOpacity="0.7"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M7 9.33325H7.00583"
                    stroke="#55636F"
                    strokeOpacity="0.7"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_709_2094">
                    <rect width="14" height="14" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div>
              لطفا دقت کنید شماره کارت و شماره شبا باید متعلق به صاحب حساب باشد.
            </div>
          </div>

          <div className="text-xl font-semibold">شماره شبا حساب</div>

          <div>

            <Input placeholder="شماره شبا" {...register("sheba")} error={errors.sheba} icon={'IR'} dir="ltr" maxLength={24} />
            {errors.sheba && (
              <p className="text-red-500 text-xs mt-1">{errors.sheba.message}</p>
            )}

          </div>

          <Button size="full" gradient={"blue"}>
            ارسال و ذخیره
          </Button>
        </form>
      </Modal>
    </>
  );
}
