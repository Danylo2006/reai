"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import Logo from "@/app/_components/logo";

export default function Header() {
  const pathname = usePathname();
  const isLandingPage = pathname === "/";

  return (
    <header
      className={`${
        isLandingPage ? "absolute top-0 right-0 left-0 z-50" : "relative"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-18 items-center justify-between">
          {/* Navigation */}

          <div className="flex items-center md:hidden">
            <Logo />
          </div>

          <nav className="hidden items-center space-x-10 md:flex">
            <Logo />
            <Link
              href="/dashboard"
              className="text-base font-medium text-gray-700 transition-colors hover:text-black"
            >
              Dashboard
            </Link>
            <Link
              href="/simulator"
              className="text-base font-medium text-gray-700 transition-colors hover:text-black"
            >
              Simulator
            </Link>
          </nav>

          <div className="flex items-center justify-between space-x-5">
            {/* Login and Sign up */}
            <div className="flex items-center space-x-3 sm:space-x-5">
              <Button
                variant="ghost"
                size="sm"
                className="md:size-lg rounded-full text-sm text-gray-700 sm:text-base"
              >
                Log in
              </Button>
              <Button
                size="sm"
                className="md:size-lg rounded-full bg-black px-4 text-sm text-white hover:bg-gray-800 sm:px-6 md:px-10 md:text-base"
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
