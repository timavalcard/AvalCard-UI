import styles from '../auth.module.css'
import ImgFirstCard from '@/components/layout/auth/ImgFirstCard'
import ButtonAuth from '../../globals/ButtonAuth'
import Input from '../../globals/Input'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import Link from 'next/link'

const phoneRegExp = /^09\d{9}$/;


const schema = yup.object().shape({
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
});

export default function ForgetPasssword({next}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    next()
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-12">
        <div className="col-span-5 grid">
        <div className={`${styles.boxLoginSignup}`}>
            <div className={`${styles.loginSignup}`}>
                <Link href={'/login'} className='flex items-center'>
                    <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.8332 7.49349L1.1665 7.49349M12.8332 7.49349L6.99984 1.66016M12.8332 7.49349L6.99984 13.3268" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <p className='mr-2 text-very-bold'>فراموشی رمز عبور</p>
                </Link>
                <div className='mt-8'>
                    <p className='text-very-bold'>شماره موبایل یا ایمیلی که با ان ثبت نام کردید را وارد کنید</p>
                </div>
                <div className='mt-4'>
                <Input classes={``}
                error={errors.identifier?.message}
                {...register('identifier')}
                    placeholder={`شماره موبایل یا ایمیل...`} />
                </div>
                <ButtonAuth text='تایید و ادامه'
                    classes='bg-blue-custom py-3 text-[#FFFFFF] Largest-text-little-bold mt-8' />
            </div>
        </div>
        </div>
            <div className="col-span-7">
          <ImgFirstCard classes={``} />
        </div>
      </div>
      </form>
    )
}