import { HydrateClient } from "@/trpc/server";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Star } from "lucide-react";
import Image from "next/image";

export default async function LandingPage() {
  return (
    <HydrateClient>
      <div className="min-h-screen bg-white">
        {/* Header */}
        <header className="border-b border-gray-200 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="flex h-8 w-8 items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2L22 12L12 22L2 12L12 2Z" fill="black" />
                  </svg>
                </div>
                <span className="text-xl font-bold text-black">Contra</span>
              </div>

              {/* Navigation */}
              <nav className="hidden items-center space-x-8 md:flex">
                <a
                  href="#"
                  className="text-sm font-medium text-gray-700 transition-colors hover:text-black"
                >
                  Platform
                </a>
                <a
                  href="#"
                  className="text-sm font-medium text-gray-700 transition-colors hover:text-black"
                >
                  Use cases
                </a>
                <a
                  href="#"
                  className="text-sm font-medium text-gray-700 transition-colors hover:text-black"
                >
                  Resources
                </a>
              </nav>

              <div className="flex items-center space-x-4">
                <div className="relative hidden sm:block">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                  <Input
                    placeholder="Explore the Contra network"
                    className="w-64 rounded-full border-gray-200 bg-gray-50 pl-10"
                  />
                </div>
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
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-start pb-8 pt-12">
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-3">
                <span className="text-sm font-medium text-black">
                  FOR HIRING
                </span>
                <div className="relative inline-flex h-6 w-11 items-center rounded-full bg-purple-500 transition-colors">
                  <span className="inline-block h-4 w-4 translate-x-6 transform rounded-full bg-white transition-transform" />
                </div>
              </div>
              <span className="text-sm font-medium text-gray-400">
                FOR FREELANCERS
              </span>
            </div>
          </div>

          {/* Hero Section */}
          <div className="relative py-12">
            {/* Main content container */}
            <div className="grid items-center gap-12 lg:grid-cols-2">
              {/* Left column - title, subtitle, and action buttons */}
              <div className="space-y-8">
                <div className="space-y-6">
                  <h1 className="text-6xl font-bold leading-tight text-black lg:text-7xl">
                    A new way
                    <br />
                    <span className="font-serif italic">to work.</span>
                  </h1>
                  <p className="max-w-lg text-xl leading-relaxed text-gray-600">
                    Build, manage and grow your flexible workforce — all in one
                    place.
                  </p>
                </div>

                <div className="flex flex-col gap-4 sm:flex-row">
                  <Button
                    size="lg"
                    className="rounded-full bg-purple-500 px-8 py-3 text-base text-white hover:bg-purple-600"
                  >
                    Get started
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="rounded-full border-gray-300 bg-transparent px-8 py-3 text-base"
                  >
                    Request a demo
                  </Button>
                </div>
              </div>

              {/* Right column - floating images contained within */}
              <div className="relative hidden h-96 lg:block">
                {/* Main Profile Card - 3D Design Support */}
                <div className="absolute right-12 top-8 max-w-xs rounded-2xl border border-gray-200 bg-white p-4 shadow-lg">
                  <div className="mb-3 flex items-center space-x-3">
                    <div className="h-12 w-12 rounded-full bg-gradient-to-br from-purple-400 to-pink-400">
                      <Image
                        src="/smiling-woman-glasses.png"
                        alt="Profile"
                        width={48}
                        height={48}
                        className="h-12 w-12 rounded-full object-cover"
                      />
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="h-3 w-3 rounded-full bg-blue-500"></div>
                      <span className="text-sm font-medium text-black">
                        3D Design Support
                      </span>
                    </div>
                  </div>
                </div>

                {/* Eric Profile Card */}
                <div className="absolute right-4 top-32 rounded-2xl border border-gray-200 bg-white p-4 shadow-lg">
                  <div className="mb-2 flex items-center space-x-3">
                    <div className="h-12 w-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600">
                      <Image
                        src="/professional-black-man.png"
                        alt="Eric"
                        width={48}
                        height={48}
                        className="h-12 w-12 rounded-full object-cover"
                      />
                    </div>
                    <div>
                      <div className="flex items-center space-x-2">
                        <span className="font-semibold text-black">Eric</span>
                        <Badge className="bg-yellow-100 px-2 py-0.5 text-xs text-yellow-800">
                          PRO
                        </Badge>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1 text-xs">
                    <Star className="h-3 w-3 text-purple-500" />
                    <span className="font-medium text-purple-600">
                      TOP INDEPENDENT
                    </span>
                  </div>
                </div>

                {/* Team Card */}
                <div className="absolute left-16 top-4 rounded-xl border border-gray-200 bg-white p-3 shadow-lg">
                  <div className="mb-2 text-xs text-gray-500">YOUR TEAM</div>
                  <div className="flex items-center space-x-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-500 text-xs font-semibold text-white">
                      C
                    </div>
                    <div className="flex -space-x-1">
                      <div className="h-6 w-6 rounded-full border-2 border-white bg-pink-400"></div>
                      <div className="h-6 w-6 rounded-full border-2 border-white bg-orange-400"></div>
                    </div>
                    <div className="h-8 w-8 rounded-full">
                      <Image
                        src="/professional-man-smiling.png"
                        alt="Team member"
                        width={32}
                        height={32}
                        className="h-8 w-8 rounded-full object-cover"
                      />
                    </div>
                  </div>
                </div>

                {/* Compliant Badge */}
                <div className="absolute bottom-12 left-4 rounded-xl border border-gray-200 bg-white p-3 shadow-lg">
                  <div className="flex items-center space-x-2">
                    <div className="flex h-4 w-4 items-center justify-center rounded-full bg-gray-200">
                      <div className="h-2 w-2 rounded-full bg-gray-600"></div>
                    </div>
                    <span className="text-sm font-medium text-black">
                      Compliant
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 py-16">
            <div className="mb-12 text-center">
              <p className="text-gray-600">
                Trusted by{" "}
                <span className="font-semibold text-black">800K+</span>{" "}
                freelancers and{" "}
                <span className="font-semibold text-black">20K+</span> teams
                like
              </p>
            </div>

            <div className="flex items-center justify-center space-x-12 opacity-60">
              <div className="text-2xl font-bold text-gray-400">Canva</div>
              <div className="text-2xl font-bold text-gray-400">APPSUMO</div>
              <div className="text-2xl font-bold text-gray-400">BARREL</div>
              <div className="text-2xl font-bold text-gray-400">
                WORKSHOP BUILT
              </div>
              <div className="text-2xl font-bold text-gray-400">Relume</div>
              <div className="text-2xl font-bold text-gray-400">Spline</div>
            </div>
          </div>
        </main>

        <footer className="bg-black text-white">
          <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L22 12L12 22L2 12L12 2Z" fill="white" />
                </svg>
                <span className="text-lg font-bold">Contra</span>
              </div>
              <div className="text-sm opacity-80">
                curated by <span className="font-semibold">Mobbin</span>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </HydrateClient>
  );
}
