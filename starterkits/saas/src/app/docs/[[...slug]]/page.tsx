import { notFound, redirect } from "next/navigation";
import { Toc } from "@/components/toc";
import { getMDXData } from "@/lib/mdx";

type DocsSlugPageProps = {
    params: {
        slug: string[];
    };
};

export async function getDocs() {
    const dir = "src/content/docs";
    return await getMDXData(dir);
}

export default async function DocsSlugPage({ params }: DocsSlugPageProps) {
    if (!params.slug) {
        return redirect("/docs/introduction");
    }

    const doc = (await getDocs()).find(
        (doc) => doc.metaData.slug === params.slug.join("/"),
    );

    if (!doc) {
        return notFound();
    }

    return (
        <>
            <article className=" w-full max-w-max py-10">
                <div className="space-y-2">
                    <h1 className="scroll-m-20 text-4xl font-semibold">
                        {doc.metaData.title}
                    </h1>
                    {doc.metaData.description && (
                        <p className="text-lg text-muted-foreground">
                            {doc.metaData?.description}
                        </p>
                    )}
                </div>
                {doc.content}
            </article>

            <Toc
                toc={doc.toc}
                wrapperClassName="max-w-48 w-full py-4 sticky top-16"
            />
        </>
    );
}