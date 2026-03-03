import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { PrismaAdapter } from '@auth/prisma-adapter'
import { prisma } from '@/lib/prisma'
import bcrypt from 'bcryptjs'

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: { //รับมาจาก หน้า Login เป็น credentials 
        code: {  type: 'text' },
        password: { type: 'password' },
      },
      async authorize(credentials,req) {
        if (!credentials) return null;
        const user = await prisma.users.findFirst({
          where: { code: credentials.code },
        })

        if (user &&(await bcrypt.compare(credentials.password, user.password))) {
          return {
            id: String(user.id),
            name: user.name,
            code: user.code
          }
        } else {
          throw new Error('ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง')
        }
      },
    })
  ],
  adapter: PrismaAdapter(prisma),
  session: {
    strategy: 'jwt' as const,
  },
  callbacks: {
    jwt: async ({ token, user }: any) => {
      if (user) {
        token.id = user.id
        token.code = user.code
      }
      return token
    },
    session: async ({ session, token }: any) => {
      if (session.user) {
        session.user.id = token.id
        session.user.code = token.code
      }
      return session
    }
  },
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }