import { Navbar } from "../components/navbar";
import SideBar from "../components/sidebar";

export default function LoginLayout({ children }: { children: React.ReactNode }) {
    return (
        <section className="overflow-y-hidden">
            <Navbar />
            <br />
            <div className="flex flex-row px-40">
                <div className="w-48">
                    <SideBar />
                </div>
                <div>
                    {children}
                </div>
            </div>
        </section>
    )
}