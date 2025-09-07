"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Logo from "@/app/_components/logo";

export default function Header() {
  return (
    <header className="shrink-0 border-b border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-18 items-center justify-between">
          {/* Navigation */}

          <nav className="hidden items-center space-x-10 md:flex">
            <Logo />
            <Link
              href="/simulator"
              className="text-base font-medium text-gray-700 transition-colors hover:text-black"
            >
              Simulator
            </Link>
            <Link
              href="#"
              className="text-base font-medium text-gray-700 transition-colors hover:text-black"
            >
              Resources
            </Link>
          </nav>

          <div className="flex items-center justify-between space-x-5">
            {/* Login and Sign up */}
            <div className="flex items-center space-x-5">
              <Button
                variant="ghost"
                size="lg"
                className="text-base text-gray-700"
              >
                Log in
              </Button>
              <Button
                size="lg"
                className="rounded-full bg-black px-10 text-base text-white hover:bg-gray-800"
              >
                Sign up
              </Button>
            </div>
            {/** Account */}
          </div>
        </div>
      </div>
    </header>
  );
}
