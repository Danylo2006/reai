"use client";
import { Button } from "@/components/ui/button";
import Logo from "@/app/_components/logo";
import Link from "next/link";
import { CircleUser } from "lucide-react";

export default function Header() {
  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Navigation */}
          <nav className="hidden items-center space-x-8 md:flex">
            <Logo />
            <Link
              href="/simulator"
              className="text-sm font-medium text-gray-700 transition-colors hover:text-black"
            >
              Simulator
            </Link>
            {/* <Link
              href="#"
              className="text-sm font-medium text-gray-700 transition-colors hover:text-black"
            >
              Resources
            </Link> */}
          </nav>

          <div className="flex items-center justify-between space-x-4">
            {/* Login and Sign up */}
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" className="text-gray-700">
                Log in
              </Button>
              <Button
                size="sm"
                className="rounded-full bg-black px-6 text-white hover:bg-gray-800"
              >
                Sign up
              </Button>
            </div>
            {/** Account */}
            <div>
              <CircleUser className="h-7 w-7 text-gray-700" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
