"use client";

import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Link } from '@nextui-org/react'
import Image from 'next/image'
import React from 'react'

export default function LandingHeader() {
  return (
    <Navbar className="w-full" classNames={{ wrapper: "max-w-full py-4 h-auto px-8" }}>
      <NavbarBrand className="flex items-center space-x-2">
        <Image src="/BoutLogoSolo.svg" alt="Logo" width={50} height={50} className="h-8 w-8" priority />
        <span className="text-2xl font-semibold">Bout</span>
      </NavbarBrand>

      <NavbarContent justify="end" className="items-start">
        <NavbarItem>
          <Link href="/home/#contact" color="foreground" underline="hover">Contact Us</Link>
        </NavbarItem>
        <NavbarItem className='h-6'>
          <Dropdown offset={20} showArrow placement="bottom-end">
            <DropdownTrigger className="cursor-pointer px-1">
              <span className="material-symbols-outlined">menu</span>
            </DropdownTrigger>
            <DropdownMenu>
              <DropdownItem href="/home/#services">Services</DropdownItem>
              <DropdownItem href="/home/#our-projects">Our Projects</DropdownItem>
              <DropdownItem href="/home/#about-us">About Us</DropdownItem>
              <DropdownItem href="/home/#contact">Contact Us</DropdownItem>
              <DropdownItem href="/home/#tech-toolbox">Tech Toolbox</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  )
}
