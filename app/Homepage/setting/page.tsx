'use client'
import { Button } from '@/components/ui/button'
import { Field, FieldDescription, FieldLabel } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { registerUser } from '@/utils/addhr'
import { ArrowLeft } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useActionState, useEffect, useState } from 'react'
import { toast } from 'sonner'

const page = () => {
  interface Menu {
    id: number
    name: string
  }
  const router = useRouter();
  const Menu: Menu[] = [{ id: 1, name: 'ทั่วไป' }, { id: 2, name: 'สิทธิ์การใช้งาน' }, { id: 3, name: 'เพิ่มบุคคลที่ใช้งานระบบ' }]
  const [activeMenu, setActiveMenu] = useState(3)
  const [password, setPassword] = useState("")
  const [Form_action, SetForm_action] = useActionState(registerUser, null)

  useEffect(() => {
    if (Form_action) {
      if (Form_action.success) {
        toast.success("บันทึกสำเร็จ!")
      } else {
        toast.error(Form_action.message)
      }
    }
  },[Form_action])

  return (
    <div>
      <div className='mt-4 ml-4'>
        <ArrowLeft onClick={() => router.push('/Homepage')} />
      </div>
      <div className='flex justify-center items-start gap-x-80 mt-10'>
        {/*กล่องเมนู*/}
        <div className='flex flex-col gap-2'>
          {Menu.map((menu) => (
            <div key={menu.id}>
              <h1 className={`${activeMenu === menu.id ? 'text-blue-500' : 'text-gray-500'} cursor-pointer`} onClick={() => setActiveMenu(menu.id)}>{menu.name}</h1>
            </div>
          ))}
        </div>
        {/*กล่องข้อมูล*/}
        <div className='border-2 border-gray-200 rounded-md w-200 p-4'>
          <div className={`${activeMenu === 1 ? '' : 'hidden'}`}>
            <h1 className='text-2xl font-bold'>ทั่วไป</h1>
          </div>
          <div className={`${activeMenu === 2 ? '' : 'hidden'}`}>
            <h1 className='text-2xl font-bold'>สิทธิ์การใช้งาน</h1>
          </div>
          <div className={`${activeMenu === 3 ? '' : 'hidden'}`}>
            <h1 className='text-2xl font-bold'>เพิ่มบุคคลที่ใช้งานระบบ</h1>
            <div>
              <form action={SetForm_action}>
                <Field>
                  <FieldLabel htmlFor='input-name'>ชื่อผู้ใช้งาน<span className='text-red-500'>*</span></FieldLabel>
                  <Input id='input-name' name="name" type='text' placeholder='กรอกชื่อผู้ใช้งาน' />
                  <FieldLabel htmlFor='input-code'>รหัสบุคคลที่ใช้งานระบบ <span className='text-red-500'>*</span></FieldLabel>
                  <Input id='code' type='text' name="code" placeholder='กรอกรหัสบุคคลที่ใช้งานระบบ' />
                  <FieldDescription>ตัวอย่าง HR-001</FieldDescription>
                  <FieldLabel htmlFor='input-password'>รหัสผ่าน <span className='text-red-500'>*</span></FieldLabel>
                  <Input className={`${password.length < 6 ? 'border-red-500' : 'border-green-500'}`} name="password" onChange={(e) => setPassword(e.target.value)} id='input-password' type='password' placeholder='กรอกรหัสผ่าน' />
                  <FieldDescription>รหัสผ่านอย่างน้อย 6 ตัวอักษร</FieldDescription>
                  <Button className='cursor-pointer' variant="default">เพิ่มบุคคลที่ใช้งานระบบ</Button>
                </Field>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page