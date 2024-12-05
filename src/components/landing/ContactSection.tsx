"use client"

import { Button, Input, Link, Textarea } from "@nextui-org/react";
import Image from "next/image";
import styles from "@/styles/HomePage.module.css";
import React, { useState } from 'react'

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const resBody = await fetch("/api/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(form)
    })
      .then(res => res.json())
      .catch(err => console.error(err))

    if (resBody.code !== "OK") {
      console.error(resBody)
      alert("An error occurred while sending the message. Please try again later.")
      return
    }

    alert("Message sent successfully! We'll follow up with you shortly.")
    setForm({
      name: "",
      email: "",
      company: "",
      message: ""
    })
  }

  return (
    <section className="flex flex-col w-full px-8 py-16 justify-center items-center gap-12 relative" id="contact">
      <h2 className={`text-4xl sm:text-5xl font-bold text-center ${styles.textGradient}`}>
        Contact Us,
        <br />
        Land Your Idea For Free!
      </h2>

      <div className="flex flex-col-reverse sm:flex-row items-center gap-12 w-full justify-center">
        <form className="w-full max-w-sm flex flex-col items-center gap-4" onSubmit={handleSubmit}>
          <Input
            label="Your Name"
            placeholder="How should we call you?"
            classNames={{
              inputWrapper: "backdrop-blur-sm !bg-opacity-10 !bg-slate-400 border border-slate-600"
            }}
            onValueChange={(value) => setForm({ ...form, name: value })}
          />
          <Input
            label="Email"
            placeholder="you@example.com"
            classNames={{
              inputWrapper: "backdrop-blur-sm !bg-opacity-10 !bg-slate-400 border border-slate-600"
            }}
            onValueChange={(value) => setForm({ ...form, email: value })}
          />
          <Input
            label="Company"
            placeholder="Example Inc."
            classNames={{
              inputWrapper: "backdrop-blur-sm !bg-opacity-10 !bg-slate-400 border border-slate-600"
            }}
            onValueChange={(value) => setForm({ ...form, company: value })}
          />
          <Textarea label="Message"
            placeholder="Write your message"
            classNames={{
              inputWrapper: "backdrop-blur-sm !bg-opacity-10 !bg-slate-400 border border-slate-600"
            }}
            onValueChange={(value) => setForm({ ...form, message: value })}
          />
          <Button
            color="default"
            size="lg"
            className="backdrop-blur-sm bg-opacity-10 px-24 bg-slate-400 border border-slate-600"
            endContent={<span className="material-symbols-outlined">send</span>}
            type="submit"
          >
            Send
          </Button>
        </form>
        <div className="backdrop-blur-sm bg-opacity-10 p-16 bg-slate-400 border border-slate-600 rounded-2xl flex flex-col items-center gap-4">
          <Image src="/images/landing/contact/icon.svg" alt="Image for contact section" width={200} height={200} className="aspect-video object-contain" />
          <div className="flex gap-8 mt-4">
            <Link href="https://www.instagram.com/bout.sh_">
              <Image src="/images/landing/social/insta.svg" alt="Instagram Logo" width={24} height={24} className="" />
            </Link>
            <Image src="/images/landing/social/tiktok.svg" alt="TikTok Logo" width={24} height={24} className="" />
            <Link href="tel:4424587499">
              <Image src="/images/landing/social/linkedin.svg" alt="Linkedin Logo" width={24} height={24} className="" />
            </Link>
            <Link href="https://wa.me/524424587499">
              <Image src="/images/landing/social/whats.svg" alt="Whatsapp Logo" width={24} height={24} className="" />
            </Link>
          </div>
          <Link href="mailto:contact@bout.sh" color="foreground" underline="always" className="flex items-end gap-2">
            <Image src="/images/landing/social/mail.svg" alt="Whatsapp Logo" width={20} height={20} className="" />
            contact@bout.sh
          </Link>
        </div>
      </div>
    </section>
  )
}