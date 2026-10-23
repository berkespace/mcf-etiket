import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Müşteri Girişi",
};

export default function LoginPage() {
  return (
    <main className="mx-auto flex min-h-[60vh] max-w-lg flex-col justify-center px-6 py-20">
      <h1 className="text-3xl font-semibold tracking-tight">Müşteri Girişi</h1>
      <p className="mt-4 text-[15px] leading-7 text-muted">
        Sipariş ve teklif takibi için müşteri portalı hazırlanıyor. Bu sırada taleplerinizi
        info@mcfetiket.com adresine iletebilirsiniz.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex w-fit rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-white"
      >
        Ana sayfaya dön
      </Link>
    </main>
  );
}
