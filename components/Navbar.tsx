import Link from 'next/link'
import React from 'react'
import { LayoutGrid } from 'lucide-react';
import UserAccountMenu from './UserAccountMenu';
import { useSession } from 'next-auth/react';

const Navbar = () => {
  return (
    <div className='p-5'>
      <div className='bg-white p-3 px-6 w-full shadow-sm rounded border flex justify-between items-center lg:justify-end'>
        <div className='flex gap-4  lg:hidden'>
          <LayoutGrid className='' />
          <Link href="/dashboard" className='text-lg'>LexaTalk</Link>
        </div>
        <div>
          <UserAccountMenu />
        </div>
        
      </div>
    </div>
  )
}

export default Navbar