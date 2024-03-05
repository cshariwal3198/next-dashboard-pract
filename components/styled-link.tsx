import Link from "next/link";
import { ReactNode } from "react";

export default function StyledLink({ children, href }: { children: ReactNode, href: string }) {
    return (
        <Link className="w-fit p-2 m-2 border-y-2 border-gray-600 rounded-xl text-center" href={href}>{children}</Link>
    )
}