import { AppPageShell } from "@/app/(app)/_components/page-shell";
import { StatsCard } from "@/app/(app)/admin/dashboard/_components/stats-card";
import { adminDashConfig } from "@/app/(app)/admin/dashboard/_constants/page-config";
import { buttonVariants } from "@/components/ui/button";
import { siteUrls } from "@/config/urls";
import { DollarSignIcon, Users2Icon } from "lucide-react";
import Link from "next/link";

export default async function AdminDashPage() {
    return (
        <AppPageShell
            title={adminDashConfig.title}
            description={adminDashConfig.description}
        >
            <div className="grid w-full gap-8">
                <p className="font text-sm">
                    This a simple dashboard with Analytics, to see detailed
                    Analytics go to{" "}
                    <Link
                        href={siteUrls.admin.analytics}
                        className={buttonVariants({
                            variant: "link",
                            className: "px-0 underline",
                        })}
                    >
                        PostHog Dashboard
                    </Link>
                </p>

                <div className="grid grid-cols-3 gap-4">
                    <StatsCard
                        title="Total Users"
                        value="1000"
                        Icon={Users2Icon}
                        subText="+20.1% from last month"
                    />

                    <StatsCard
                        title="Total Revenue"
                        value="$10,000"
                        Icon={DollarSignIcon}
                        subText="+20.1% from last month"
                    />

                    <StatsCard
                        title="Total Subscriptions"
                        value="100"
                        Icon={DollarSignIcon}
                        subText="+20.1% from last month"
                    />
                </div>
            </div>
        </AppPageShell>
    );
}
