'use client';

import Lottie from 'lottie-react';
import loadingAnimation from '/public/images/loading.json';

export default function Loading() {
  

  return (
    <div className="flex items-center justify-center h-dvh">
      <div className="pb-16 max-w-sm">
        <Lottie animationData={loadingAnimation} loop={true} />
      </div>
    </div>
  );
}
