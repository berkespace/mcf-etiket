import Image from "next/image";
import Link from "next/link";

export function Logo({ className = "h-12 w-auto" }: { className?: string }) {
  return (
    <Link href="/" className="inline-flex shrink-0 items-center" aria-label="MCF ETİKET">
      <Image src="/images/logo.png" alt="MCF" width={1611} height={691} className={className} priority />
    </Link>
  );
}
