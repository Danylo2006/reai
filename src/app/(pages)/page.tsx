import { HydrateClient } from "@/trpc/server";
import { Button } from "@/components/ui/button";
import TrustedBySection from "@/app/_components/landing/trustedBy";
import ProfileCard from "../_components/landing/ProfilePicture";
import GlassCard from "../_components/landing/GlassCard";
import { BadgeCheck, Mic, MessageSquare } from "lucide-react";

// Hero Section Component
function HeroSection() {
  return (
    <div className="flex-1 py-6">
      {/* Main content container */}
      <div className="grid h-full items-center gap-12 lg:grid-cols-2">
        {/* Left column - title, subtitle, and action buttons */}
        <div className="space-y-4 px-10 py-6">
          <div className="space-y-6">
            <h1 className="text-8xl leading-tight text-black">
              <span className="font-bold">A new way</span>
              <br />
              <span className="font-serif italic">to work.</span>
            </h1>
            <p className="max-w-lg text-3xl leading-relaxed text-gray-600">
              Build, manage and grow your flexible workforce — all in one place.
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <Button
              size="2xl"
              className="rounded-full bg-[#bb7ff6] px-10 py-4 text-white shadow-lg shadow-[#ffd1e6]/60 hover:bg-[#cba8ef] focus-visible:ring-2 focus-visible:ring-[#FFB0D4]"
            >
              Get started
            </Button>
            <Button
              variant="outline"
              size="2xl"
              className="rounded-full border-gray-300 bg-transparent px-8 py-3 text-base"
            >
              Request a demo
            </Button>
          </div>
        </div>

        {/* Right column*/}
        <div className="relative hidden h-full lg:block">
          {/* Main Profile + Glass Card Container */}
          <div className="absolute top-[15%] right-[10%]">
            <div className="relative">
              <ProfileCard
                image="/landing/images/woman-smiling.png"
                leftGradient="#ffeca1"
                rightGradient="#f0efed"
                size={{ width: 200, height: 200 }}
              />

              {/* Stacked glass cards anchored to the profile image */}
              <div className="absolute top-0 left-0 z-10 flex -translate-x-7/10 -translate-y-3/5 flex-col gap-5">
                {/* Pill with gradient icon */}
                <GlassCard className="h-[56px] w-[300px] rounded-full shadow-lg">
                  <div className="flex items-center gap-3 px-5 py-3 text-gray-900">
                    <div className="h-7 w-7 rounded-full bg-gradient-to-br from-fuchsia-400 to-blue-400" />
                    <span className="text-sm font-semibold">
                      Role‑play listing appointments
                    </span>
                  </div>
                </GlassCard>
                {/* Subtle pill with check */}
                <GlassCard className="h-[56px] w-[260px] rounded-full ring-1 ring-black/5">
                  <div className="flex items-center gap-3 px-5 py-3 text-gray-900">
                    <BadgeCheck className="h-5 w-5 text-emerald-600" />
                    <span className="text-sm font-semibold">
                      Objection handling coach
                    </span>
                  </div>
                </GlassCard>
              </div>
            </div>
          </div>
          <div className="absolute top-[55%] right-[30%]">
            <div className="relative">
              <ProfileCard
                image="/landing/images/woman.png"
                leftGradient="#ffeca1"
                rightGradient="#f0efed"
                size={{ width: 175, height: 175 }}
              />
              {/* Larger coach card with chips */}
              <GlassCard className="absolute top-1/2 right-0 z-10 h-[130px] w-[320px] translate-x-7/8 -translate-y-1/2 rounded-2xl">
                <div className="flex h-full flex-col justify-between p-4 text-gray-900">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-100">
                        <MessageSquare className="h-4 w-4 text-indigo-600" />
                      </div>
                      <span className="text-base font-semibold">
                        Instant feedback & scoring
                      </span>
                    </div>
                  </div>

                  <div className="mt-2 flex items-center gap-2">
                    <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-gray-200">
                      <div className="h-full w-3/4 rounded-full bg-gradient-to-r from-indigo-500 to-fuchsia-500"></div>
                    </div>
                    <span className="text-xs font-medium text-gray-600">
                      75%
                    </span>
                  </div>

                  <div className="mt-2 flex flex-wrap gap-2">
                    <span className="rounded-full bg-gray-100 px-2 py-0.5 text-[10px] font-medium text-gray-700">
                      Pace
                    </span>
                    <span className="rounded-full bg-gray-100 px-2 py-0.5 text-[10px] font-medium text-gray-700">
                      Filler words
                    </span>
                    <span className="rounded-full bg-gray-100 px-2 py-0.5 text-[10px] font-medium text-gray-700">
                      Tone
                    </span>
                  </div>
                </div>
              </GlassCard>
            </div>
          </div>
          <div className="absolute top-[30%] right-[60%]">
            <div className="relative">
              <ProfileCard
                image="/landing/images/man.png"
                leftGradient="#ffeca1"
                rightGradient="#f0efed"
              />
              {/* Small mic pill */}
              <GlassCard className="absolute bottom-0 left-0 z-10 translate-x-1/4 translate-y-1/2 rounded-full px-4 py-2 sm:translate-x-1/3 sm:translate-y-1/3 md:-translate-x-1/2 md:translate-y-1/2">
                <div className="flex items-center gap-2 text-gray-900">
                  <Mic className="h-7 w-7 text-rose-500" />
                  <span className="text-sm font-semibold">
                    Natural AI voice practice
                  </span>
                </div>
              </GlassCard>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default async function LandingPage() {
  return (
    <HydrateClient>
      <div className="relative flex h-full flex-col overflow-hidden bg-white">
        {/* Background gradient circle (positioned relative to viewport) */}
        <div className="pointer-events-none absolute -right-7/10 -bottom-1/4 z-0 h-[100vh] w-[100vw] rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(168,186,255,0.6),rgba(255,176,212,0.35)_45%,rgba(255,255,255,0)_70%)] blur-2xl" />
        <div className="pointer-events-none absolute right-3/5 bottom-1/4 z-0 h-[100vh] w-[100vw] rounded-full bg-[radial-gradient(circle_at_30%_50%,rgba(168,186,255,0.6),rgba(255,176,212,0.35)_45%,rgba(255,255,255,0)_90%)] blur-2xl" />

        {/* Main Content */}
        <main className="relative container mx-auto mt-[72px] flex min-h-0 flex-1 flex-col justify-between p-8 sm:px-6 lg:px-8">
          <HeroSection />
          <TrustedBySection />
        </main>
        {/* <Footer /> */}
      </div>
    </HydrateClient>
  );
}
