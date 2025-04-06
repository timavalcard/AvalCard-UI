"use client"
import {useState} from "react"
import LoginSignup from '@/components/layout/auth/loginSignup'
import styles from '@/components/ui/auth/auth.module.css'
import ImgFirstCard from '@/components/layout/auth/ImgFirstCard'
import Input from '@/components/ui/globals/Input'
import ButtonAuth from '@/components/ui/globals/ButtonAuth'
import InputPassword from '@/components/ui/globals/InputPassword'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import Link from 'next/link'
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../../helpers/actions/authActions";
import { useRouter } from "next/navigation";
const phoneRegExp = /^09\d{9}$/;


/*const schema = yup.object().shape({
  identifier: yup
    .string()
    .required('وارد کردن ایمیل یا شماره موبایل الزامی است')
    .test(
      'is-email-or-phone',
      'فرمت ایمیل یا شماره موبایل معتبر نیست',
      function (value) {
        if (!value) return false;
        const isEmail = yup.string().email().isValidSync(value);
        const isPhone = phoneRegExp.test(value);
        return isEmail || isPhone;
      }
    ),
  password: yup
    .string()
    .required('وارد کردن رمز عبور الزامی است')
    .min(8, 'رمز عبور باید حداقل 8 رقمی باشد'),
});*/
const schema = yup.object().shape({
  identifier: yup
      .string()
      .required('وارد کردن شماره موبایل الزامی است')
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
export default function LoginForm({next}) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [loginErrors, setLoginErrors] = useState(false);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    dispatch(login(data.identifier, data.password, setLoginErrors, setIsLoading, () => {

      router.back();
    }));

    console.log(loginErrors);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="grid grid-cols-12">
        <div className="col-span-5 grid">
          <div className={`${styles.boxLoginSignup}`}>
            <LoginSignup />
            <div className={`${styles.loginSignup}`}>
              <div className="flex">
              <p className=" Largest-text-very-bold cursor-pointer">
                  ورود
                </p>
              <Link href={'/signup'} className="Largest-text-very-bold mr-6 cursor-pointer">ثبت نام</Link>
                
              </div>
              <div
                className={`bg-greenLight mt-1.5 ${styles.lineUnderBox}`}
              ></div>
              <div className="mt-6">
                <p className="text-very-bold">
                  برای ورود شماره موبایل  خود را وارد کنید
                </p>
                <div className="flex relative mt-4">
                  <Input
                    classes={``}
                    placeholder="شماره موبایل خود را وارد کنید"
                    error={errors.identifier?.message}
                    {...register('identifier')}
                  />
                  {loginErrors && loginErrors.email && <span>{loginErrors.email[0]}</span>}

                </div>
                <div className="flex relative mt-4">
                  <InputPassword
                    classes={``}
                    placeholder="رمز عبور"
                    error={errors.password?.message}
                    svg={
                      <svg
                        className="absolute left-4 top-5"
                        width="19"
                        height="14"
                        viewBox="0 0 19 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1.11027 7.6208C1.05276 7.46572 1.05276 7.29811 1.11027 7.14303C2.2661 4.0229 5.54694 1.77234 9.4136 1.77234C13.2786 1.77234 16.5578 4.02066 17.7161 7.13929C17.7744 7.29406 17.7744 7.46155 17.7161 7.61707C16.5611 10.7372 13.2803 12.9878 9.4136 12.9878C5.5486 12.9878 2.2686 10.7394 1.11027 7.6208Z"
                          stroke="#BCBCBC"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M11.9135 7.38005C11.9135 7.97495 11.6501 8.54549 11.1813 8.96615C10.7124 9.38681 10.0765 9.62313 9.41349 9.62313C8.75045 9.62313 8.11457 9.38681 7.64573 8.96615C7.17688 8.54549 6.91349 7.97495 6.91349 7.38005C6.91349 6.78514 7.17688 6.21461 7.64573 5.79395C8.11457 5.37329 8.75045 5.13696 9.41349 5.13696C10.0765 5.13696 10.7124 5.37329 11.1813 5.79395C11.6501 6.21461 11.9135 6.78514 11.9135 7.38005Z"
                          stroke="#BCBCBC"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    }
                    name='password'
                    register={register}
                  />
                </div>
                <div className=' mt-3'>

                <p className={`${styles.forgetPasssword} mt-3 cursor-pointer`}>
                <Link href={'/reset-password'} className={`cursor-pointer`}>
                رمز عبورم را فراموش کرده ام!
                </Link>
                </p>
                </div>
                <ButtonAuth
                  text="ورود به حساب"
                  classes="bg-blue-custom py-3 text-[#FFFFFF] Largest-text-little-bold mt-8"
                  type="submit"
                />
                {/*<div className="flex">
                  <div className={`${styles.orLine}`}></div>
                  <p className="text-very-bold mt-3 mx-3.5">یا</p>
                  <div className={`${styles.orLineSecond}`}></div>
                </div>
                <ButtonAuth
                  text="ورود با گوگل"
                  classes={`${styles.btnGoGoogle} mt-3 py-3.5 Large-text-bold`}
                />*/}
                <div className="mt-4">
                  <p className="text-very-bold">
                  عضو اول کارت نیستم!
                    <Link href={'/signup'} className="mr-2 text-blue-custom cursor-pointer">
                    ثبت نام
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
