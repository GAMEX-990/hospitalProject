'use client'
import { useSession } from 'next-auth/react';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Field, FieldLabel } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const page = () => {
  const { data: session, status } = useSession();
  const route = useRouter();
  useEffect(() => {
    if (status === 'unauthenticated') {
      route.push('/')
    }
  })
  return (
    status === 'authenticated' && session.user && (
      <div className='flex justify-center min-h-screen items-center'>
        <div className='border border-white/60 bg-white/20 backdrop-blur-md rounded w-'>
          <div className='p-8'>
            <div className='flex gap-8'>
              <Field>
                <FieldLabel htmlFor='first-name'>
                  ชื่อ <span className='text-red-500'>*</span>
                </FieldLabel>
                <Input id='first-name' placeholder='กรอกชื่อ'></Input>
              </Field>

              <Field>
                <FieldLabel htmlFor='last-name'>
                  นามสกุล <span className='text-red-500'>*</span>
                </FieldLabel>
                <Input id='last-name' placeholder='กรอกนามสกุล'></Input>
              </Field>
            </div>
            <Field>
              <FieldLabel htmlFor='age'>
                อายุ <span className='text-red-500'>*</span>
              </FieldLabel>
              <Input id='age' className='max-w-[185px]' placeholder='กรอกอายุ'></Input>
            </Field>
          </div>
        </div>
      </div>
    )
  )
}

export default page