"use client"

import { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import Modal from "../../globals/modal/Modal";
import Button from "../../globals/Button";
import Input from "../../globals/Input";
import BankCardInput from "../../globals/BankCardInput";
import { fetchAddBankCart } from "../../../../helpers/api/updateProfile/addBankCart";
import { useDispatch, useSelector } from "react-redux";

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

export default function AddCardBank({ showButton = true, isShow = false, setIsShow = false }) {
  
  const [show, setShow] = useState(isShow);
  const [loading, setLoading] = useState(false)

  const bankBins = {
    "636795": { fa: "اداره معاملات ریالی بانک مرکزی", en: "Markazi" },

    "627961": { fa: "بانک صنعت و معدن", en: "Sanat o Madan" },
    "610433": { fa: "بانک ملت", en: "Mellat" },
    "589463": { fa: "بانک رفاه کارگران", en: "Refah" },
    "628023": { fa: "بانک مسکن", en: "Maskan" },
    "589210": { fa: "بانک سپه", en: "Sepah" },
    "603770": { fa: "بانک کشاورزی", en: "Keshavarzi" },
    "603799": { fa: "بانک ملی", en: "Melli" },
    "627353": { fa: "بانک تجارت", en: "Tejarat" },
    "585983": { fa: "بانک تجارت", en: "Tejarat" },
    "603769": { fa: "بانک صادرات", en: "Saderat" },
    "627648": { fa: "بانک توسعه صادرات ایران", en: "Tosee Saderat" },
    "627760": { fa: "پست بانک ایران", en: "Post Bank" },
    "502908": { fa: "بانک توسعه تعاون", en: "Tosee Taavon" },

    "628157": { fa: "موسسه اعتباری توسعه", en: "Tosee Moasese" },

    "627488": { fa: "بانک کارآفرین", en: "Karafarin" },
    "622106": { fa: "بانک پارسیان", en: "Parsian" },
    "627412": { fa: "بانک اقتصاد نوین", en: "Eghtesad Novin" },
    "621986": { fa: "بانک سامان", en: "Saman" },
    "502229": { fa: "بانک پاسارگاد", en: "Pasargad" },
    "639607": { fa: "بانک سرمایه", en: "Sarmayeh" },
    "639346": { fa: "بانک سینا", en: "Sina" },
    "606373": { fa: "بانک مهر ایران", en: "Gharzolhasaneh Mehr Iran" },
    "504706": { fa: "بانک شهر", en: "Shahr" },
    "636214": { fa: "بانک آینده", en: "Ayandeh" },

    "627381": { fa: "بانک انصار", en: "Ansar" },

    "505416": { fa: "بانک گردشگری", en: "Gardeshgari" },
    "636949": { fa: "بانک حکمت ایرانیان", en: "Hekmat Iranian" },
    "502938": { fa: "بانک دی", en: "Day" },
    "505785": { fa: "بانک ایران زمین", en: "Iran Zamin" },
    "504172": { fa: "بانک رسالت", en: "Resalat" },
    "505809": { fa: "بانک خاورمیانه", en: "Middle East" },
    "585947": { fa: "بانک خاورمیانه", en: "Middle East" },
    "639599": { fa: "بانک قوامین", en: "Ghavamin" },

    "505801": { fa: "موسسه مالی و اعتباری کوثر", en: "Kosar" },
    "606256": { fa: "موسسه مالی و اعتباری عسگریه", en: "Askarieh" },
    "581874": { fa: "بانک ایران ونزوئلا", en: "Iran Venezuela" },
    "507677": { fa: "موسسه نور", en: "Noor" },
  };

  const {
    register,
    handleSubmit,
    control,
    setError,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });
  const dispatch = useDispatch();


  const onSubmit = async (data) => {

    setLoading(true)
    const cart = getBankName(data.cardNumber)
    if (cart.fa === "بانک نامشخص") {
      setError("cardNumber", {
        type: "manual",
        message: "شماره کارت معتبر نیست یا بانک آن شناسایی نشد",
      });
      setLoading(false)
      return;
    } else {
      await fetchAddBankCart(data, cart, dispatch)
      reset();
      setShow(false);
    }

    setLoading(false)
  };

  const getBankName = (cardNumber) => {
    if (!cardNumber || cardNumber.length < 6) return null;
    const bin = cardNumber.slice(0, 6);
    return bankBins[bin] || { fa: "بانک نامشخص", en: "Unknown" };
  };

  useEffect(() => {
    if (setIsShow) {
      setIsShow(show)
    }
  }, [show])

  return (
    <>
      {
        showButton &&
        <Button
          className={"!text-xs !h-[2.75rem]"}
          size="auto"
          onClick={() => setShow(true)}
        >
          افزودن کارت جدید
        </Button>
      }

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

          <Button size="full" gradient={"blue"} loading={loading}>
            ارسال و ذخیره
          </Button>
        </form>
      </Modal>
    </>
  );
}
