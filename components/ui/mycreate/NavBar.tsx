'use client'
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '../dropdown-menu'
import { Button } from '../button'
import { BadgeCheckIcon, BellIcon, CreditCardIcon, LogOutIcon, UserIcon } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from '../avatar'
import { Input } from '../input'
import { Field } from '../field'
import { useRouter } from 'next/navigation'
import { signOut } from 'next-auth/react'
import { useSession } from 'next-auth/react'

const NavBar = () => {
    const router = useRouter()
    const { data: session, status } = useSession();
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
                                        <DropdownMenuItem onClick={() => router.push('/Homepage/setting')}>Settings</DropdownMenuItem>
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
        </div >
    )
}

export default NavBar