import Link from 'next/link'
import Image from 'next/image'
import prisma from '@/lib/prisma'

// export const revalidate = 3600; // revalidate every hour

async function getData () {

  const myusers = await prisma.newtableremote.findMany()
 
  return myusers
}

export default async function Home() {

  const users = await getData()

  return (
    <main className="flex flex-col items-center justify-between p-24">
      <Image
      src="/purplepin.png"
      width={24}
      height={24}
      alt="Picture of the regpin"
    />
     <div>RegPin Home Page </div> 

     <div>

     <ul className='mt-4 text-xs'>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
      </ul>

    </div>

     <Link href="/login" className='text-inherit text-sm pt-8 visited:text-inherit  hover:underline hover:text-rose-300'>Go to Login</Link>
     <Link href="/register" className='text-inherit text-sm pt-2 visited:text-inherit  hover:underline hover:text-rose-300'>Go to Register</Link>
    </main>
  )
}
