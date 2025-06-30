'use client';

import Lottie from 'lottie-react';
import loadingAnimation from '/public/images/404.json';
import Button from './ui/globals/Button';
import { FaHouse, FaHouseChimney, FaHouseMedical } from 'react-icons/fa6';

export default function NotFound() {
  

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="px-12 pb-10">
        <Lottie animationData={loadingAnimation} loop={true} />

        <Button flex gradient={'blue'} size='lg' className={'mx-auto mt-3'} href={'/'}>
            <FaHouseChimney className='text-xl' />

            <div>
                بازگشت به اول کارت
            </div>
        </Button>
      </div>
    </div>
  );
}
