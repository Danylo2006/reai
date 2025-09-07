import Image from "next/image";
import { cn } from "@/lib/utils";

interface ProfileCardProps {
  image: string;
  leftGradient: string;
  rightGradient: string;
  gradientDirection?: "left" | "right" | "top" | "bottom";
  size?: {
    width: number;
    height: number;
  };
  className?: string;
}

export default function ProfileCard({
  image,
  size = { width: 150, height: 150 },
  leftGradient,
  rightGradient,
  gradientDirection = "right",
  className,
}: ProfileCardProps) {
  return (
    <div className={cn("rounded-full p-1", className)}>
      <div className="rounded-full bg-white">
        <Image
          src={image}
          alt="Profile"
          width={size.width}
          height={size.height}
          className="rounded-full"
        />
      </div>
    </div>
  );
}
