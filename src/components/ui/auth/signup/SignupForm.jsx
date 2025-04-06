import LoginSignup from '@/components/layout/auth/loginSignup'
import styles from '../auth.module.css'
import ImgFirstCard from '@/components/layout/auth/ImgFirstCard'
import Input from '@/components/ui/globals/Input'
import ButtonAuth from '@/components/ui/globals/ButtonAuth'
import InputPassword from '@/components/ui/globals/InputPassword'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import Link from 'next/link'
import checkEmailExists from "../../../../helpers/functions/checkEmailExists";
import { registerAndSencCode } from "../../../../helpers/api/register";

const phoneRegExp = /^09\d{9}$/;


const schema = yup.object().shape({
  identifier: yup
    .string()
    .required('وارد کردن شماره موبایل الزامی است')
      .test('unique-email', 'این شماره موبایل قبلا ثبت شده است.', async function (value) {
        const emailExists = await checkEmailExists(value);
        return !emailExists;
      })
    .test(
      'is-email-or-phone',
      'فرمت شماره موبایل معتبر نیست',
      function (value) {
        if (!value) return false;
        const isPhone = phoneRegExp.test(value);
        return isPhone;
      }
    ),
  password: yup
    .string()
    .required('وارد کردن رمز عبور الزامی است')
    .min(8, 'رمز عبور باید حداقل 8 رقمی باشد'),
});

export default function SignupForm({next,setEmail,setPassword}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    registerAndSencCode(data.identifier, data.password)
    setEmail(data.identifier)
    setPassword(data.password)
    next()
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="grid grid-cols-12">
        <div className="col-span-5 grid">
          <div className={`${styles.boxLoginSignup}`}>
            <LoginSignup />
            <div className={`${styles.loginSignup}`}>
              <div className="flex">
              <Link href={'/login'} className="Largest-text-very-bold cursor-pointer">ورود</Link>
                <p className="mr-6 Largest-text-very-bold cursor-pointer">
                  ثبت نام
                </p>
              </div>
              <div
                className={`bg-greenLight mt-1.5 mr-[3.8rem] ${styles.lineUnderBox}`}
              ></div>
              <div className="mt-6">
                <p className="text-very-bold">
                  برای ثبت نام شماره موبایل خود را وارد کنید
                </p>
                <div className="flex relative mt-4">
                  <Input
                    classes={``}
                    placeholder="شماره موبایل خود را وارد کنید"
                    error={errors.identifier?.message}
                    {...register('identifier')}
                  />
                </div>
                <div className="flex relative mt-4">
                  <InputPassword
                    classes={``}
                    placeholder="رمز عبور"
                    error={errors.password?.message}
                    name='password'
                    register={register}
                  />
                </div>
                <p className={`${styles.forgetPasssword} mt-3 cursor-pointer`}>
                  رمز عبور باید حداقل 8 رقمی باشد.
                </p>
                <ButtonAuth
                  text="ثبت نام"
                  classes="bg-blue-custom py-3 text-[#FFFFFF] Largest-text-little-bold mt-8"
                  type="submit"
                />
                {/*<div className="flex">
                  <div className={`${styles.orLine}`}></div>
                  <p className="text-very-bold mt-3 mx-3.5">یا</p>
                  <div className={`${styles.orLineSecond}`}></div>
                </div>
                <ButtonAuth
                  text="ثبت نام با گوگل"
                  classes={`${styles.btnGoGoogle} mt-3 py-3.5 Large-text-bold`}
                />*/}
                <div className="mt-4">
                  <p className="text-very-bold">
                    عضو اول کارت هستم!
                    <Link href={'/login'} className="mr-2 text-blue-custom cursor-pointer">
                      ورود
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-7">
          <ImgFirstCard classes={``} />
        </div>
      </div>
    </form>
  );
}
