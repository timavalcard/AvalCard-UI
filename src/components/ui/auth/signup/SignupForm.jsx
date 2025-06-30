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
import Button from '../../globals/Button'
import { useState } from 'react'

const phoneRegExp = /^09\d{9}$/;


const schema = yup.object().shape({
  identifier: yup
    .string()
    .required(' ')
    .test(
      'is-email-or-phone',
      'فرمت شماره موبایل معتبر نیست',
      function (value) {
        if (!value) return false;
        const isPhone = phoneRegExp.test(value);
        return isPhone;
      }
    )
    .test('unique-email', 'این شماره موبایل قبلا ثبت شده است.', async function (value) {
      const emailExists = await checkEmailExists(value);
      return !emailExists;
    })
    ,
  name: yup
    .string()
    .required(' '),
  password: yup
    .string()
    .required(' ')
    .min(8, 'رمز عبور باید حداقل 8 رقمی باشد'),
});

export default function SignupForm({ next, setEmail, setPassword }) {
  const [loading, setLoading] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    setLoading(true)
    registerAndSencCode(data.identifier, data.password, data.name)
    setEmail(data.identifier)
    setPassword(data.password)
    setLoading(false)
    next();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex justify-center lg:grid-cols-12 grid-cols-1 h-full items-center">
        <div className="lg:col-span-5 grid">
          <div className={`${styles.boxLoginSignup}`}>
            <LoginSignup />
            <div className={`${styles.loginSignup}`}>
              <div className="flex lg:justify-start justify-center">
                <Link href={'/login'} className="Largest-text-very-bold cursor-pointer">ورود</Link>
                <p className="mr-5 Largest-text-very-bold cursor-pointer border-b-4 pb-1.5 rounded px-1.5 border-blue-custom">
                  ثبت نام
                </p>
              </div>
              <div className="mt-6">
                <p className="text-very-bold text-center lg:text-right">
                  برای ثبت نام شماره موبایل خود را وارد کنید
                </p>
                <div className="flex relative mt-4">
                  <Input
                    classes={``}
                    placeholder="شماره موبایل خود را وارد کنید"
                    error={errors.identifier?.message}
                    showError={true}
                    {...register('identifier')}
                  />
                </div>
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
                
                <div className="mt-4">
                  <p className="text-very-bold text-center lg:text-right">
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
        {/*<div className="col-span-7 hidden lg:block">
          <ImgFirstCard classes={``} />
        </div>*/}
      </div>
    </form>
  );
}
