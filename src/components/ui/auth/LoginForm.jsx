"use client"
import { useState,useEffect } from "react"
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
import Button from "../globals/Button"
import InputError from "../globals/InputError"
import checkEmailExists from "../../../helpers/functions/checkEmailExists";
import {registerAndSencCode} from "../../../helpers/api/register";
import VerificationCode from "./VerificationCode";
const phoneRegExp = /^09\d{9}$/;
const emailRegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


export default function LoginForm({ next, setEmail, setPassword }) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [loginErrors, setLoginErrors] = useState(false);
  const [formType, setFormType] = useState(false);
  const [showEmailError, setShowEmailError] = useState(false);
  const [loading, setLoading] = useState(false)
  const [loginByCode, setLoginByCode] = useState(false)

    const [validationSchema, setValidationSchema] = useState(null);

    useEffect(() => {
        const schema = yup.object().shape({
            identifier: yup
                .string()
                .required(' ')
                .test(
                    'is-email-or-phone',
                    'فرمت ایمیل یا شماره موبایل معتبر نیست',
                    function (value) {
                        if (!value) return false;
                        const isPhone = phoneRegExp.test(value);
                        const isEmail = emailRegExp.test(value);
                        return isPhone || isEmail;
                    }
                )
                .test(
                    'unique-email',
                    'ایمیل قبلا ثبت نشده است لطفا با شماره موبایل ثبت نام کنید.',
                    async function (value) {
                        const emailExists = await checkEmailExists(value);
                        if(emailRegExp.test(value) && !emailExists){
                            setShowEmailError(true)
                            return false;
                        } else if(emailExists){
                            setFormType("login")
                        } else{
                            setFormType("register")
                        }


                        return true;
                    }
                ),
            ...(formType === 'register' && {
                name: yup.string().required(' '),
                password: yup.string().required(' ').min(8, 'رمز عبور باید حداقل 8 رقمی باشد'),
            }),
            ...(formType === 'login' && {
                password: yup.string().required('وارد کردن رمز عبور الزامی است'),
            }),
        });

        setValidationSchema(schema);
    }, [formType]);

  const dispatch = useDispatch();
  const {
    register,
      watch,
    handleSubmit,
    formState: { errors },
  } = useForm({
      resolver: validationSchema ? yupResolver(validationSchema) : undefined,
      mode: 'onSubmit',           // فقط هنگام submit ولیدیشن کن
      reValidateMode: 'onSubmit',
  });
  const identifier= watch("identifier");
  const onSubmit = async (data) => {

    if(formType == "login"){
      dispatch(login(data.identifier, data.password, setLoginErrors, setIsLoading, () => {
        router.push("/panel")
        //router.back();
      }));


    } else if(formType == "register"){
      setLoading(true)
      await registerAndSencCode(data.identifier, data.password, data.name)
      setEmail(data.identifier)
      setPassword(data.password)
      setLoading(false)
      next();
    }

  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex justify-center justify-center lg:grid-cols-12 grid-cols-1 h-full items-center">
        <div className="lg:col-span-5 grid">
          <div className={`${styles.boxLoginSignup}`}>
            <LoginSignup />
            <div className={`${styles.loginSignup}`}>
              {/*<div className="flex lg:justify-start justify-center">
                <p className=" Largest-text-very-bold cursor-pointer border-b-4 pb-1.5 rounded px-1.5 border-blue-custom">
                  ورود
                </p>
                <Link href={'/signup'} className="Largest-text-very-bold mr-5 cursor-pointer">ثبت نام</Link>
              </div>*/}
              <div className="mt-6">
                <p className="text-very-bold text-center lg:text-right">
                   شماره موبایل یا ایمیل  خود را وارد کنید
                </p>
                <div className="flex relative mt-4">
                  <Input
                    classes={``}
                    placeholder="شماره موبایل یا ایمیل خود را وارد کنید"
                    error={errors.identifier?.message}
                    showError={true}
                    {...register('identifier')}
                    disabled={!!formType}
                  />

                    {formType && (
                        <button
                            type="button"
                            className="absolute  left-0 p-2"
                            onClick={() => setFormType(null)}
                            title="تغییر ایمیل یا شماره"
                            style={{top:"-43px",
                                transform: "rotate(-90deg)"
                            }}
                        >
                            {/* آیکون فلش به سمت بالا سمت راست */}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 "
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                            </svg>
                        </button>
                    )}
                </div>


                  {!formType &&
                  <div className="flex relative mt-4">
                  <Button
                      className="mt-8"
                      type="submit"
                      size="full"
                      loading={isLoading}
                  >
                      ورود یا ثبت نام
                  </Button>
                      </div>

                  }
                
                {formType=="login" && <>
                {!loginByCode && <div>
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

                        <InputError error={loginErrors && loginErrors.email && loginErrors.email[0]} />

                        <div className=' mt-3'>

                            <p className={`${styles.forgetPasssword} mt-3 cursor-pointer text-center lg:text-right`}>
                                <Link href={'/reset-password'} className={`cursor-pointer text-center lg:text-right`}>
                                    رمز عبورم را فراموش کرده ام!
                                </Link>
                            </p>
                        </div>
                        <Button
                            className="mt-8"
                            type="submit"
                            size="full"
                            loading={isLoading}
                        >
                            ورود به حساب
                        </Button>
                    <Button
                        className="mt-8"
                        type="submit"
                        size="full"
                        onClick={()=>setLoginByCode(true)}
                    >
                        ورود با کد یک بار مصرف
                    </Button>
                    </div>}

                {loginByCode &&  <div>

                        <VerificationCode email={identifier} />


                        {/*<Button
                            className="mt-8"
                            type="submit"
                            size="full"
                            loading={isLoading}
                        >
                            ورود به حساب
                        </Button>*/}
                        <Button
                            className="mt-8"
                            type="submit"
                            size="full"
                            onClick={()=>setLoginByCode(false)}
                        >
                            ورود با رمز عبور
                        </Button>
                    </div>}

                </>}
                {formType=="register" && <>
                  <div className="flex relative mt-4">
                    <InputPassword
                        classes={``}
                        placeholder="رمز عبور"
                        error={errors.password?.message}
                        name='password'
                        showError={true}
                        register={register}
                    />
                  </div>
                  <p className={`${styles.forgetPasssword} mt-3 cursor-pointer text-center lg:text-right `}>
                    رمز عبور باید حداقل 8 رقمی باشد.
                  </p>

                  <div className="flex relative mt-4">
                    <Input
                        classes={``}
                        placeholder="نام کامل خود را وارد کنید"
                        error={errors.name?.message}
                        showError={true}
                        {...register('name')}
                    />
                  </div>


                  <Button
                      className="mt-8"
                      type="submit"
                      size='full'
                      loading={loading}
                  >
                    ثبت نام
                  </Button>
                </>}


                {/*<div className="mt-4">
                  <p className="text-very-bold text-center lg:text-right">
                    عضو اول کارت نیستم!
                    <Link href={'/signup'} className="mr-2 text-blue-custom cursor-pointer">
                      ثبت نام
                    </Link>
                  </p>
                </div>*/}


              </div>
            </div>
          </div>
        </div>

      </div>
    </form>
  );
}
