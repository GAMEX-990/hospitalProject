import './stylesheet.css'
import NavBar from "@/components/ui/mycreate/NavBar"
export default function ({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <NavBar/>
            {children}
        </div>
    )
}