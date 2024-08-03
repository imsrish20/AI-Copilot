import { Icons } from "@/components/ui/icons";

type AuthLayoutProps = {
    children: React.ReactNode;
};

export default function AuthLayout({ children }: AuthLayoutProps) {
    return (
        <div className="grid min-h-screen w-screen grid-cols-1 px-4 lg:grid-cols-3">
            <main className="col-span-2 flex items-center justify-center">
                {children}
            </main>
            <section className="col-span-1 hidden flex-col items-start justify-center gap-6 border-l border-border bg-muted/30 p-10 lg:flex">
                <Icons.logo as="h3" />
                <h2 className="text-3xl font-medium">
                    Get Ready to go on pilot mode with AI Copilot
                </h2>
                <p className="font-light text-muted-foreground">
                    Say goodbye to maual entries. Build and launch
                    your documents,sheets and presentation faster with our Copilot. Start today!
                
                </p>
            </section>
        </div>
    );
}
