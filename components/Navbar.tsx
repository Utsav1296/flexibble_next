import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { NavLinks } from '@/constants'
import AuthProvider from './AuthProvider'

const Navbar = () => {
   const session = true

   return (
      <nav className='flexBetween navbar dark:bg-gray-900'>
         <div className="flex-1 flexStart gap-10">
            <Link href='/'>
               <Image
                  src='/logo.svg'
                  width={115}
                  height={43}
                  alt='flexible'
               />
            </Link>

            <ul className='xl:flex hidden text-small gap-7'>
               {NavLinks.map(link => (
                  <Link href={link.href} key={link.key}>
                     {link.text}
                  </Link>
               ))}
            </ul>
         </div>

         <div className="flexCenter gap-4">
            {session ? (
               <>
                  UserPhoto


                  <Link href='/create-project'>
                     Share Work
                  </Link>
               </>
            ) : (
               <AuthProvider />
            )

            }
         </div>

      </nav>
   )
}

export default Navbar