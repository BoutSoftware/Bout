import { Popover, PopoverContent, PopoverTrigger } from "@nextui-org/react";
import Image from "next/image";

export function ServiceCard({ icon, title, description }: { icon: string, title: string, description?: string }) {
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