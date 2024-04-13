import CustomPagination from "@/components/CustomPagination";
import PlantCard from "@/components/PlantCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

async function getPlantsData(page = 1) {
    const res = await fetch(
        `https://perenual.com/api/species-list?key=${process.env.API_KEY}&page=${page}`
    );
    const json = await res.json();
    return json;
}

export default async function Home({ searchParams }) {
    const page = searchParams["page"] ?? "1";
    const plantsData = await getPlantsData(page);
    const plants = plantsData.data;

    return (
        <>
            <div className="flex  space-x-2 max-w-md mx-auto">
                <div className="relative flex-grow">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                        type="search"
                        placeholder="Search plant..."
                        className="w-full rounded-lg bg-background pl-8"
                    />
                </div>
                <Button type="submit">Search</Button>
            </div>

            <div className="mt-5 flex gap-3 flex-wrap p-3 justify-center">
                {plants.map((plant) => {
                    return (
                        <PlantCard
                            key={plant.id}
                            className={""}
                            commonName={plant.common_name}
                            scientificNames={plant.scientific_name}
                            image={plant.default_image?.original_url}
                        />
                    );
                })}
            </div>

            <div className="mt-4 mb-6">
                <CustomPagination pageCount={337} />
            </div>
        </>
    );
}
