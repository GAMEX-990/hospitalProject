'use client'
import { Button } from '@/components/ui/button'
import { Field, FieldLabel } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { Hospital } from 'lucide-react'
import { use, useState } from 'react'
import { signIn } from 'next-auth/react'
import { toast } from 'sonner'
import { Spinner } from '@/components/ui/spinner'
const page = () => {
    const [Input_username, SetInput_username] = useState("");
    const [Input_password, SetInput_password] = useState("");
    const [loader ,Setloader] = useState(false);
    const Singin = async () => {
        if (!Input_username || !Input_password) {
            toast.error("กรุณากรอกข้อมูลไม่ครบถ้วน")
            return;
        }
        try {
            Setloader(true);
            const Login = await signIn('credentials', {
                redirect: false,
                code:Input_username,
                password:Input_password
            })
            if (Login?.error) {
                toast.error(Login.error)
            } else {
                 window.location.href = '/Homepage'
            }
        } catch (error) {
            console.log(error)
        } finally {
            Setloader(false);
        }
    }
    return (
        <div className='min-h-screen flex items-center justify-center'>
            <div className='border-2 border-white/60 backdrop-blur-md bg-white/20 rounded-2xl inset-shadow-sm  w-100'>
                <div className='flex flex-col justify-center items-center text-white p-8'>
                    <Hospital size={40} />
                    <h1 className='text-3xl font-bold'>LOGIN</h1>
                    <form onSubmit={(e) => e.preventDefault()} className='w-60'>
                        <Field>
                            <FieldLabel className='text-gray-500' htmlFor='input-username'>
                                ผู้ใช้งาน <span className='text-red-500'>*</span>
                            </FieldLabel>
                            <Input className='border border-white text-gray-500' id='input-username' value={Input_username} onChange={(e) => SetInput_username(e.target.value)} placeholder='กรอกผู้ใช้งาน' />
                            <FieldLabel className='text-gray-500' htmlFor='input-password'>
                                รหัสผ่าน <span className='text-red-500'>*</span>
                            </FieldLabel>
                            <Input className='border border-white text-gray-500' id='input-password' value={Input_password} onChange={(e) => SetInput_password(e.target.value)} type='password' placeholder='กรอกรหัสผ่าน' />
                            <Button onClick={() => Singin()} type="submit" disabled={loader} className='text-black cursor-pointer' variant="secondary">{loader ? <Spinner/> : "เข้าสู่ระบบ" }</Button>
                        </Field>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default page