import Image from 'next/image'
import React from 'react'


export default function FooterSection() {
  return (
    <footer className="w-full relative bg-background mt-16 md:mt-40">
      <Image src="/images/landing/footer/vector.svg" alt="footer vector" width={1000} height={1000} className="absolute bottom-[calc(100%-2px)] h-16 md:h-40 w-full" />
      <h1> hello </h1>
    </footer>
  )
}
