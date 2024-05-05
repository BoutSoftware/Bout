import { Button, Link, Navbar, NavbarBrand, NavbarContent, NavbarMenuToggle } from "@nextui-org/react";
import Image from "next/image";
import styles from "./HomePage.module.css";

export default function HomePage() {
  return (
    <>
      {/* Navbar */}
      <Navbar className="w-full" classNames={{ wrapper: "max-w-full py-4 h-auto px-8" }}>
        <NavbarBrand className="flex items-center space-x-2">
          <Image src="/BoutLogoSolo.svg" alt="Logo" width={50} height={50} className="h-8 w-8" priority />
          <span className="text-2xl font-semibold">Bout</span>
        </NavbarBrand>

        <NavbarContent justify="end">
          <Link href="/home/#contact" color="foreground" underline="hover">Contact Us</Link>
          <span className="material-symbols-outlined">menu</span>
        </NavbarContent>
      </Navbar>

      {/* Circle gradient */}
      <div className={`${styles.radialGradient} absolute w-full aspect-square -translate-y-3/4`} />

      {/* Hero */}
      <section className={`flex flex-col items-center justify-center p-8 gap-8 h-[85vh] overflow-hidden relative`}>
        <Image src="/constellation.svg" alt="Constellation" width={1000} height={1000} className="absolute top-0 right-0 h-full w-full object-cover -z-10" />
        <h1 className={`text-5xl font-bold text-center ${styles.textGradient}`}>Build your dream with Bout</h1>

        <p className="text-center">
          A software development company that will help you build what you need. We are here to help you grow your business, or even start one.
        </p>

        {/* <Button color="default" size="lg" className="mt-8 bg backdrop-blur-sm">Contact Us</Button> */}
        <div className="bg-slate-400 bg-opacity-10 backdrop-blur-sm p-3 px-9 rounded-lg cursor-pointer">
          Contact Us
        </div>
      </section>

      {/* Services */}
      <section className="flex flex-col items-center justify-center p-8 gap-8 relative">
        <Image src="/constellation.svg" alt="Constellation" width={1000} height={1000} className="absolute top-0 right-0 h-full w-full object-cover -z-10" />

        <h2 className="text-4xl font-bold text-center">Our Services</h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col items-center gap-4 p-4 rounded-lg bg-slate-400 bg-opacity-10">
            <Image src="/web-development.svg" alt="Web Development" width={200} height={200} />
            <h3 className="text-2xl font-bold">Web Development</h3>
            <p className="text-center opacity-80">
              We build websites that will help you grow your business.
            </p>
          </div>

          <div className="flex flex-col items-center gap-4 p-4 rounded-lg bg-slate-400 bg-opacity-10">
            <Image src="/mobile-development.svg" alt="Mobile Development" width={200} height={200} />
            <h3 className="text-2xl font-bold">Mobile Development</h3>
            <p className="text-center opacity-80">
              We build mobile apps that will help you reach your customers.
            </p>
          </div>

          <div className="flex flex-col items-center gap-4 p-4 rounded-lg bg-slate-400 bg-opacity-10">
            <Image src="/ui-ux-design.svg" alt="UI/UX Design" width={200} height={200} />
            <h3 className="text-2xl font-bold">UI/UX Design</h3>
            <p className="text-center opacity-80">
              We design user interfaces that will help you engage your users.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}