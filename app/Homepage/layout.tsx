import NavBar from "@/components/ui/mycreate/NavBar"
import "../globals.css";
export default function ({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <NavBar/>
            {children}
        </div>
    )
}