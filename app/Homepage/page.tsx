'use client'
import { useSession } from 'next-auth/react';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
const page = () => {
  const { data: session, status } = useSession();
  const route = useRouter();
  useEffect(() => {
    if(status === 'unauthenticated'){
        route.push('/')
    }
  })
  return (
    status === 'authenticated' && session.user && (
      <div>
        {session?.user?.name}
      </div>
    )
  )
}

export default page