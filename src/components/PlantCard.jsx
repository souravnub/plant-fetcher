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
import Link from "next/link";

export function PlantCardSmall({ id, image, name, scientificName, className }) {
    return (
        <Link
            href={`/plants/${id}`}
            className={cn(
                "overflow-hidden max-w-xs p-3 rounded-lg hover:bg-primary-foreground hover:cursor-pointer",
                className
            )}>
            <Image
                alt="Product image"
                className="aspect-square w-full rounded-md object-cover"
                height="150"
                width="150"
                src={image}
            />
            <div className="mt-3">
                <h3 className="font-medium">{name}</h3>
                <span className="text-sm text-neutral-500">
                    {scientificName}
                </span>
            </div>
        </Link>
    );
}

export default function PlantCard({
    id,
    commonName,
    scientificNames,
    image,
    className,
}) {
    return (
        <Link href={`/plants/${id}`}>
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
        </Link>
    );
}
