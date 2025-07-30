'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

export function Links() {
    const pathname = usePathname();

    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link className={`${pathname === "/blog" ? 'active' : ''}`} href="/blog">Blog Page</Link>
                    </li>
                    <li>
                        <Link className={`${pathname === "/dashboard" ? 'active' : ''}`} href="/dashboard">Dashboard Page</Link>
                    </li>
                    <li>
                        <Link className={`${pathname === "/contact" ? 'active' : ''}`} href="/contact">Contact Page</Link>
                    </li>

                    <li>
                        <Link className={`${pathname === "/login" ? 'active' : ''}`} href="/login">Login Page</Link>
                    </li>
                </ul>
            </nav>

            

        </>
    );
}