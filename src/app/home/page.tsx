import { Button, Link, Navbar, NavbarBrand, NavbarContent, NavbarMenuToggle } from "@nextui-org/react";
import { Popover, PopoverTrigger, PopoverContent } from "@nextui-org/popover";
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
      <section className={`flex flex-col items-center justify-center p-8 gap-12 h-[85vh] overflow-hidden relative`}>
        <Image src="/constellation.svg" alt="Constellation" width={1000} height={1000} className="absolute top-0 right-0 h-full w-full object-cover -z-10 object-bottom" />
        <h1 className={`text-5xl sm:text-6xl font-bold text-center ${styles.textGradient} max-w-xl`}>Build your future with Bout</h1>

        <h2 className="text-center max-w-xl">
          A software development company that will build what you need to grow your business, or even <span className="font-semibold">start one!</span>
        </h2>

        <Button color="default" size="lg" className="backdrop-blur-sm bg-opacity-10 px-10 bg-slate-400" as={Link} href="/home/#contact">Contact Us</Button>
        {/* <div className="bg-slate-400 bg-opacity-10 backdrop-blur-sm p-3 px-9 rounded-lg cursor-pointer">
          Contact Us
        </div> */}
      </section>

      {/* Services */}
      <section className="flex flex-col items-center justify-center p-8 gap-16 relative w-full">
        <Image src="/constellation.svg" alt="Constellation" width={1000} height={1000} className="absolute top-0 right-0 h-full w-full object-cover -z-10 object-top" />
        <div className={`${styles.radialGradient} absolute w-full sm:w-3/5  aspect-square top-0 -translate-y-1/4`} />

        <h2 className={`text-4xl sm:text-5xl font-bold text-center ${styles.textGradient}`}>Our Services</h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 w-full  max-w-4xl justify-items-center">
          <ServiceCard
            icon="/web-platforms.svg"
            title="Web Platforms"
            description="Integrate your business with the web, and grow like never before!"
          />

          <ServiceCard
            icon="/web-apps.svg"
            title="Web Apps"
            description="Solutions that will solve day-to-day problems, Accessible from any device!"
          />

          <ServiceCard
            icon="/mobile-apps.svg"
            title="Mobile Apps"
            description="Bring your ideas to life, and make them reach thousands of hands."
          />

          <ServiceCard
            icon="/desktop-apps.svg"
            title="Desktop Apps"
            description="Automate your business, avoid errors, and make your processes more efficient."
          />

          <ServiceCard
            icon="/iot.svg"
            title="IoT / Home Automation"
            description="Automate your home or business, and make your life easier."
          />

          <ServiceCard
            icon="/websites.svg"
            title="Web Sites"
            description="Showcase your business, and make it accessible to everyone."
          />

        </div>
      </section>
    </>
  )
}

function ServiceCard({ icon, title, description }: { icon: string, title: string, description?: string }) {
  return (
    <Popover showArrow>
      <PopoverTrigger>
        <div className="flex flex-col items-center gap-4 p-4 rounded-lg bg-slate-400 bg-opacity-10 backdrop-blur-sm  border border-slate-400 border-opacity-40 cursor-pointer w-full max-w-xs">
          <Image src={icon} alt={title} width={64} height={64} />
          <h3 className="text-xl font-semibold">{title}</h3>
          {/* {description && <p className="text-center opacity-80">{description}</p>} */}
        </div>
      </PopoverTrigger>
      <PopoverContent>
        <div className="p-4 space-y-2 max-w-xs">
          <h3 className="text-xl font-semibold">{title}</h3>
          {description && <p className="opacity-80 text-base">{description}</p>}
        </div>
      </PopoverContent>
    </Popover>
  )
}