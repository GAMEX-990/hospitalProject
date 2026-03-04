"use client"
import { Field, FieldLabel } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { ArrowLeft } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React from 'react'

const page = () => {
    const router = useRouter();
    return (
        <div>
            <div className='mt-4 ml-4'>
                <ArrowLeft onClick={() => router.push('/Homepage')} />
            </div>
            <div className='flex justify-center items-center min-h-screen'>
                <div className='border border-neutral-500/40 bg-white/20 backdrop-blur-md inset-shadow-sm rounded-sm w-250 mt-8'>
                    <div className='bg-neutral-400 w-full h-10 rounded-t-sm items-center flex'>
                        <h1 className='text-white pl-2'>เพิ่มผู้ป่วย</h1>
                    </div>
                    <div className='p-8'>
                        <Field>
                            <h1 className='font-bold'>ข้อมูลส่วนตัว</h1>
                            <div className='flex gap-10'>
                                <Field>
                                    <FieldLabel htmlFor='frist-name'>
                                        ชื่อ <span className='text-red-500'>*</span>
                                    </FieldLabel>
                                    <Input id='frist-name' type='text' placeholder='กรอกชื่อ' />
                                </Field>
                                <Field>
                                    <FieldLabel htmlFor='last-name'>
                                        นามสกุล <span className='text-red-500'>*</span>
                                    </FieldLabel>
                                    <Input id='last-name' type='text' placeholder='กรอกนามสกุล' />
                                </Field>
                                <Field>
                                    <FieldLabel htmlFor='age'>
                                        อายุ <span className='text-red-500'>*</span>
                                    </FieldLabel>
                                    <Input id='age' type='text' placeholder='กรอกอายุ' />
                                </Field>
                            </div>
                            <div className='flex gap-10'>
                                <Field>
                                    <FieldLabel htmlFor='nationality'>
                                        สัญชาติ <span className='text-red-500'>*</span>
                                    </FieldLabel>
                                    <Input id='nationality' type='text' placeholder='กรอกสัญชาติ' />
                                </Field>
                                <Field>
                                    <FieldLabel htmlFor='religion'>
                                        ศาสนา <span className='text-red-500'>*</span>
                                    </FieldLabel>
                                    <Input id='religion' type='text' placeholder='กรอกศาสนา' />
                                </Field>
                            </div>
                            <div>
                                <Field>
                                    <FieldLabel htmlFor='national'>
                                        เลขบัตรประชาชน <span className='text-red-500'>*</span>
                                    </FieldLabel>
                                    <Input id='national' type='text' placeholder='กรอกเลขบัตรประชาชน' />
                                </Field>
                            </div>
                            {/* ที่อยู่ตามทะเบียนบ้าน */}
                            <div>
                                <Field>
                                    <h1 className='font-bold'>ที่อยู่ตามทะเบียนบ้าน</h1>
                                    <div className='flex gap-10'>
                                        <Field>
                                            <FieldLabel htmlFor='house-number'>
                                                บ้านเลขที่ <span className='text-red-500'>*</span>
                                            </FieldLabel>
                                            <Input id='house-number' type='text' placeholder='กรอกบ้านเลขที่' />
                                        </Field>
                                        <Field>
                                            <FieldLabel htmlFor='village'>
                                                หมู่บ้าน <span className='text-red-500'>*</span>
                                            </FieldLabel>
                                            <Input id='village' type='text' placeholder='กรอกหมู่บ้าน' />
                                        </Field>
                                        <Field>
                                            <FieldLabel htmlFor='age'>
                                                ถนน
                                            </FieldLabel>
                                            <Input id='age' type='text' placeholder='กรอกถนน' />
                                        </Field>
                                    </div>

                                    <div className='flex gap-10'>
                                        <Field>
                                            <FieldLabel htmlFor='alley'>
                                                ตรอก/ซอย <span className='text-red-500'>*</span>
                                            </FieldLabel>
                                            <Input id='alley' type='text' placeholder='กรอกตรอก/ซอย' />
                                        </Field>
                                        <Field>
                                            <FieldLabel htmlFor='district'>
                                                ตำบล <span className='text-red-500'>*</span>
                                            </FieldLabel>
                                            <Input id='district' type='text' placeholder='กรอกตำบล' />
                                        </Field>
                                        <Field>
                                            <FieldLabel htmlFor='canton'>
                                                อำเภอ/เขต <span className='text-red-500'>*</span>
                                            </FieldLabel>
                                            <Input id='canton' type='text' placeholder='กรอกตรอก/ซอย' />
                                        </Field>
                                    </div>
                                    <div className='flex gap-10'>
                                        <Field>
                                            <FieldLabel htmlFor='province'>
                                                จังหวัด <span className='text-red-500'>*</span>
                                            </FieldLabel>
                                            <Input id='province' type='text' placeholder='กรอกจังหวัด' />
                                        </Field>
                                        <Field>
                                            <FieldLabel htmlFor='zipcode'>
                                                รหัสไปรษณีย์ <span className='text-red-500'>*</span>
                                            </FieldLabel>
                                            <Input id='zipcode' type='text' placeholder='กรอกรหัสไปรษณีย์' />
                                        </Field>
                                    </div>
                                </Field>
                            </div>

                            {/* ที่อยู่ที่สามารถติดต่อได้ */}
                            <div>
                                <Field>
                                    <h1 className='font-bold'>ที่อยู่ที่สามารถติดต่อได้</h1>
                                    <div className='flex gap-10'>
                                        <Field>
                                            <FieldLabel htmlFor='house-number-connect'>
                                                บ้านเลขที่ <span className='text-red-500'>*</span>
                                            </FieldLabel>
                                            <Input id='house-number-connect' type='text' placeholder='กรอกบ้านเลขที่' />
                                        </Field>
                                        <Field>
                                            <FieldLabel htmlFor='village-connect'>
                                                หมู่บ้าน <span className='text-red-500'>*</span>
                                            </FieldLabel>
                                            <Input id='village-connect' type='text' placeholder='กรอกหมู่บ้าน' />
                                        </Field>
                                        <Field>
                                            <FieldLabel htmlFor='age-connect'>
                                                ถนน
                                            </FieldLabel>
                                            <Input id='age-connect' type='text' placeholder='กรอกถนน' />
                                        </Field>
                                    </div>

                                    <div className='flex gap-10'>
                                        <Field>
                                            <FieldLabel htmlFor='alley-connect'>
                                                ตรอก/ซอย <span className='text-red-500'>*</span>
                                            </FieldLabel>
                                            <Input id='alley-connect' type='text' placeholder='กรอกตรอก/ซอย' />
                                        </Field>
                                        <Field>
                                            <FieldLabel htmlFor='district-connect'>
                                                ตำบล <span className='text-red-500'>*</span>
                                            </FieldLabel>
                                            <Input id='district-connect' type='text' placeholder='กรอกตำบล' />
                                        </Field>
                                        <Field>
                                            <FieldLabel htmlFor='canton-connect'>
                                                อำเภอ/เขต <span className='text-red-500'>*</span>
                                            </FieldLabel>
                                            <Input id='canton-connect' type='text' placeholder='กรอกตรอก/ซอย' />
                                        </Field>
                                    </div>
                                    <div className='flex gap-10'>
                                        <Field>
                                            <FieldLabel htmlFor='province-connect'>
                                                จังหวัด <span className='text-red-500'>*</span>
                                            </FieldLabel>
                                            <Input id='province-connect' type='text' placeholder='กรอกจังหวัด' />
                                        </Field>
                                        <Field>
                                            <FieldLabel htmlFor='zipcode-connect'>
                                                รหัสไปรษณีย์ <span className='text-red-500'>*</span>
                                            </FieldLabel>
                                            <Input id='zipcode-connect' type='text' placeholder='กรอกรหัสไปรษณีย์' />
                                        </Field>
                                    </div>
                                </Field>
                            </div>

                            {/* โทรศัพท์ที่ติดต่อได้สะดวก */}
                            <div>
                                <Field>
                                    <h1 className='font-bold'>โทรศัพท์ที่ติดต่อได้สะดวก</h1>
                                    <div className='flex gap-10'>
                                        <Field>
                                            <FieldLabel htmlFor='frist-fathername'>
                                                ชื่อบิดา
                                            </FieldLabel>
                                            <Input id='frist-fathername' type='text' placeholder='กรอกชื่อ' />
                                        </Field>
                                        <Field>
                                            <FieldLabel htmlFor='last-fathername'>
                                                นามสกุล
                                            </FieldLabel>
                                            <Input id='last-fathername' type='text' placeholder='กรอกนามสกุล' />
                                        </Field>
                                    </div>

                                    <div className='flex gap-10'>
                                        <Field>
                                            <FieldLabel htmlFor='frist-mothername'>
                                                ชื่อมารดา
                                            </FieldLabel>
                                            <Input id='frist-mothername' type='text' placeholder='กรอกชื่อ' />
                                        </Field>
                                        <Field>
                                            <FieldLabel htmlFor='last-mothername'>
                                                นามสกุล
                                            </FieldLabel>
                                            <Input id='last-mothername' type='text' placeholder='กรอกนามสกุล' />
                                        </Field>
                                    </div>
                                    <div className='flex gap-10'>
                                        <Field>
                                            <FieldLabel htmlFor='frist-spousename'>
                                                ชื่อคู่สมรส ของผู้ป่วย
                                            </FieldLabel>
                                            <Input id='frist-spousename' type='text' placeholder='กรอกชื่อ' />
                                        </Field>
                                        <Field>
                                            <FieldLabel htmlFor='last-spousename'>
                                                นามสกุล
                                            </FieldLabel>
                                            <Input id='last-spousename' type='text' placeholder='กรอกนามสกุล' />
                                        </Field>
                                    </div>
                                    <div className='flex gap-10'>
                                        <Field>
                                            <FieldLabel htmlFor='name-connect'>
                                                ชื่อผู้ติดต่อได้ <span className='text-red-500'>*</span>
                                            </FieldLabel>
                                            <Input id='name-connect' type='text' placeholder='กรอกชื่อ' />
                                        </Field>
                                        <Field>
                                            <FieldLabel htmlFor='relevant'>
                                                เกี่ยวข้องเป็น <span className='text-red-500'>*</span>
                                            </FieldLabel>
                                            <Input id='relevant' type='text' placeholder='กรอกข้อมูล' />
                                        </Field>
                                    </div>
                                    <div className='flex gap-10'>
                                        <Field>
                                            <FieldLabel htmlFor='phone-numder'>
                                                เบอร์ติดต่อ <span className='text-red-500'>*</span>
                                            </FieldLabel>
                                            <Input id='phone-numder' type='text' placeholder='กรอกเบอร์' />
                                        </Field>
                                    </div>
                                </Field>
                            </div>
                        </Field>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page