import { Button, Link } from "@nextui-org/react";
import Image from "next/image";
import styles from "@/styles/HomePage.module.css";
import ContactSection from "@/components/landing/ContactSection";
import AboutUsSection from "@/components/landing/AboutUsSection";
import FooterSection from "@/components/landing/FooterSection";
import { TechnologyCard } from "@/components/landing/TechnologyCard";
import { ServiceCard } from "@/components/landing/ServiceCard";
import LandingHeader from "@/components/landing/LandingHeader";

// TODO: Move all images to their respective folder locations
// TODO: Move sections to their respective components under @/components/home
// TODO: Move components to their respective section components
// TODO: Move Navbar to its own component and maybe add it to the layout
// TODO: Implement navbar menu
// TODO: Add animations with framer-motion

export default function HomePage() {
  return (
    <>
      {/* Navbar */}
      <LandingHeader />

      {/* Circle gradient */}
      <div className={`${styles.radialGradient} absolute w-full aspect-square -translate-y-3/4`} />

      {/* Hero */}
      <section className={`flex flex-col items-center justify-center p-8 gap-12 h-[85vh] overflow-hidden relative`}>
        <Image src="/constellation.svg" alt="Constellation" width={5} height={5} className="absolute top-0 right-0 h-full w-full object-cover -z-10 object-bottom" priority />
        <h1 className={`text-5xl sm:text-6xl font-bold text-center ${styles.textGradient} max-w-xl`}>Build your future with Bout</h1>

        <h2 className="text-center text-lg max-w-xl">
          The software development company that will build what you need to grow your business, or even <span className="font-semibold">start one!</span>
        </h2>

        <Button color="default" size="lg" className="backdrop-blur-sm bg-opacity-10 px-10 bg-slate-400" as={Link} href="/home/#contact">Contact Us</Button>
      </section>

      {/* Services */}
      <section id="services" className="flex flex-col items-center justify-center p-8 py-16 gap-16 relative w-full" >
        <Image src="/constellation.svg" alt="Constellation" width={1000} height={1000} className="absolute top-0 right-0 h-full w-full object-cover -z-10 object-top" />
        <div className={`${styles.radialGradient} absolute w-full sm:w-4/5  aspect-square top-0 -translate-y-1/4`} />

        <h2 className={`text-4xl sm:text-5xl font-bold text-center ${styles.textGradient}`}>Our Services</h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 w-full  max-w-4xl justify-items-center">
          <ServiceCard
            icon="/web-platforms.svg"
            title="Web Platforms"
            description="Integrate your business with the cloud, optimize your operations, and grow like never before!"
          />

          <ServiceCard
            icon="/mobile-apps.svg"
            title="Mobile Apps"
            description="Bring your ideas to life, and make them reach thousands of hands."
          />

          {/* <ServiceCard
            icon="/iot.svg"
            title="IoT / Home Automation"
            description="Automate your home or business, and make your life easier."
          /> */}
          <ServiceCard
            icon="/iot.svg"
            title="AI / Automation"
            description="Integrate AI into your business, automate processes, and make better decisions."
          />

          <ServiceCard
            icon="/web-apps.svg"
            title="Web Apps"
            description="Solutions that will solve day-to-day problems on the go, Accessible from any device!"
          />

          <ServiceCard
            icon="/websites.svg"
            title="Web Sites"
            description="Showcase your business, and make it accessible to everyone."
          />

          <ServiceCard
            icon="/desktop-apps.svg"
            title="Desktop Apps"
            // description="Automate your business, avoid errors, and make your processes more efficient."
            description="Make your business processes more efficient, avoid errors, and automate repetitive tasks."
          />
        </div>
      </section>

      {/* Tech Toolbox */}
      <section className="flex flex-col-reverse sm:flex-row justify-center items-center p-8 gap-12 relative py-16">
        <Image src="/images/landing/backgrounds/hexagons.svg" alt="Constellation" width={1000} height={1000} className="absolute top-0 right-0 h-full w-full object-cover -z-10 object-top" />
        <div className="flex flex-col items-center gap-8 w-full max-w-md">
          <TechnologyCard
            icon="/images/landing/tech/nextjs.svg"
            title="Next.js"
            description="To develop all kinds of web platforms and applications"
          />
          <TechnologyCard
            icon="/images/landing/tech/mongodb.svg"
            title="MongoDB"
            description="For your database needs, scalable and secure information"
            justify="end"
          />
          <TechnologyCard
            icon="/images/landing/tech/raspberrypi.svg"
            title="Raspberry Pi"
            description="For IoT solutions, home automation, and more"
          />
        </div>
        <div className="flex flex-col items-center gap-8 max-w-md">
          <h2 className={`text-4xl sm:text-5xl font-bold text-center ${styles.textGradient}`}>
            Our Tech Toolbox
          </h2>
          <p className="text-center max-w-xl">
            This is the innovative arsenal driving our software solutions.
            Dive into the heart of our operations and all the advanced technologies we use to make your ideas a reality.
          </p>
        </div>
      </section>

      {/* About */}
      <AboutUsSection />

      {/* Section 1: Your Vision, Our Code */}
      <section className="flex flex-col sm:flex-row w-full px-8 py-16 justify-center items-center gap-12 relative">
        <div className="flex flex-col gap-8 items-start max-w-md">
          <h2 className={`text-3xl sm:text-4xl font-bold text-center ${styles.textGradient}`}>
            Your Vision, Our Code
          </h2>
          <p>
            Your business idea is more than just a thought - it&apos;s a potential masterpiece waiting to be crafted. We turn your vision into reality, translating concepts into tangible software solutions. Let us be the architects of your digital success.
          </p>
          <Button color="default" size="lg" className="backdrop-blur-sm bg-opacity-10 px-10 bg-slate-400 w-full sm:w-auto" as={Link} href="/home/#contact">
            Contact Us
          </Button>
        </div>
        <Image src="/images/landing/sections/riegoMobile.png" alt="Image of project Riego" width={400} height={400} className="aspect-square object-cover -mt-12" />
      </section>

      {/* Section 2: Streamline Your Business */}
      <section className="flex flex-col-reverse sm:flex-row w-full px-8 py-16 justify-center items-center gap-12 relative">
        <Image src="/images/landing/sections/riegoLaptop.png" alt="Image of project Riego" width={540} height={540} className="sm:aspect-video object-contain -mt-12 -mr-16" />
        <div className="flex flex-col gap-8 items-start max-w-md">
          <h2 className={`text-3xl sm:text-4xl font-bold text-start ${styles.textGradient}`}>
            Streamline Your Business with Custom Software
          </h2>
          <p>
            Discover how our tailored software solutions can optimize your business operations, enhancing efficiency and maximizing productivity.
          </p>
          <Button color="default" size="lg" className="backdrop-blur-sm bg-opacity-10 px-10 bg-slate-400 w-full sm:w-auto" as={Link} href="/home/#our-projects">
            Discover Projects
          </Button>
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <FooterSection />
    </>
  )
}

