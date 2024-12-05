"use client";
import Image from "next/image";

export function TechnologyCard({ icon, title, description, justify = "start" }: { icon: string; title: string; description: string; justify?: "start" | "end"; }) {
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
    );
}
