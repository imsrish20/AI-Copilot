import Link from "next/link";
import { WebHeaderNav } from "@/app/(web)/_components/header-nav";
import { Icons } from "@/components/ui/icons";
import { siteUrls } from "@/config/urls";
import { ThemeToggle } from "@/app/(web)/_components/theme-toggle";
import { HeaderAuth } from "@/app/(web)/_components/header-auth";
import { Suspense } from "react";

export function WebHeader() {
    return (
        <header className="relative flex h-24 w-screen items-center px-4 sm:px-12">
            <Link
                href={siteUrls.home}
                className="absolute left-4 z-10 transition-transform  hover:scale-90 sm:left-12"
            >
                <Icons.logo />
            </Link>

            <div className="absolute left-0 right-0 mx-auto ">
                <WebHeaderNav />
            </div>

            <div className="absolute right-4 flex items-center space-x-2 sm:right-12">
                <ThemeToggle />
                <Suspense
                    fallback={
                        <div className="rounded-md bg-secondary px-4 py-2">
                            Loading...
                        </div>
                    }
                >
                    <HeaderAuth />
                </Suspense>
            </div>
        </header>
    );
}
