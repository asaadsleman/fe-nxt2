import { StrictMode } from "react";
import { Navbar } from "../components/navbar";

export default function LoginLayout({ children }: { children: React.ReactNode }) {
    return (
        <section className="overflow-y-hidden">
            <Navbar />
            <br />
            {children}
        </section>
    )
}