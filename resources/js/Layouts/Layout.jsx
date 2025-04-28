import { Link } from "@inertiajs/react";
import React from "react";

export default function Layout({ children }) {
    return (
        <div>
            <header>
                <nav>
                    <Link href="" className="nav-link">Home</Link>
                    <Link href="/create" className="nav-link">Create</Link>
                </nav>
            </header>
            <main>{children}</main>
        </div>
    );
}
