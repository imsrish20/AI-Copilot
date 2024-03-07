import { AppPageLoading } from "@/app/(app)/_components/page-loading";
import { Skeleton } from "@/components/ui/skeleton";
import { orgMembersInvitePageConfig } from "@/app/(app)/(user)/org/members/invite/_constants/page-config";

export default function InviteMembersLoading() {
    return (
        <AppPageLoading
            title={orgMembersInvitePageConfig.title}
            description={orgMembersInvitePageConfig.description}
        >
            <Skeleton className="h-96 w-full" />
        </AppPageLoading>
    );
}
