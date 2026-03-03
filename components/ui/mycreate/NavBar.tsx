'use client'
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '../dropdown-menu'
import { Button } from '../button'
import { BadgeCheckIcon, BellIcon, CreditCardIcon, LogOutIcon, UserIcon } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from '../avatar'
import { Input } from '../input'
import { Field, FieldLabel } from '../field'
import { useRouter } from 'next/navigation'
import { signOut } from 'next-auth/react'
import { useSession } from 'next-auth/react'
import { useState } from 'react'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '../dialog'

const NavBar = () => {
    const router = useRouter()
    const { data: session, status } = useSession();
    const [open, setOpen] = useState(false)
    return (
        <div>
            <div className='flex items-center justify-between border bg-gray-200/20 backdrop-blur-md inset-shadow-sm rounded-b-sm p-2'>
                <div>
                    <h1 className='font-bold text-xl'>Menu</h1>
                </div>
                <div className='flex items-center'>
                    <Field orientation="horizontal">
                        <div>
                            <Input type="search" className='border border-white' placeholder="Search..." />
                        </div>
                        <div>
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button className='cursor-pointer' variant="ghost">view</Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent>
                                    <DropdownMenuGroup>
                                        <DropdownMenuItem onClick={() => setOpen(true)}>เพิ่ม</DropdownMenuItem>
                                        <DropdownMenuItem onClick={() => router.push('/Homepage/setting')}>ตั้งค่า</DropdownMenuItem>
                                    </DropdownMenuGroup>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>
                        <div>
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild ><Button variant="ghost" size="icon" className="rounded-full"><Avatar>
                                    <AvatarImage src="https://github.com/shadcn.png" alt="shadcn" />
                                    <AvatarFallback>LR</AvatarFallback>
                                </Avatar></Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                    <DropdownMenuGroup>
                                        <DropdownMenuItem>
                                            <UserIcon />
                                            {session?.user?.name}
                                        </DropdownMenuItem>
                                        <DropdownMenuItem>
                                            <BadgeCheckIcon />
                                            Account
                                        </DropdownMenuItem>
                                        <DropdownMenuItem>
                                            <CreditCardIcon />
                                            Billing
                                        </DropdownMenuItem>
                                        <DropdownMenuItem>
                                            <BellIcon />
                                            Notifications
                                        </DropdownMenuItem>
                                    </DropdownMenuGroup>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem onClick={() => signOut({ callbackUrl: '/' })}>
                                        <LogOutIcon />
                                        Sign Out
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>
                    </Field>
                </div>
            </div>
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogContent className="sm:max-w-md">
                    <form >
                        <DialogHeader>
                            <DialogTitle>เพิ่มข้อมูลผู้ป่วย</DialogTitle>
                            <DialogDescription>กรอกข้อมูลที่ต้องการเพิ่มลงในระบบ</DialogDescription>
                        </DialogHeader>
                        
                        <div className="grid gap-4 py-4">
                            <Field>
                                <FieldLabel className="text-sm font-medium">ชื่อ</FieldLabel>
                                <Input id="name" placeholder='ชื่อ' />
                            </Field>
                            <Field>
                                <FieldLabel className="text-sm font-medium">นามสกุล</FieldLabel>
                                <Input id="code" placeholder="นามสกุล" />
                            </Field>
                        </div>

                        <DialogFooter className="flex gap-2">
                            <Button type="button" variant="outline" onClick={() => setOpen(false)}>
                                ยกเลิก
                            </Button>
                            <Button type="submit">บันทึก</Button>
                        </DialogFooter>
                    </form>
                </DialogContent>
            </Dialog>
        </div >
    )
}

export default NavBar