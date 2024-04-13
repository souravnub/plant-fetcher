import Image from "next/image";

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Separator } from "./ui/separator";
import React from "react";
import { cn } from "@/lib/utils";

export default function PlantCard({
    commonName,
    scientificNames,
    image,
    className,
}) {
    return (
        <Card
            className={cn(
                "overflow-hidden max-w-xs hover:bg-primary-foreground hover:cursor-pointer",
                className
            )}>
            <CardHeader>
                <CardTitle>{commonName}</CardTitle>
                <ul className="text-xs text-muted-foreground pt-4">
                    <p className="font-medium text-primary mb-2">
                        Scientific names:
                    </p>
                    {scientificNames.map((name, idx) => {
                        return (
                            <li key={name} className="ml-2">
                                <span>{name}</span>

                                {idx !== scientificNames.length - 1 && (
                                    <Separator className="my-1" />
                                )}
                            </li>
                        );
                    })}
                </ul>
            </CardHeader>
            <CardContent>
                <Image
                    alt="Product image"
                    className="aspect-square w-full rounded-md object-cover"
                    height="300"
                    src={image}
                    width="300"
                />
            </CardContent>
        </Card>
    );
}
