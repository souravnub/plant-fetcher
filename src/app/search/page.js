import PlantCard from "@/components/PlantCard";
import PlantsContainer from "@/components/ui/PlantsContainer";
import { getPlantsData } from "@/data/getPlants";
import Link from "next/link";
import React from "react";

const SearchPage = async ({ searchParams }) => {
    const q = searchParams["q"];
    const data = await getPlantsData(1, q);

    if (data.data.length === 0) {
        return (
            <div className="space-y-3 text-center pt-20">
                <h1 className="font-bold text-2xl">No Plant found</h1>
                <Link
                    href="/plants"
                    className=" text-sm underline text-center block">
                    Back to plants page
                </Link>
            </div>
        );
    }

    return (
        <>
            <h1 className="font-medium text-2xl text-center">
                Search results for &quot;{q}&quot;
            </h1>
            <Link href="/plants" className="my-3 underline text-center block">
                Back to plants page
            </Link>

            <PlantsContainer>
                {data.data.map((plant) => (
                    <PlantCard
                        id={plant.id}
                        key={plant.id}
                        className={""}
                        commonName={plant.common_name}
                        scientificNames={plant.scientific_name}
                        image={plant.default_image?.original_url}
                    />
                ))}
            </PlantsContainer>
        </>
    );
};

export default SearchPage;
