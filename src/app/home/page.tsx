import { Button, Chip, Input, Link, LinkIcon, Navbar, NavbarBrand, NavbarContent, NavbarItem, Textarea } from "@nextui-org/react";
import { Popover, PopoverTrigger, PopoverContent } from "@nextui-org/popover";
import Image from "next/image";
import styles from "./HomePage.module.css";

// TODO: Move all images to their respective folder locations
// TODO: Move sections to their respective components under @/components/home
// TODO: Move components to their respective section components
// TODO: Move Navbar to its own component and maybe add it to the layout
// TODO: Implement navbar menu
// TODO: Add animations with framer-motion

const chips = {
  left: [
    "Specialize",
    "Company processes",
    "Enhance Efficiency",
    "Creative",
    "Streamlining",
    "Developing",
    "Specialize",
    "Company processes",
    "Enhance Efficiency",
    "Creative",
    "Streamlining",
    "Efficient",
    "Enhance Efficiency",
    "Technology",
    "Innovative",
    "Developing",
    "Software solutions",
  ],
  right: [
    "Business Tools",
    "Mobile Apps",
    "IoT Solutions",
    "Web Platforms",
    "Software Development",
    "Data",
    "Desktop Apps",
    "Web Apps",
    "Automation",
    "Data",
    "Desktop Apps",
    "Desktop Apps",
    "Web Apps",
    "Automation",
    "Data",
    "Desktop Apps",
    "Web Apps",
    "Automation",
    "WebSites",
    "Software",
  ]

}

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
          <NavbarItem>
            <Link href="/home/#contact" color="foreground" underline="hover">Contact Us</Link>
          </NavbarItem>
          <NavbarItem>
            <span className="material-symbols-outlined">menu</span>
          </NavbarItem>
        </NavbarContent>
      </Navbar>

      {/* Circle gradient */}
      <div className={`${styles.radialGradient} absolute w-full aspect-square -translate-y-3/4`} />

      {/* Hero */}
      <section className={`flex flex-col items-center justify-center p-8 gap-12 h-[85vh] overflow-hidden relative`}>
        <Image src="/constellation.svg" alt="Constellation" width={5} height={5} className="absolute top-0 right-0 h-full w-full object-cover -z-10 object-bottom" priority />
        <h1 className={`text-5xl sm:text-6xl font-bold text-center ${styles.textGradient} max-w-xl`}>Build your future with Bout</h1>

        <h2 className="text-center text-lg max-w-xl">
          A software development company that will build what you need to grow your business, or even <span className="font-semibold">start one!</span>
        </h2>

        <Button color="default" size="lg" className="backdrop-blur-sm bg-opacity-10 px-10 bg-slate-400" as={Link} href="/home/#contact">Contact Us</Button>
      </section>

      {/* Services */}
      <section className="flex flex-col items-center justify-center p-8 py-16 gap-16 relative w-full">
        <Image src="/constellation.svg" alt="Constellation" width={1000} height={1000} className="absolute top-0 right-0 h-full w-full object-cover -z-10 object-top" />
        <div className={`${styles.radialGradient} absolute w-full sm:w-4/5  aspect-square top-0 -translate-y-1/4`} />

        <h2 className={`text-4xl sm:text-5xl font-bold text-center ${styles.textGradient}`}>Our Services</h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 w-full  max-w-4xl justify-items-center">
          <ServiceCard
            icon="/web-platforms.svg"
            title="Web Platforms"
            description="Integrate your business with the web, and grow like never before!"
          />

          <ServiceCard
            icon="/mobile-apps.svg"
            title="Mobile Apps"
            description="Bring your ideas to life, and make them reach thousands of hands."
          />

          <ServiceCard
            icon="/iot.svg"
            title="IoT / Home Automation"
            description="Automate your home or business, and make your life easier."
          />

          <ServiceCard
            icon="/web-apps.svg"
            title="Web Apps"
            description="Solutions that will solve day-to-day problems, Accessible from any device!"
          />

          <ServiceCard
            icon="/websites.svg"
            title="Web Sites"
            description="Showcase your business, and make it accessible to everyone."
          />

          <ServiceCard
            icon="/desktop-apps.svg"
            title="Desktop Apps"
            description="Automate your business, avoid errors, and make your processes more efficient."
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
      <section className="flex w-full px-8 py-16 justify-center items-center gap-12 relative">
        <div className={`${styles.radialGradient} absolute w-full sm:w-3/5  aspect-square top-0 -translate-y-1/4`} />

        {/* Left chips */}
        <div className="hidden md:flex items-center justify-start overflow-hidden gap-4 w-full max-w-sm flex-wrap opacity-20 absolute left-0">
          {chips.left.map((chip, index) => (
            <Chip key={index} size="lg">
              {chip}
            </Chip>
          ))}
        </div>
        {/* Right chips */}
        <div className="hidden md:flex items-center justify-end overflow-hidden gap-4 w-full max-w-sm flex-wrap opacity-20 absolute right-0">
          {chips.right.map((chip, index) => (
            <Chip key={index} size="lg">
              {chip}
            </Chip>
          ))}
        </div>

        <div className="flex flex-col items-center gap-8 w-full max-w-lg min-w-96  backdrop-blur-sm p-6 rounded-3xl bg-background bg-opacity-10 ">
          <h2 className={`text-4xl sm:text-5xl font-bold text-center ${styles.textGradient}`}>
            About Us
          </h2>
          <p className="text-center text-lg">
            We specialize in streamlining company processes through innovative technological solutions. Our focus lies in developing efficient business tools to optimize information management, automate processes, and ultimately reduce costs and errors. With a commitment to creating diverse technological products, we aim to enhance efficiency across all facets of operations.
          </p>
        </div>
      </section>

      {/* Section 1: Your Vision, Our Code */}
      <section className="flex w-full px-8 py-16 justify-center items-center gap-12 relative">
        <div className="flex flex-col gap-8 items-start max-w-md">
          <h2 className={`text-3xl sm:text-4xl font-bold text-center ${styles.textGradient}`}>
            Your Vision, Our Code
          </h2>
          <p>
            Your business idea is more than just a thought - it's a potential masterpiece waiting to be crafted. We turn your vision into reality, translating concepts into tangible software solutions. Let us be the architects of your digital success.
          </p>
          <Button color="default" size="lg" className="backdrop-blur-sm bg-opacity-10 px-10 bg-slate-400" as={Link} href="/home/#contact">
            Contact Us
          </Button>
        </div>
        <Image src="/images/landing/sections/riegoMobile.png" alt="Image of project Riego" width={400} height={400} className="aspect-square object-cover" />
      </section>

      {/* Section 2: Streamline Your Business */}
      <section className="flex w-full px-8 py-16 justify-center items-center gap-12 relative">
        <Image src="/images/landing/sections/riegoLaptop.png" alt="Image of project Riego" width={540} height={540} className="aspect-video object-contain" />
        <div className="flex flex-col gap-8 items-start max-w-md">
          <h2 className={`text-3xl sm:text-4xl font-bold text-start ${styles.textGradient}`}>
            Streamline Your Business with Custom Software
          </h2>
          <p>
            Discover how our tailored software solutions can optimize your business operations, enhancing efficiency and maximizing productivity.
          </p>
          <Button color="default" size="lg" className="backdrop-blur-sm bg-opacity-10 px-10 bg-slate-400" as={Link} href="/home/#our-projects">
            Discover Projects
          </Button>
        </div>
      </section>

      {/* Contact Section */}
      <section className="flex flex-col w-full px-8 py-16 justify-center items-center gap-12 relative">
        <h2 className={`text-4xl sm:text-5xl font-bold text-center ${styles.textGradient}`}>
          Land Your Idea,
          <br />
          Contact Us For Free!
        </h2>

        <div className="flex items-center gap-12 w-full justify-center">
          <form className="w-full max-w-sm flex flex-col items-center gap-4">
            <Input
              label="Full Name"
              placeholder="Write your full name"
              classNames={{
                inputWrapper: "backdrop-blur-sm !bg-opacity-10 !bg-slate-400 border border-slate-600"
              }}
            />
            <Input
              label="Email"
              placeholder="you@example.com"
              classNames={{
                inputWrapper: "backdrop-blur-sm !bg-opacity-10 !bg-slate-400 border border-slate-600"
              }}
            />
            <Input
              label="Company"
              placeholder="Example Inc."
              classNames={{
                inputWrapper: "backdrop-blur-sm !bg-opacity-10 !bg-slate-400 border border-slate-600"
              }}
            />
            <Textarea label="Message"
              placeholder="Write your message"
              classNames={{
                inputWrapper: "backdrop-blur-sm !bg-opacity-10 !bg-slate-400 border border-slate-600"
              }}
            />
            <Button
              color="default"
              size="lg"
              className="backdrop-blur-sm bg-opacity-10 px-24 bg-slate-400 border border-slate-600"
              endContent={<span className="material-symbols-outlined">send</span>}
              as={Link}
              href="/home/#our-projects"
            >
              Send
            </Button>
          </form>
          <div className="backdrop-blur-sm bg-opacity-10 p-16 bg-slate-400 border border-slate-600 rounded-2xl flex flex-col items-center gap-6">
            <Image src="/images/landing/contact/icon.svg" alt="Image for contact section" width={200} height={200} className="aspect-video object-contain" />
            <div className="flex gap-6">
              <Link href="https://www.instagram.com/bout.sh_">
                <Image src="/images/landing/social/insta.svg" alt="Instagram Logo" width={24} height={24} className="" />
              </Link>
              <Image src="/images/landing/social/tiktok.svg" alt="TikTok Logo" width={24} height={24} className="" />
              <Image src="/images/landing/social/linkedin.svg" alt="Linkedin Logo" width={24} height={24} className="" />
              <Image src="/images/landing/social/whats.svg" alt="Whatsapp Logo" width={24} height={24} className="" />
            </div>
            <Link href="mailto:contact@bout.sh" color="foreground" underline="always" className="flex items-end gap-3">
              <Image src="/images/landing/social/mail.svg" alt="Whatsapp Logo" width={20} height={20} className="" />
              contact@bout.sh
            </Link>
          </div>
        </div>
      </section>

      <footer className="w-full relative bg-background mt-36">
        <Image src="/images/landing/footer/vector.svg" alt="footer vector" width={1000} height={1000} className="absolute bottom-[calc(100%-2px)] h-36 w-full" />
        <h1> hola </h1>
      </footer>
    </>
  )
}

function ServiceCard({ icon, title, description }: { icon: string, title: string, description?: string }) {
  return (
    <Popover showArrow backdrop="blur">
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

function TechnologyCard({ icon, title, description, justify = "start" }: { icon: string, title: string, description: string, justify?: "start" | "end" }) {
  return (
    <div className={`flex items-center gap-4 p-4 rounded-lg bg-slate-400 bg-opacity-5 backdrop-blur-sm border border-slate-400 border-opacity-40 cursor-pointer w-full max-w-sm ${justify === "end" ? "self-end" : "self-start"}`}>
      <Image src={icon} alt={title} width={100} height={100} className="flex-shrink-0 w-24 h-auto" />
      <div className="flex flex-col gap-2">
        <h3 className="text-xl font-semibold">
          {title}
        </h3>
        <p className="text-base">
          {description}
        </p>
      </div>
    </div>
  )
}