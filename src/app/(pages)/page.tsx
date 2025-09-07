import { HydrateClient } from "@/trpc/server";
import { Button } from "@/components/ui/button";
import Footer from "@/app/_components/landing/footer";
import TrustedBySection from "@/app/_components/landing/trustedBy";
import ProfileCard from "../_components/landing/profileCard";

// Hero Section Component
function HeroSection() {
  return (
    <div className="flex-1 py-6">
      {/* Main content container */}
      <div className="grid h-full items-center gap-12 lg:grid-cols-2">
        {/* Left column - title, subtitle, and action buttons */}
        <div className="space-y-8 border-4 border-gray-200 px-20 py-6">
          <div className="space-y-6">
            <h1 className="text-4xl leading-tight text-black sm:text-5xl lg:text-7xl">
              <span className="font-serif font-bold">A new way</span>
              <br />
              <span className="font-serif italic">to work.</span>
            </h1>
            <p className="max-w-lg text-xl leading-relaxed text-gray-600">
              Build, manage and grow your flexible workforce — all in one place.
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <Button
              size="2xl"
              className="rounded-full bg-blue-400 px-8 py-3 text-base text-white hover:bg-blue-500"
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
        <div className="relative hidden h-full border-4 border-gray-200 lg:block">
          <ProfileCard
            image="/landing/images/woman-smiling.png"
            leftGradient="#ffeca1"
            rightGradient="#f0efed"
            className="absolute top-[20%] right-[25%] lg:top-[20%] lg:right-[30%]"
            size={{ width: 140, height: 140 }}
          />
          <ProfileCard
            image="/landing/images/woman.png"
            leftGradient="#ffeca1"
            rightGradient="#f0efed"
            className="absolute top-[25%] right-[20%] lg:top-[50%] lg:right-[25%]"
            size={{ width: 160, height: 160 }}
          />
          <ProfileCard
            image="/landing/images/man.png"
            leftGradient="#ffeca1"
            rightGradient="#f0efed"
            className="absolute top-[35%] right-[55%] lg:top-[40%] lg:right-[65%]"
          />
        </div>
      </div>
    </div>
  );
}

export default async function LandingPage() {
  return (
    <HydrateClient>
      <div className="flex h-full flex-col bg-white">
        {/* Main Content */}
        <main className="container mx-auto mb-22 flex min-h-0 flex-1 flex-col justify-between overflow-hidden px-4 sm:px-6 lg:px-8">
          <HeroSection />
          <TrustedBySection />
        </main>
        <Footer />
      </div>
    </HydrateClient>
  );
}
