import Logo from "@/app/_components/logo";

export default function Footer() {
  return (
    <footer className="shrink-0 bg-black text-white">
      <div className="container mx-auto px-4 py-4 sm:px-4 lg:px-4">
        <div className="flex items-center justify-between">
          <Logo variant="white" />
          <div className="text-sm opacity-80">
            <span className="font-semibold">support@reai.com</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
