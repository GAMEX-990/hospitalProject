'use client'
import { useSession } from 'next-auth/react';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const page = () => {
  const { data: session, status } = useSession();
  const route = useRouter();

  const invoices = [
    {
      invoice: "INV001",
      paymentStatus: "Paid",
      totalAmount: "$250.00",
      paymentMethod: "Credit Card",
    },
    {
      invoice: "INV002",
      paymentStatus: "Pending",
      totalAmount: "$150.00",
      paymentMethod: "PayPal",
    },
    {
      invoice: "INV003",
      paymentStatus: "Unpaid",
      totalAmount: "$350.00",
      paymentMethod: "Bank Transfer",
    },
    {
      invoice: "INV004",
      paymentStatus: "Paid",
      totalAmount: "$450.00",
      paymentMethod: "Credit Card",
    },
    {
      invoice: "INV005",
      paymentStatus: "Paid",
      totalAmount: "$550.00",
      paymentMethod: "PayPal",
    },
    {
      invoice: "INV006",
      paymentStatus: "Pending",
      totalAmount: "$200.00",
      paymentMethod: "Bank Transfer",
    },
    {
      invoice: "INV007",
      paymentStatus: "Unpaid",
      totalAmount: "$300.00",
      paymentMethod: "Credit Card",
    },
  ]

  useEffect(() => {
    if (status === 'unauthenticated') {
      route.push('/')
    }
  })
  return (
    status === 'authenticated' && session.user && (
      <div className='flex justify-center mt-8'>
        <div className='border border-neutral-500/30 bg-white/20 backdrop-blur-md rounded-md inset-shadow-sm w-280'>
          <div className='p-4'>
            <Table>
              <TableCaption>รายการผู้ป่วย</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">ลำดับ</TableHead>
                  <TableHead>ชื่อ</TableHead>
                  <TableHead>จำนวนเข้ามาใช้บริการ</TableHead>
                  <TableHead className="text-right">วันที่ใช้บริการล่าสุด</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {invoices.slice(0, 3).map((invoice) => (
                  <TableRow key={invoice.invoice}>
                    <TableCell className="font-medium">{invoice.invoice}</TableCell>
                    <TableCell>{invoice.paymentStatus}</TableCell>
                    <TableCell>{invoice.paymentMethod}</TableCell>
                    <TableCell className="text-right">{invoice.totalAmount}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
              <TableFooter>
                <TableRow>
                  <TableCell colSpan={3}>Total</TableCell>
                  <TableCell className="text-right">$2,500.00</TableCell>
                </TableRow>
              </TableFooter>
            </Table>
          </div>
        </div>
      </div>
    )
  )
}

export default page