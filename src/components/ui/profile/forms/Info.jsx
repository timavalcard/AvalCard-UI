import Input from "@/components/ui/globals/Input";
import UploadFile from "@/components/ui/globals/UploadFile/UploadFile";
import Button from "@/components/ui/globals/Button";
import Alert from "@/components/ui/globals/alert/Alert";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";


const schema = yup.object().shape({
  fullName: yup.string().required("لطفا نام و نام خانوادگی را وارد کنید"),
  phone: yup.string().required("لطفا شماره تماس را وارد کنید"),
  state: yup.string().required("لطفا استان خود را وارد کنید"),
  city: yup.string().required("لطفا نام شهر را وارد کنید"),
  email: yup
    .string()
    .email("ایمیل وارد شده صحیح نیست")
    .required("لطفا ایمیل خود را وارد کنید"),
  postalCode: yup.string().required("لطفا کد پستی را وارد کنید"),
  address: yup.string().required("لطفا آدرس پستی را وارد کنید"),
  file: yup.mixed().required(''),
});

export default function Info() {
  // تنظیم useForm با yupResolver برای اتصال اسکیمای yup
  const {
    register,
    handleSubmit,
    setValue,
    trigger,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="mt-custom-4">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-8">
            <div className="grid grid-cols-2 gap-x-8 gap-y-5">
              <Input
                placeholder="نام و نام خانوادگی"
                {...register("fullName")}
                error={!!errors.fullName}
              />
              <Input
                placeholder="شماره تماس"
                {...register("phone")}
                error={!!errors.phone}
              />
              <Input
                placeholder="استان شما"
                {...register("state")}
                error={!!errors.state}
              />
              <Input
                placeholder="نام شهر"
                {...register("city")}
                error={!!errors.city}
              />
              <Input
                type="email"
                placeholder="ایمیل شما"
                {...register("email")}
                error={!!errors.email}
              />
              <Input
                placeholder="کد پستی شما"
                {...register("postalCode")}
                error={!!errors.postalCode}
              />
            </div>
          </div>
          <div className="col-span-4">
            <UploadFile 
            name={'file'}
            errors={errors}
            setValue={setValue}
            trigger={trigger}
            />
          </div>
        </div>
        <div className="grid grid-cols-12 gap-8 mt-5">
          <div className="col-span-8">
            <div className="grid grid-cols-2 gap-x-8 gap-y-5">
              <div className="col-span-2">
                <Input
                  isTextarea
                  className="!h-[3.125rem]"
                  placeholder="ادرس پستی خود را وارد کنید"
                  {...register("address")}
                  error={!!errors.address}
                />
              </div>
            </div>
          </div>
          <div className="col-span-4">
            <Button type="submit" size="full">
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
