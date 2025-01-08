"use client"
import Link from "next/link"
import { usePathname } from "next/navigation";
import { useState } from "react"

const navLink = [
    { name: "Home", href: "/" },
    { name: "Register", href: "/register" },
    { name: "Login", href: "/login" },
    { name: "Forgot Password", href: "/forgot-password" }
]

export default function AuthLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();
    const [input, setInput] = useState("")
    return (
        <div className="flex flex-col items-center space-y-6 p-6">

            <div className="flex flex-row gap-4 bg-blue-900 px-6 py-4 text-lg rounded-xl border border-white shadow-lg">
                {navLink.map((link) => {
                    const isActive = pathname === link.href || (pathname.startsWith(link.href) && link.href !== "/");
                    return (
                        <Link href={link.href} key={link.name} className={isActive ? "bg-blue-400 text-white px-3 py-1 rounded-md" : "text-white hover:text-blue-400 px-3 py-1 rounded-md"}>
                            {link.name}
                        </Link>
                    );
                })}
            </div>
            <div>
                <input value={input} onChange={(e) => setInput(e.target.value)} className="text-black" placeholder="your input field..."></input>
            </div>
            <div className="container max-w-sm rounded-lg">{children}</div>
        </div>
    )
}