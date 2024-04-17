import CustomPagination from "@/components/CustomPagination";
import PlantCard from "@/components/PlantCard";
import PlantSearch from "@/components/PlantSearch";
import PlantsContainer from "@/components/ui/PlantsContainer";
import { getPlantsData } from "@/data/getPlants";

export default async function PlantsPage({ searchParams }) {
    const page = searchParams["page"] ?? "1";
    const plantsData = await getPlantsData(page);
    const plants = plantsData.data;

    return (
        <>
            <PlantSearch />
            <PlantsContainer>
                {plants.map((plant) => {
                    return (
                        <PlantCard
                            id={plant.id}
                            key={plant.id}
                            className={""}
                            commonName={plant.common_name}
                            scientificNames={plant.scientific_name}
                            image={plant.default_image?.original_url}
                        />
                    );
                })}
            </PlantsContainer>

            <div className="mt-4 mb-6">
                <CustomPagination baseUrl={"/plants"} pageCount={337} />
            </div>
        </>
    );
}
