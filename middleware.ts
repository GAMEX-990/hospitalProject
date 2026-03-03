import { withAuth } from "next-auth/middleware"

export default withAuth({
    pages: {
      signIn: "/", // ระบุ Path ของหน้า Login ที่คุณสร้าง (เช่น "/" หรือ "/login")
    },
  })
   
export const config = {
    matcher: ["/Homepage/:path*"]
}