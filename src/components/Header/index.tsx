'use client'

import Link from 'next/link'
import {
  Avatar,
  Chip,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from '@nextui-org/react'

import logoImg from '../../../public/logo.png'

export default function Header() {
  return (
    <Navbar className="h-32" isBordered>
      <NavbarBrand className="flex items-center justify-center">
        <Avatar src={logoImg.src} className="w-20 h-20 text-large" />

        <div className="md:flex">
          <p className="font-bold text-inherit text-md ml-4">
            LANCHONETE TORRE DE DAVI
          </p>

          <Chip className="ml-2" color="success">
            Aberto até as 23 horas
          </Chip>
        </div>
      </NavbarBrand>
    </Navbar>
  )
}
