"use client"
import Input from "@/components/ui/globals/Input";
import UploadFile from "@/components/ui/globals/UploadFile/UploadFile";
import Button from "@/components/ui/globals/Button";
import Alert from "@/components/ui/globals/alert/Alert";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import ProvinceInput from "../../globals/ProvinceInput";
import CityInput from "../../globals/CityInput";
import InputError from "../../globals/InputError";
import {fetchUpdateProfile} from "../../../../helpers/api/updateProfile/updateProfile";
import { useDispatch, useSelector } from "react-redux";
import {useState} from "react"
import FeedBack from "../../globals/FeedBack";
import checkEmailExists from "../../../../helpers/functions/checkEmailExists";




export default function Info() {
  const auth = useSelector(state => state.auth);
  const schema = yup.object().shape({
    fullName: yup.string().required("لطفا نام و نام خانوادگی را وارد کنید"),
    phone: yup.string().test('unique-email', 'این شماره موبایل قبلا ثبت شده است.', async function (value) {
      const emailExists = await checkEmailExists(value);
      if(auth.user.mobile == value) {return  true;}
      return !emailExists;
    }).required("لطفا شماره تماس را وارد کنید").matches(/^09[0-9]{9}$/, "لطفا شماره تماس معتبر وارد کنید"),
    province: yup.string().required("لطفا استان خود را انتخاب کنید"),
    city: yup.string().required("لطفا نام شهر را انتخاب کنید"),
    email: yup
        .string()
        .email("ایمیل وارد شده صحیح نیست")
        .test('unique-email', 'این ایمیل قبلا ثبت شده است.', async function (value) {
          const emailExists = await checkEmailExists(value);
          if(auth.user.email == value) {return  true;}
          return !emailExists;
        })
        .required("لطفا ایمیل خود را وارد کنید"),
    nationalCode: yup.string().required("لطفا کد پستی را وارد کنید"),
    address: yup.string().required("لطفا آدرس پستی را وارد کنید"),
    //file: yup.mixed().required(''),
  });
  const {
    register,
    handleSubmit,
    setValue,
    trigger,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      fullName: auth.user?.name || "",
      phone: auth.user?.mobile || "",
      email: auth.user?.email || "",
      nationalCode: auth.user?.national_code || "",
      address: auth.user?.address || "",
      province: auth.user?.state || "",  // مقدار اولیه استان
      city: auth.user?.city || "",          // مقدار اولیه شهر
      file: null                            // چون فایل قابل preview نیست باید null باشه
    }
  });
  const dispatch = useDispatch();

  let [ShowFeedback,setShowFeedback]=useState(false);
  const [isLoading,setIsLoading]= useState(false);
  
  const onSubmit = async (data) => {
    setShowFeedback(false)
    setIsLoading(true)
    await fetchUpdateProfile(data,data.file,dispatch);
    setShowFeedback(true)
    setIsLoading(false)
  };

  const province = watch('province', '')

  return (
    <>
      {ShowFeedback && <FeedBack text={"اطلاعات شما با موفقیت به روز شد"} /> }

      <form onSubmit={handleSubmit(onSubmit)} className="mt-custom-4">
        <div className="grid md:grid-cols-12 grid-cols-1 gap-8">
          <div className="md:col-span-8">
            <div className="grid md:grid-cols-2 grid-cols-1 gap-x-8 gap-y-5">

              <div>
                <Input
                  placeholder="نام و نام خانوادگی"
                  {...register("fullName")}
                  error={!!errors.fullName}
                />
                {errors.fullName && <InputError error={errors.fullName.message} />}
              </div>

              <div>
                <Input
                  placeholder="شماره تماس"
                  {...register("phone")}
                    disabled={true}
                  error={!!errors.phone}
                />
                {errors.phone && <InputError error={errors.phone.message} />}
              </div>

              <div>
                <ProvinceInput value={auth.user?.state} setValue={setValue} register={register} errors={errors} />
              </div>

              <div>
                <CityInput
                  register={register}
                  errors={errors}
                  value={auth.user?.city}
                  province={province}
                />
              </div>

              <div>
                <Input
                  type="email"
                  placeholder="ایمیل شما"
                  {...register("email")}
                  error={!!errors.email}
                />
                {errors.email && <InputError error={errors.email.message} />}
              </div>

              <div>
                <Input
                  placeholder="کد ملی شما"
                  {...register("nationalCode")}
                  error={!!errors.nationalCode}
                />
                {errors.nationalCode && <InputError error={errors.nationalCode.message} />}
              </div>

              <div className="md:col-span-2  md:hidden">
                <Input
                  isTextarea
                  className="!h-[3.125rem]"
                  placeholder="ادرس خود را وارد کنید"
                  {...register("address")}
                  error={!!errors.address}
                />
                {errors.address && <InputError error={errors.address.message} />}
              </div>

            </div>
          </div>
          <div className="md:col-span-4">
            <UploadFile
              name={'file'}
              errors={errors}
              setValue={setValue}
              trigger={trigger}
            />
          </div>
        </div>

        <div className="grid md:grid-cols-12 grid-cols-1 gap-8 mt-5">
          <div className="md:col-span-8">
            <div className="grid grid-cols-2 gap-x-8 gap-y-5">
              <div className="col-span-2  md:block hidden">
                <Input
                  isTextarea
                  className="!h-[3.125rem]"
                  placeholder="ادرس پستی خود را وارد کنید"
                  {...register("address")}
                  error={!!errors.address}
                />
                {errors.address && <InputError error={errors.address.message} />}
              </div>
            </div>
          </div>
          <div className="md:col-span-4 md:block flex justify-center">
            <Button loading={isLoading} type="submit" size="full">
              ثبت و ارسال اطلاعات
            </Button>
          </div>
        </div>
      </form>


      <div className="mt-custom-4">
        <Alert
          className="!py-5 !gap-2"
          type="warning"
          message="کاربر گرامی در این قسمت از سایت میتوانید اطلاعات کاربری خود را ویرایش کنید. در نظر داشته باشید برخی اطلاعات مهم و اساسی هر حساب کاربری از جمله کد ملی قابل ویرایش نیستند و نمی‌توانید آنها را عوض کنید."
        />
      </div>
    </>
  );
}
