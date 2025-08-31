import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { CircleCheck } from "lucide-react";

type AuthShellProps = {
  title: string;
  subtitle?: string;
  children: ReactNode;
  footer?: ReactNode;
  className?: string;
};

export function AuthContainer({
  title,
  subtitle,
  children,
  footer,
  className,
}: AuthShellProps) {
  return (
    <main className={cn("min-h-screen bg-[#f3f4f6] p-4 md:p-8", className)}>
      <div className="mx-auto grid max-w-5xl gap-6 rounded-3xl border bg-white p-4 md:grid-cols-2 md:p-6">
        {/* Left: Form column */}
        <section className="flex flex-col justify-between rounded-2xl px-3 py-6 lg:p-10">
          <div className="space-y-6">
            <div className="space-y-1">
              <h1 className="text-pretty text-2xl font-semibold leading-7 text-templateBrown sm:text-3xl">
                {title}
              </h1>
              {subtitle ? (
                <p className="text-[13px] leading-[1.5] tracking-wide font-light text-neutral-500">
                  {subtitle}
                </p>
              ) : null}
            </div>

            <hr className="border-neutral-200" />

            <Card className="border-0 shadow-none">
              <CardContent className="p-0">{children}</CardContent>
            </Card>
          </div>

          {footer ? (
            <div className="mt-8 text-center text-sm text-neutral-600">
              {footer}
            </div>
          ) : null}
        </section>

        {/* Right: Visual column (decorative) */}
        <section className="rounded-2xl">
          <div className="relative h-[420px] w-full overflow-hidden rounded-xl sm:h-full">
            <Image
              src="/banners/12260.jpg"
              alt=""
              fill
              className="object-cover"
              priority
            />
            <div className="absolute text-white flex items-end justify-start p-5 inset-0 bg-gradient-to-t from-black via-black/25 to-transparent">
              <ul className="space-y-4">
                {[
                  "Premiun quality",
                  "Crafted To Last",
                  "Handcrafted by Real Artisans",
                  "No Shortcuts, No Compromises",
                ].map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-2 font-extralight text-[16px]"
                  >
                    <CircleCheck size={20} strokeWidth={1.5} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <Link href={"/"} className="block absolute top-5 left-5">
              <Image
                src={"/Logo/artisan_hide.webp"}
                alt="Artisan Hide"
                width={200}
                height={200}
                className={`h-9 lg:h-10 transition-all ease-in-out duration-300 w-auto object-contain filter invert brightness-0`}
              />
            </Link>
          </div>
        </section>
      </div>

      {/* Footer links */}
      <nav className="mx-auto mt-6 flex max-w-5xl justify-center gap-6 text-xs text-neutral-500">
        <Link href="/policy/privacy-policy" className="hover:text-[#4f3424]">
          Privacy
        </Link>
        <Link
          href="/policy/terms-and-conditions"
          className="hover:text-[#4f3424]"
        >
          Terms
        </Link>
        <Link href="/contact" className="hover:text-[#4f3424]">
          Support
        </Link>
      </nav>
    </main>
  );
}
