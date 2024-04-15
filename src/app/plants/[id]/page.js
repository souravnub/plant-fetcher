import { Button } from "@/components/ui/button";
import {
    CardTitle,
    CardDescription,
    CardHeader,
    CardContent,
    Card,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { getPlant } from "@/data/getPlant";
import Image from "next/image";
import BackButton from "./backButton";

export default async function SinglePlantPage({ params }) {
    const { common_name, scientific_name, family, default_image, description } =
        await getPlant(params.id);
    return (
        <main className="flex  w-full flex-col container">
            <div className="mb-5 flex items-center gap-4">
                <BackButton />
                <h1 className="flex-1 shrink-0 whitespace-nowrap text-xl font-semibold tracking-tight sm:grow-0">
                    {common_name}
                </h1>
            </div>
            <div className="flex gap-4 flex-col lg:flex-row ">
                <div className="flex flex-col gap-4 lg:flex-1">
                    <Card x-chunk="dashboard-07-chunk-0">
                        <CardHeader>
                            <CardTitle>Plant Details</CardTitle>
                            <CardDescription>
                                {scientific_name[0]}
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="grid gap-6">
                                <div className="grid gap-1">
                                    <span className="text-neutral-500 text-sm font-medium">
                                        Name
                                    </span>
                                    <p>{common_name}</p>
                                </div>
                                <div className="grid gap-1">
                                    <span className="text-neutral-500 text-sm font-medium">
                                        Description
                                    </span>
                                    <p className="text-sm">{description}</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                    <Card x-chunk="dashboard-07-chunk-1">
                        <CardHeader>
                            <CardTitle>Plant Family</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p>{family || "Unknown"}</p>
                        </CardContent>
                    </Card>
                </div>
                <Card
                    className="overflow-hidden"
                    x-chunk="dashboard-07-chunk-4">
                    <CardHeader>
                        <CardTitle>Plant Image</CardTitle>
                        <CardDescription>
                            Regular image of the plant under normal conditions
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="grid gap-2">
                            <Image
                                alt="Plant image"
                                className="aspect-square w-full rounded-md object-cover"
                                src={default_image.original_url}
                                width="300"
                                height="300"
                            />
                        </div>
                    </CardContent>
                </Card>
            </div>
        </main>
    );
}

function ChevronLeftIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round">
            <path d="m15 18-6-6 6-6" />
        </svg>
    );
}

function UploadIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="17 8 12 3 7 8" />
            <line x1="12" x2="12" y1="3" y2="15" />
        </svg>
    );
}
