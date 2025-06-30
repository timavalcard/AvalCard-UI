'use client'

import Image from 'next/image'
import styles from './MarqueeLogos.module.css'

export default function MarqueeLogos() {
  const items = [
    'logo-marquee.webp',
    'logo-marquee-2.webp',
    'logo-marquee-3.webp',
    'logo-marquee-4.webp',
    'logo-marquee-5.webp',
    'logo-marquee-6.webp',
    'logo-marquee.webp',
    'logo-marquee-2.webp',
    'logo-marquee-3.webp',
    'logo-marquee-4.webp',
    'logo-marquee-5.webp',
    'logo-marquee-6.webp',
    'logo-marquee.webp',
    'logo-marquee-2.webp',
    'logo-marquee-3.webp',
    'logo-marquee-4.webp',
    'logo-marquee-5.webp',
    'logo-marquee-6.webp',
    'logo-marquee.webp',
    'logo-marquee-2.webp',
    'logo-marquee-3.webp',
    'logo-marquee-4.webp',
    'logo-marquee-5.webp',
    'logo-marquee-6.webp',
  ];

  return (
    <div className={styles.marqueeWrapper}>
      <div className={styles.marqueeContent}>
        {[...items, ...items].map((item, index) => (
          <div key={index} className={`relative  ${styles.marqueeItem}`}>
            <img
              src={`/images/${item}`}
              alt={`logo ${index}`}
              loading='lazy'
              className='h-10 w-full'
            />
          </div>
        ))}
      </div>
    </div>
  )
}
