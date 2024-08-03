import { Chip } from "@nextui-org/react";
import styles from "@/styles/HomePage.module.css";

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

export default function AboutUsSection() {
  return (
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
  )
}
