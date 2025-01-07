import Image from 'next/image'
import React from 'react'
import styles from "@/styles/HomePage.module.css";
import Link from 'next/link';
import { Button } from '@nextui-org/react';

export default function FooterSection() {
  return (
    <footer className="w-full relative bg-background mt-16 md:mt-40">
      <Image src="/images/landing/footer/vector.svg" alt="footer vector" width={1000} height={1000} className="absolute left-0 bottom-[calc(100%-2px)] h-16 md:h-40 w-full" />
      <div className='flex flex-col sm:flex-row sm:justify-center p-4 sm:gap-24 xl:gap-32'>
        <div className='flex flex-col'>
          <h2 className={`text-4xl sm:text-5xl font-bold ${styles.textGradient} self-start flex items-center sm:items-end gap-4 my-2`}>
            Bout
            <Image src="/BoutLogoSolo.svg" alt="Logo" width={50} height={50} className="h-8 w-8 sm:h-10 sm:w-10" />
          </h2>
          <span className='text-xl sm:mt-12'>Bout&apos; the Future</span>
          <span className='flex items-center gap-2 font-mono text-sm'>
            <span className='material-symbols-outlined text-lg'>copyright</span>
            Bout 2024, All rights reserved
          </span>
        </div>

        <div className='flex justify-start sm:justify-center my-6 px-0 gap-16 sm:gap-24 xl:gap-32'>
          <div className='space-y-4'>
            <h3 className={`${styles.textGradiente} text-2xl font-medium`}>Contact</h3>
            <Link href="https://www.instagram.com/bout.sh_" className='flex gap-2'>
              <Image src="/images/landing/social/insta.svg" alt="Instagram Logo" width={20} height={20} className="" />
              @bout.sh_
            </Link>
            <Link href="https://www.instagram.com/bout.sh_" className='flex gap-2'>
              <Image src="/images/landing/social/twitter.svg" alt="Instagram Logo" width={20} height={20} className="" />
              @bout.sh
            </Link>
            <Link href="https://www.instagram.com/bout.sh_" className='flex gap-2'>
              <Image src="/images/landing/social/tiktok.svg" alt="Instagram Logo" width={20} height={20} className="" />
              @bout.sh
            </Link>
            <Link href="https://www.instagram.com/bout.sh_" className='flex gap-2'>
              <Image src="/images/landing/social/linkedin.svg" alt="Instagram Logo" width={20} height={20} className="" />
              Bout
            </Link>
            <Link href="https://www.instagram.com/bout.sh_" className='flex gap-2'>
              <Image src="/images/landing/social/mail.svg" alt="Instagram Logo" width={20} height={20} className="" />
              Email
            </Link>
            <Link href="https://www.instagram.com/bout.sh_" className='flex gap-2'>
              <Image src="/images/landing/social/whats.svg" alt="Instagram Logo" width={20} height={20} className="" />
              Whatsapp
            </Link>
          </div>
          <div className=' flex flex-col space-y-3'>
            <h3 className={`${styles.textGradiente} text-2xl font-medium`}>Our Work</h3>
            <Link href={"/about"}>
              About Us
            </Link>
            <Link href={"/projects"}>
              Our Projects
            </Link>
          </div>
          <div className='hidden sm:flex flex-col space-y-3'>
            <h3 className={`${styles.textGradiente} text-2xl font-medium`}>Our Projects</h3>
            <Link href={"http://keyvault.bout.sh"}>
              KeyVault
            </Link>
            <Link href={"http://riego.bout.sh"}>
              RieGo
            </Link>
            <Link href={"http://riego.bout.sh"}>
              DiApp
            </Link>
          </div>
        </div>
      </div>

      <div className='flex gap-4 items-center bg-white bg-opacity-5 px-4 py-2'>
        <Link href={"/info/legal"}>Legal</Link>
        <Link href={"/info/privacy"}>Privacy</Link>
        <Button className='ml-auto bg-opacity-75'>
          English
          <span className='material-symbols-outlined text-lg'>keyboard_arrow_down</span>
        </Button>
      </div>
    </footer>
  )
}
