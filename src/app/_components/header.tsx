"use client";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex h-10 w-full items-center justify-between bg-amber-100 p-4">
      <nav className="flex gap-4">
        <Link href="/">Home</Link>
        <Link href="/simulator">Simulator</Link>
      </nav>
    </header>
  );
}
