import { AppPageShell } from "@/app/(app)/_components/page-shell";
import { UserNameForm } from "@/app/(app)/(user)/profile/settings/_components/user-name-form";
import { getUser } from "@/server/auth";
import { type User } from "next-auth";

/**
 * This is the settings page for the user profile.
 * @add more settings related components here
 */

export default async function SettingsPage() {
    const user = await getUser();

    return (
        <AppPageShell
            title="Settings"
            description="Here you can manage all the settings related to your profile."
        >
            <div className="mt-10 w-full">
                <UserNameForm user={user as User} />
            </div>
        </AppPageShell>
    );
}