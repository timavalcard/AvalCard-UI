"use client"
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import Modal from "../../globals/modal/Modal";
import Button from "../../globals/Button";
import Input from "../../globals/Input";

import ProvinceInput from "../../globals/ProvinceInput";
import CityInput from "../../globals/CityInput";
import { useDispatch, useSelector } from "react-redux";
import { fetchAddAddress } from "../../../../helpers/api/updateProfile/addAddress";

const schema = yup.object().shape({
  province: yup.string().required("استان را انتخاب کنید"),
  city: yup.string().required("شهر را انتخاب کنید"),
  postalCode: yup
    .string()
    .required("کد پستی الزامی است")
    .matches(/^\d{10}$/, "کد پستی باید دقیقا ۱۰ رقم باشد"),
  address: yup.string().required("آدرس پستی الزامی است"),
  phone: yup
    .string()
    .required("شماره تماس الزامی است")
    .matches(/^09\d{9}$/, "شماره موبایل باید با 09 شروع شده و 11 رقم باشد"),
  title: yup.string().required("عنوان آدرس را وارد کنید"),
});

export default function AddAddress({ showButton = true, isShow = false, setIsShow = false }) {
  const [show, setShow] = useState(isShow);
  const [loading, setLoading] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
    watch,
  } = useForm({
    resolver: yupResolver(schema),
  });
  const dispatch = useDispatch();

  const onSubmit = async (data) => {
    setLoading(true)
    await fetchAddAddress(data, dispatch)
    reset();
    setShow(false);
    setLoading(false)
  };


  useEffect(() => {
    if (setIsShow) {
      setIsShow(show)
    }
  }, [show])

  const province = watch('province', '')

  return (
    <>
      {
        showButton &&
        <Button
          className={"!text-xs !h-[2.75rem]"}
          size="auto"
          onClick={() => setShow(true)}
        >
          افزودن آدرس جدید
        </Button>
      }
      <Modal
        show={show}
        setShow={setShow}
        title={"افزودن آدرس جدید"}
        w={"w-full max-w-[500px]"}
      >
        <form className="space-y-4 mt-2" onSubmit={handleSubmit(onSubmit)}>

          <div>
            <ProvinceInput register={register} errors={errors} setValue={setValue} />
          </div>

          <div>
            <CityInput register={register} errors={errors} province={province}
            />
          </div>

          <div>
            <Input
              placeholder="کدپستی"
              type="text"
              {...register("postalCode")}
              error={errors.postalCode?.message}
            />
            {errors.postalCode && (
              <p className="text-red-500 text-xs mt-1">{errors.postalCode.message}</p>
            )}
          </div>

          <div>
            <Input
              placeholder="آدرس پستی"
              {...register("address")}
              error={errors.address?.message}
            />
            {errors.address && (
              <p className="text-red-500 text-xs mt-1">{errors.address.message}</p>
            )}
          </div>

          <div>
            <Input
              placeholder="شماره تماس تحویل گیرنده"
              type="text"
              {...register("phone")}
              error={errors.phone?.message}
            />
            {errors.phone && (
              <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>
            )}
          </div>

          <div>
            <Input
              placeholder="عنوان آدرس (مثلا: خانه)"
              {...register("title")}
              error={errors.title?.message}
            />
            {errors.title && (
              <p className="text-red-500 text-xs mt-1">{errors.title.message}</p>
            )}
          </div>

          <Button size="full" gradient={"blue"} loading={loading}>
            ارسال و ذخیره
          </Button>
        </form>
      </Modal>
    </>
  );
}
