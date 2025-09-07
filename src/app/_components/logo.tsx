import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/">
      <div className="flex items-center space-x-2">
        <div className="flex h-8 w-8 items-center justify-center">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M12 2L22 12L12 22L2 12L12 2Z" fill="black" />
          </svg>
        </div>
        <span className="text-xl font-bold text-black">Contra</span>
      </div>
    </Link>
  );
}
