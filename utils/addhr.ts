'use server'
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";

export async function registerUser(prevState: any, from: FormData) {

    const Username = from.get("name") as string
    const Code = from.get("code") as string
    const password = from.get("password") as string
    const hashedPassword = await bcrypt.hash(password, 5);
 if (!Username || !Code || !password) {
    return  { success: false, message: "กรุณากรอกให้ข้อมูลให้ครบ" }
 }
    try {
        const newhr = await prisma.users.create({
            data: {
                name: Username,
                code: Code,
                password: hashedPassword,
            }
        })
        return { success: true, data: newhr, }
    } catch (error) {
        return  { success: false, message: "ไม่สามารถบันทึกได้" }
    }
}
