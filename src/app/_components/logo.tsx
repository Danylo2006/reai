import Link from "next/link";

interface LogoProps {
  variant?: "default" | "white";
}

export default function Logo({ variant = "default" }: LogoProps) {
  return (
    <Link href="/">
      <div className="flex items-center space-x-2">
        <div className="flex h-8 w-8 items-center justify-center">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M12 2L22 12L12 22L2 12L12 2Z"
              fill={variant === "default" ? "black" : "white"}
            />
          </svg>
        </div>
        <span
          className={`text-2xl font-bold ${variant === "default" ? "text-black" : "text-white"}`}
        >
          reai
        </span>
      </div>
    </Link>
  );
}
