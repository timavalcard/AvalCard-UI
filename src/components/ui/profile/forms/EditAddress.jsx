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
import {fetchUpdateAddress} from "../../../../helpers/api/updateProfile/updateAddress";

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

export default function EditAddress({ address_id,defaultValues }) {

  const [show, setShow] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
    setValue
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues,
  });

  useEffect(() => {
    reset(defaultValues);
  }, [defaultValues, reset]);

  const province = watch('province', '');
  const dispatch = useDispatch();

  const onSubmit = async (data) => {
    await fetchUpdateAddress(data,address_id,dispatch)
    setShow(false);
  };

  return (
    <>
      <div className="flex items-center gap-1.5 text-[#464646] cursor-pointer" onClick={() => setShow(true)}>
        <div>
          <svg width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 10H9.5" stroke="#464646" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M7.25 1.75011C7.44891 1.5512 7.7187 1.43945 8 1.43945C8.13929 1.43945 8.27721 1.46689 8.4059 1.52019C8.53458 1.57349 8.65151 1.65162 8.75 1.75011C8.84849 1.8486 8.92662 1.96553 8.97992 2.09422C9.03323 2.2229 9.06066 2.36083 9.06066 2.50011C9.06066 2.6394 9.03323 2.77733 8.97992 2.90601C8.92662 3.0347 8.84849 3.15162 8.75 3.25011L2.5 9.50011L0.5 10.0001L1 8.00011L7.25 1.75011Z" stroke="#464646" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </div>
        <div>
          ویرایش آدرس
        </div>
      </div>
      <Modal
        show={show}
        setShow={setShow}
        title={"ویرایش آدرس"}
        w={"w-full max-w-[500px]"}
      >
        <form className="space-y-4 mt-2" onSubmit={handleSubmit(onSubmit)}>
          <ProvinceInput setValue={setValue} register={register} errors={errors} />
          <CityInput register={register} errors={errors} province={province}
          />

          <Input placeholder="کدپستی" type="text" {...register("postalCode")} error={errors.postalCode?.message} />
          <Input placeholder="آدرس پستی" {...register("address")} error={errors.address?.message} />
          <Input placeholder="شماره تماس تحویل گیرنده" type="text" {...register("phone")} error={errors.phone?.message} />
          <Input placeholder="عنوان آدرس (مثلا: خانه)" {...register("title")} error={errors.title?.message} />

          <Button size="full" gradient={"blue"}>ذخیره تغییرات</Button>
        </form>
      </Modal>
    </>
  );
}
