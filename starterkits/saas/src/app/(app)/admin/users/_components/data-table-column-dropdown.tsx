"use client";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuSeparator,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { MoreHorizontalIcon } from "lucide-react";
import { usersRoleEnum } from "@/server/db/schema";
import { toast } from "sonner";
import { type UsersData } from "@/app/(app)/admin/users/_components/columns";
import { useMutation } from "@tanstack/react-query";
import { updateRoleAction } from "@/server/actions/user";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { siteUrls } from "@/config/urls";

type Role = (typeof usersRoleEnum.enumValues)[number];

export function ColumnDropdown({ email, id, role }: UsersData) {
    const router = useRouter();

    const { mutateAsync, isPending } = useMutation({
        mutationFn: ({ role }: { role: Role }) =>
            updateRoleAction({ userId: id, role }),
        onSettled: () => {
            router.refresh();
        },
    });

    const onRoleChange = (role: Role) => {
        toast.promise(async () => await mutateAsync({ role }), {
            loading: "Updating user role...",
            success: "User role updated!",
            error: (error: { message: string }) =>
                error.message ?? "Failed to update user role.",
        });
    };

    const sendLoginLink = () => {
        toast.promise(
            async () => {
                await signIn("email", {
                    email,
                    callbackUrl: siteUrls.dashboard.home,
                    redirect: false,
                    test: "Testing data",
                });
            },
            {
                loading: "Sending verification link...",
                success: "Verification link sent to user's email!",
                error: "Failed to send verification link.",
            },
        );
    };

    return (
        <DropdownMenu modal={false}>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="h-8 w-8 p-0">
                    <span className="sr-only">Open menu</span>
                    <MoreHorizontalIcon className="h-4 w-4" />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-screen max-w-[12rem]">
                <DropdownMenuLabel>Actions</DropdownMenuLabel>

                <DropdownMenuSeparator />

                <DropdownMenuItem
                    onClick={async () => {
                        await navigator.clipboard.writeText(id);
                        toast("User ID copied to clipboard");
                    }}
                >
                    Copy user ID
                </DropdownMenuItem>

                <DropdownMenuItem onClick={sendLoginLink}>
                    Send verification link
                </DropdownMenuItem>

                <DropdownMenuSub>
                    <DropdownMenuSubTrigger>Edit role</DropdownMenuSubTrigger>
                    <DropdownMenuSubContent>
                        <DropdownMenuRadioGroup
                            value={role}
                            onValueChange={(r) => onRoleChange(r as Role)}
                        >
                            {usersRoleEnum.enumValues.map((currentRole) => (
                                <DropdownMenuRadioItem
                                    key={currentRole}
                                    value={currentRole}
                                    disabled={isPending}
                                >
                                    {currentRole}
                                </DropdownMenuRadioItem>
                            ))}
                        </DropdownMenuRadioGroup>
                    </DropdownMenuSubContent>
                </DropdownMenuSub>

                <DropdownMenuSeparator />

                <DropdownMenuItem
                    onClick={async () => {
                        toast("User deleted!", {
                            description: `${email} has been deleted.`,
                        });
                    }}
                    className="text-red-600"
                >
                    Delete
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
