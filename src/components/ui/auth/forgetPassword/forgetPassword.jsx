import styles from '../auth.module.css'
import ImgFirstCard from '@/components/layout/auth/ImgFirstCard'
import ButtonAuth from '../../globals/ButtonAuth'
import Input from '../../globals/Input'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import Link from 'next/link'
import { sendResetPasswordCode } from "../../../../helpers/api/sendResetPasswordCode";
import { useState } from 'react'
import Button from '../../globals/Button'

const phoneRegExp = /^09\d{9}$/;


const schema = yup.object().shape({
  identifier: yup
    .string()
    .required(' ')
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
});

export default function ForgetPasssword({ next, setMobile }) {

  const [loading, setLoading] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    setLoading(true);
    setMobile(data.identifier)
    await sendResetPasswordCode(data.identifier, next)
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex justify-center lg:grid-cols-12 grid-cols-1 h-full items-center">
        <div className="lg:col-span-5 grid">
          <div className={`${styles.boxLoginSignup}`}>
            <div className={`${styles.loginSignup}`}>
              <Link href={'/login'} className='flex items-center justify-center lg:justify-start'>
                <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.8332 7.49349L1.1665 7.49349M12.8332 7.49349L6.99984 1.66016M12.8332 7.49349L6.99984 13.3268" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <p className='mr-2 text-very-bold'>بازگشت به فرم ورود</p>
              </Link>
              <div className='mt-8'>
                <p className='text-very-bold text-center lg:text-right'>برای تغییر رمز عبور شماره موبایل یا ایمیل  خود را وارد کنید</p>
              </div>
              <div className='mt-4'>
                <Input classes={``}
                  error={errors.identifier?.message}
                  {...register('identifier')}
                  showError
                  placeholder={`شماره موبایل یا ایمیل خود را وارد کنید`} />
              </div>
              <Button
                className='mt-8'
                size='full'
                loading={loading}
                >
                تایید و ادامه
              </Button>
            </div>
          </div>
        </div>
       {/* <div className="col-span-7 hidden lg:block">
          <ImgFirstCard classes={``} />
        </div>*/}
      </div>
    </form>
  )
}