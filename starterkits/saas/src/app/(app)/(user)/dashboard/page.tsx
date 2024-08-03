import { AppPageShell } from "@/app/(app)/_components/page-shell";
import { dashboardPageConfig } from "@/app/(app)/(user)/dashboard/_constants/page-config";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import GridOnOutlinedIcon from '@mui/icons-material/GridOnOutlined';
import CoPresentOutlinedIcon from '@mui/icons-material/CoPresentOutlined';
export default function DashboardPage() {
    return (
        <AppPageShell
            title={dashboardPageConfig.title}
            description={dashboardPageConfig.description}
        >
            <div className="grid gap-6">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">
                                Create New
                            </CardTitle>
                            <ArticleOutlinedIcon/>
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold"> Document</div>
                            
                            <p className="text-xs text-muted-foreground">
                            with AI Copilot
                            </p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">
                                Create New
                            </CardTitle>
                            <GridOnOutlinedIcon/>
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">Sheet</div>
                            <p className="text-xs text-muted-foreground">
                                with AI Copilot
                            </p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">
                                Create New
                            </CardTitle>
                            <CoPresentOutlinedIcon />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">Presentation</div>
                            <p className="text-xs text-muted-foreground">
                            with AI Copilot
                            </p>
                        </CardContent>
                    </Card>
                </div>

                <div className="flex flex-col min-h-10 w-full items-center justify-center p-4">
    <div className="flex w-full justify-between items-center bg-gray-100 p-2 rounded-t-md">
        <div className="text-sm font-normal">
            Recently Created
        </div>
    </div>
    <div className="flex min-h-44 w-full items-center justify-center border-2 border-dashed border-border p-4 rounded-b-md">
        <p className="text-xs text-muted-foreground">
            Your Content here, Above is a dummy data
        </p>
    </div>
</div>

            </div>
        </AppPageShell>
    );
}
