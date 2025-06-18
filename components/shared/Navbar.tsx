import { LogOutIcon, Settings, User } from 'lucide-react'
import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import Link from 'next/link'
import { ModeToggle } from '../Navbar/Theamchanger'
import { SidebarTrigger } from '../ui/sidebar'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between px-6 py-2'>
      <SidebarTrigger />
      <div className='flex items-center gap-4'>
        <Link href='/'>Dashboard</Link>
        <ModeToggle />
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Avatar>
              <AvatarImage src='https://github.com/fadil-mx.png' />
              <AvatarFallback>Fadil</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <User className='h-[1.2rem] w-[1.2rem] mr-2' />
              Profile
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Settings className='h-[1.2rem] w-[1.2rem] mr-2' />
              Settings
            </DropdownMenuItem>
            <DropdownMenuItem variant='destructive'>
              <LogOutIcon className='h-[1.2rem] w-[1.2rem] mr-2' />
              Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  )
}

export default Navbar
