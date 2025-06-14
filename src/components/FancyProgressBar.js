'use client';

import { motion, AnimatePresence } from 'framer-motion';
import useRouteLoader from '@/hooks/useRouteLoader';

export default function FancyProgressBar({ bg = "bg-blue-custom" }) {
  const loading = useRouteLoader();

  return (
    <>
      {loading && (
        <AnimatePresence>
          <motion.div
            className={`fixed top-0 left-0 h-[5px] z-[9999999] animate-pulse ${bg}`}
            initial={{ width: '0%' }}
            animate={{ width: ['0%', '74%', '82%', '90%', '94%', '97%', '98%', '100%'] }}
            exit={{ opacity: .3 }}
            transition={{
              duration: 18,
              times: [0, 0.14, 0.285, 0.43, 0.57, 0.67, 0.8, 1],
              ease: 'linear'
            }}
          />
        </AnimatePresence>
      )}
    </>
  );
}
