import { PlantCardSmall } from "@/components/PlantCard";
import { Button } from "@/components/ui/button";
import { getPlantsData } from "@/data/getPlants";
import Link from "next/link";
import React from "react";

export default async function Home() {
    const plantsData = await getPlantsData();
    const plants = plantsData.data;

    return (
        <main>
            <section className="w-full py-8">
                <div className="container space-y-20 px-4 md:px-6">
                    <div className="flex flex-col items-center justify-center space-y-4 text-center">
                        <div className="space-y-2">
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                                Plant Details at Your Fingertips
                            </h2>
                            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed dark:text-gray-400">
                                Explore a vast collection of plants with
                                detailed information.
                            </p>
                        </div>
                    </div>
                    <div className="mx-auto grid max-w-sm items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
                        <div className="grid gap-1 ">
                            <h3 className="text-lg font-bold">
                                Plant Categories
                            </h3>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                Discover plants based on their categories and
                                characteristics.
                            </p>
                        </div>
                        <div className="grid gap-1 ">
                            <h3 className="text-lg font-bold">
                                Care Instructions
                            </h3>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                Learn how to care for your plants with detailed
                                instructions.
                            </p>
                        </div>
                        <div className="grid gap-1 ">
                            <h3 className="text-lg font-bold">Plant Gallery</h3>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                View stunning images of various plants from
                                around the world.
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-4 justify-center">
                        <Link href="/plants">
                            <Button>Learn more</Button>
                        </Link>
                    </div>
                </div>
            </section>

            <section className="my-10">
                <h3 className="text-xl font-medium text-center">
                    Plants You might be interested in
                </h3>

                <div className="flex flex-wrap gap-4 justify-center py-4">
                    {plants
                        .slice(0, 4)
                        .map(
                            ({
                                common_name,
                                scientific_name,
                                default_image,
                                id,
                            }) => {
                                return (
                                    <PlantCardSmall
                                        key={id}
                                        id={id}
                                        image={default_image.original_url}
                                        name={common_name}
                                        scientificName={scientific_name}
                                    />
                                );
                            }
                        )}
                </div>
            </section>
        </main>
    );
}
