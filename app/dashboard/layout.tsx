import { StrictMode } from "react";
import { Navbar } from "../components/navbar";

export default function LoginLayout({ children }: { children: React.ReactNode }) {
    return (
        <section>
            <Navbar />
            <br />
            {children}
        </section>
    )
}