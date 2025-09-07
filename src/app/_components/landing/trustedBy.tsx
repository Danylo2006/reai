import { cn } from "@/lib/utils";

export default function TrustedBySection({
  className,
}: {
  className?: string;
}) {
  return (
    <div
      className={cn("shrink-0 rounded-full py-16 backdrop-blur-md", className)}
    >
      <div className="mb-4 text-center">
        <p className="text-gray-600">
          Trusted by <span className="font-semibold text-black">800K+</span>{" "}
          freelancers and <span className="font-semibold text-black">20K+</span>{" "}
          teams like
        </p>
      </div>

      <div className="flex items-center justify-center space-x-12 opacity-60">
        <div className="text-2xl font-bold text-gray-400">Canva</div>
        <div className="text-2xl font-bold text-gray-400">APPSUMO</div>
        <div className="text-2xl font-bold text-gray-400">BARREL</div>
        <div className="text-2xl font-bold text-gray-400">WORKSHOP BUILT</div>
        <div className="text-2xl font-bold text-gray-400">Relume</div>
        <div className="text-2xl font-bold text-gray-400">Spline</div>
      </div>
    </div>
  );
}
